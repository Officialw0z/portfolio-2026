import React, { useEffect, useRef } from "react";

interface LightningConfig {
  bpm: number;
  amplitude: number;
  stayDuration: number;
  fadeSpeed: number;
  ambientIntensity: number;
}

interface AnimatedBackgroundProps {
  enabled: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    // --- INSTÄLLNINGAR ---
    const config: LightningConfig = {
      bpm: 60,
      amplitude: 1.0,
      stayDuration: 800,
      fadeSpeed: 0.02,
      ambientIntensity: 0.05,
    };
    // ---------------------

    let opacity = 0;
    let isStaying = false;
    let stayStartTime = 0;
    let nextStrikeTime = 0;
    let currentBolt: { x: number; y: number }[] = [];
    let animationFrameId: number;

    // Använd en lokal variabel istället för useState för att undvika infinite loops!
    let staticBoltData: { x: number; y: number }[] | null = null;

    const createBolt = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      displace: number,
    ): { x: number; y: number }[] => {
      const points: { x: number; y: number }[] = [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
      ];
      const iterations = 6;
      let currentDisplace = displace;

      for (let i = 0; i < iterations; i++) {
        for (let j = points.length - 1; j > 0; j--) {
          const p1 = points[j - 1];
          const p2 = points[j];
          const midX = (p1.x + p2.x) / 2;
          const midY =
            (p1.y + p2.y) / 2 + (Math.random() - 0.5) * currentDisplace;
          points.splice(j, 0, { x: midX, y: midY });
        }
        currentDisplace /= 2;
      }
      return points;
    };

    const drawBoltPath = (
      points: { x: number; y: number }[],
      targetOpacity: number,
      addFlicker: boolean,
    ) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 200, 100, ${targetOpacity})`;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 30;
      ctx.shadowColor = `rgba(249, 115, 22, ${targetOpacity})`;

      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        const flicker = addFlicker ? (Math.random() - 0.5) * 4 : 0;
        ctx.lineTo(points[i].x, points[i].y + flicker);
      }
      ctx.stroke();
    };

    const generateStaticBolt = (width: number, height: number) => {
      const startY = height * 0.5;
      const endY = startY + (Math.random() - 0.5) * 100;
      staticBoltData = createBolt(
        0,
        startY,
        width,
        endY,
        200 * config.amplitude,
      );
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (!enabled) {
        generateStaticBolt(canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!enabled) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width,
        );
        gradient.addColorStop(0, "rgba(249, 115, 22, 0.03)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!staticBoltData) {
          generateStaticBolt(canvas.width, canvas.height);
        }

        if (staticBoltData) {
          drawBoltPath(staticBoltData, 0.4, false);
        }

        return; // Viktigt: Vi stannar här när effekten är avstängd
      }

      // Rensa den statiska blixten när animationen slås på igen
      if (staticBoltData) {
        staticBoltData = null;
      }

      const now = Date.now();

      if (now > nextStrikeTime && opacity <= 0) {
        const startY = canvas.height * (0.3 + Math.random() * 0.4);
        const endY = startY + (Math.random() - 0.5) * 200;
        currentBolt = createBolt(
          0,
          startY,
          canvas.width,
          endY,
          300 * config.amplitude,
        );

        opacity = 1;
        isStaying = true;
        stayStartTime = now;

        const interval = (60 / config.bpm) * 1000;
        nextStrikeTime = now + interval + Math.random() * interval;
      }

      if (opacity > 0) {
        if (isStaying) {
          if (now - stayStartTime > config.stayDuration) {
            isStaying = false;
          }
        } else {
          opacity -= config.fadeSpeed;
        }

        const currentOpacity = Math.max(0, opacity);

        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width,
        );
        gradient.addColorStop(
          0,
          `rgba(249, 115, 22, ${currentOpacity * config.ambientIntensity})`,
        );
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (currentBolt.length > 0) {
          drawBoltPath(currentBolt, currentOpacity, isStaying);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]); // <-- Endast "enabled" är en dependency nu!

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-neutral-950 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;

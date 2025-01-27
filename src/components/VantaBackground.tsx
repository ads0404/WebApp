// src/components/VantaBackground.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import "./VantaBackground.css";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: ReturnType<typeof WAVES> | null = null;

    if (vantaRef.current) {
      vantaEffect = WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: .50,
        scaleMobile: 1.0,
        color: 0x7583b1,
        waveHeight: 7.5,
        waveSpeed: 0.7,
        zoom: 1.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="vanta-background" ref={vantaRef}></div>
  );
}

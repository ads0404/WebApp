import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three"; // Ensure three.js is available
import "./VantaBackground.css";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: ReturnType<typeof FOG> | null = null;

    if (vantaRef.current) {
      vantaEffect = FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x69d,
        midtoneColor: 0xf0f0f,
        lowlightColor: 0x90943,
        baseColor: 0x0,
        blurFactor: 0.6,
        zoom: 1,
        speed: 1,
        THREE: THREE, // Required for Vanta.js
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div className="vanta-background" ref={vantaRef}></div>;
}

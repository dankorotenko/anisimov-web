"use client";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

// Define types for context and raf
type SmoothScrollerContextType = Lenis | null;

const SmoothScrollerContext = createContext<SmoothScrollerContextType>(null);

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

interface ScrollContextProps {
  children: ReactNode;
}

const ScrollContext = ({ children }: ScrollContextProps) => {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf: number;

    function raf(time: number) {
      scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState!);
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
};

export default ScrollContext;

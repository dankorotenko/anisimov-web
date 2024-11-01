"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollContext from "@/components/ScrollContext";

function InfiniteLoopPage() {
  const cardsRef = useRef(null);
  const scrollPosRef = useRef(0);
  const totalWidthRef = useRef(0);

  useEffect(() => {
    const items = gsap.utils.toArray(".cards li") as HTMLLIElement[];
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;
    const totalWidth = totalItems * itemWidth;

    // Set the total width for the carousel
    totalWidthRef.current = totalWidth;

    // Scroll handler to control the carousel position
    const handleScroll = (event) => {
      const delta = event.deltaY || event.deltaX;
      scrollPosRef.current += delta;

      gsap.set(cardsRef.current, {
        x: `-=${delta}`,
        modifiers: {
          x: (x) => {
            const numericX = parseFloat(x);
            // Reset position to create seamless loop
            if (numericX <= -totalWidth) {
              scrollPosRef.current = 0; // Reset scroll position
              return `${scrollPosRef.current}px`;
            } else if (numericX > 0) {
              scrollPosRef.current = -totalWidth + delta; // Adjust position to keep in bounds
              return `${scrollPosRef.current}px`;
            }
            return `${numericX}px`;
          },
        },
      });
    };

    // Attach scroll event listeners
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("pointermove", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("pointermove", handleScroll);
    };
  }, []);

  return (
    <ScrollContext>
      <main className="pt-16 grid place-items-center h-dvh">
        <div className="gallery absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
          <ul ref={cardsRef} className="cards flex">
            <li className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold">1</li>
            <li className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold">2</li>
            <li className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold">3</li>
            <li className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold">4</li>
            <li className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold">5</li>
          </ul>
        </div>
      </main>
    </ScrollContext>
  );
}

export default InfiniteLoopPage;

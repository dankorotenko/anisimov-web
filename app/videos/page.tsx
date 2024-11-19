"use client";
import { useEffect, useRef } from "react";
import ScrollContext from "@/components/ScrollContext";

function InfiniteLoopPage() {
  const containerRef = useRef<HTMLDivElement | null>(null); // Type for container div
  const ulRefs = useRef<HTMLUListElement[]>([]); // Type for array of ul elements

  useEffect(() => {
    const container = containerRef.current;
    const [ul1, ul2] = ulRefs.current;

    if (!container || !ul1 || !ul2) return; // Type safety check

    const adjustPosition = () => {
      if (container.scrollLeft >= ul2.offsetLeft) {
        // If the second ul reaches the start of the viewport, swap them
        container.scrollLeft -= ul2.offsetLeft;
      } else if (container.scrollLeft <= 0) {
        // Reverse scroll to the second ul if user scrolls backwards
        container.scrollLeft += ul2.offsetLeft;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY; // Speed up the scroll
      adjustPosition();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <ScrollContext>
      <main className="pt-16 grid place-items-center h-dvh">
        <div className="w-full overflow-hidden grid grid-flow-col" ref={containerRef}>
          <ul
            ref={(el) => {
              if (el) ulRefs.current[0] = el;
            }}
            className="grid grid-flow-col gap-4 pl-4"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <li
                key={i}
                className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold"
              >
                {i + 1}
              </li>
            ))}
          </ul>
          <ul
            ref={(el) => {
              if (el) ulRefs.current[1] = el;
            }}
            className="grid grid-flow-col gap-4 pl-4"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <li
                key={i + 5}
                className="rounded-lg ml-4 min-w-[646px] aspect-video bg-red-500 font-clash text-8xl text-center font-bold"
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ScrollContext>
  );
}

export default InfiniteLoopPage;

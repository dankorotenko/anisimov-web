"use client";
import { useEffect, useRef } from "react";
import ScrollContext from "@/components/ScrollContext";

function InfiniteLoopPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ulRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const [ul1, ul2] = ulRefs.current;

    if (!container || !ul1 || !ul2) return;

    const adjustPosition = () => {
      if (container.scrollLeft >= ul2.offsetLeft) {
        container.scrollLeft -= ul2.offsetLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += ul2.offsetLeft;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      container.scrollLeft += e.deltaY; // Increase speed by 8x
      adjustPosition();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <ScrollContext>
      <main className="pt-16 grid place-items-center h-dvh">
        <div
          className="hidden w-full overflow-hidden md:grid grid-flow-col"
          ref={containerRef}
        >
          <div
            ref={(el) => {
              if (el) ulRefs.current[0] = el;
            }}
            className="grid grid-flow-col gap-4 pl-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              key={1}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video1.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={2}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video2.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={3}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video3.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={4}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video4.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={5}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video5.mov" />
            </video>
          </div>
          <div
            ref={(el) => {
              if (el) ulRefs.current[1] = el;
            }}
            className="grid grid-flow-col gap-4 pl-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              key={6}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video1.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={7}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video2.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={8}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video3.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={9}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video4.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={10}
              className="rounded-lg ml-4 min-w-[646px] aspect-video font-clash text-8xl text-center font-bold"
            >
              <source src="/videos/video5.mov" />
            </video>
          </div>
        </div>
        <div className="grid md:hidden px-4 gap-y-4">
        <video
              autoPlay
              loop
              muted
              playsInline
              key={1}
              className="rounded-lg aspect-[4/3] object-cover font-clash"
            >
              <source src="/videos/video1.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={2}
              className="rounded-lg aspect-[4/3] object-cover font-clash"
            >
              <source src="/videos/video2.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={3}
              className="rounded-lg aspect-[4/3] object-cover font-clash"
            >
              <source src="/videos/video3.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={4}
              className="rounded-lg aspect-[4/3] object-cover font-clash"
            >
              <source src="/videos/video4.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              key={5}
              className="rounded-lg aspect-[4/3] object-cover font-clash"
            >
              <source src="/videos/video5.mov" />
            </video>
        </div>
      </main>
    </ScrollContext>
  );
}

export default InfiniteLoopPage;

import camera from "@/images/camera.png";
import phone from "@/images/phone.png";
import ScrollContext from "@/components/ScrollContext";
import TiltCard from "@/components/TiltCard";

const page = () => {
  return (
    <ScrollContext>
      <main className="relative w-full pt-16 md:pt-20">
        <h1 className="font-clash font-bold text-3xl md:text-6xl lg:text-8xl text-center text-primary">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-16 gap-8 pb-20 w-full mx-auto px-4 md:w-[calc(100%-16px)]">
          <TiltCard img={camera} text="@anisimov.photo" href="/" />
          <TiltCard img={phone} text="@anisimov.photo" href="/" />
          <TiltCard img={camera} text="@anisimov.photo" href="/" />
          <TiltCard img={phone} text="@anisimov.photo" href="/" />
          <TiltCard img={camera} text="@anisimov.photo" href="/" />
          <TiltCard img={phone} text="@anisimov.photo" href="/" />
        </div>
      </main>
    </ScrollContext>
  );
};

export default page;

"use client";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import anisimov from "@/images/anisimov.webp";
import ScrollContext from "@/components/ScrollContext";
import MagneticButton from "@/components/MagneticButton";
import Footer from "@/components/Footer";
import image1 from "@/images/image1.webp";
import image2 from "@/images/image2.webp";
import image3 from "@/images/image3.webp";
import image4 from "@/images/image4.webp";
import image5 from "@/images/image5.webp";
import image6 from "@/images/image6.webp";
import image7 from "@/images/image7.webp";
import image8 from "@/images/image8.webp";
import image9 from "@/images/image9.webp";
import Card from "@/components/Card";
import TickerTape from "@/components/TicketTape";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef = useRef(null);

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);

  const openModalAndPlayVideo = () => {
    setIsOpenVideoModal(true);
    if (videoRef.current && typeof videoRef.current.play === "function") {
      videoRef.current.play(); // Play the video
    } else {
      console.error(
        "Video element is not accessible or 'play' is not a function"
      );
    }
  };

  const closeModalAndStopVideo = () => {
    setIsOpenVideoModal(false);
    videoRef.current.pause();
  };

  useGSAP(() => {
    timeline.fromTo(
      "#camera-card",
      {
        y: -100,
        rotate: "10deg",
      },
      {
        y: 0,
        rotate: "-10deg",
        x: 40,
        scrollTrigger: {
          trigger: "#camera-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.to("#reveal-section-1", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        end: "+=100%",
        pinSpacing: false,
        scrub: true,
        pin: true,
        //markers:true
      },
    });
    timeline
      .to("#video", {
        scale: 1,
        borderRadius: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom 30%",
          end: "bottom -30%",
          scrub: true,
          // markers: true,
        },
      })
      .to("#text-right", {
        scale: 1,
        translateX: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom 30%",
          end: "bottom -30%",
          scrub: true,
        },
      })
      .to("#text-left", {
        scale: 1,
        translateX: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom 30%",
          end: "bottom -30%",
          scrub: true,
        },
      });

    const uls = gsap.utils.toArray(".wrapper");

    uls.forEach((ul, index) => {
      const [x, xEnd] = index % 2 ? ["-100%", "10%"] : ["-100%", "-10%"];
      gsap.fromTo(
        //@ts-expect-error because
        ul,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: ul,
            scrub: 0.25,
            // markers: true,
            start: "bottom, bottom",
            end: "top 50%",
          },
        }
      );
    });

    timeline.to("#phone-card", {
      rotate: "-10deg",
      y: -80,
      x: 60,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 40%",
        end: "bottom 60%",
        scrub: true,
        // markers: true,
      },
    });
  }, []);
  return (
    <ScrollContext>
      <main className="relative w-full h-auto overflow-hidden">
        <section
          id="hero"
          className="z-[2] relative w-full mb-[100svh] bg-base"
        >
          <div className="relative z-[2] h-svh grid grid-cols-4 md:grid-cols-12 gap-x-2 md:gap-x-4 grid-rows-[1fr_auto] w-full px-4 md:px-8 mx-auto">
            {/* <CursorTrail /> */}

            <div className="grid w-full pt-12 md:pt-20 col-[1/5] md:col-[1/13] md:row-[1] md:relative gap-y-12 grid-cols-4 md:grid-cols-12 gap-x-2 content-center">
              <h1 className="font-clash col-start-2 col-end-4 uppercase font-bold font-base text-center md:text-xl text-white md:col-start-6 md:col-end-8 md:row-[1] self-center">
                Media
                <br />
                Production
              </h1>
              <ul className="col-[2/4] md:col-[1/13] md:row-[1] md:flex md:justify-between md:items-center">
                <li className="text-center">
                  <a
                    href="https://www.instagram.com/anisimov_media"
                    target="_blank"
                    className="font-clash font-semibold text-white text-lg md:text-xl leading-tight"
                  >
                    @anisimov_media
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="https://t.me/tanisimov"
                    target="_blank"
                    className="font-clash font-semibold text-white text-lg md:text-xl leading-tight"
                  >
                    @tanisimov
                  </a>
                </li>
              </ul>
            </div>

            <figure className="col-start-1 col-end-5 pb-2 md:pb-4 md:col-end-13">
              <svg
                width="1930"
                height="287"
                viewBox="0 0 1930 287"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto text-primary"
              >
                <path
                  d="M232.98 282H159.06V234.96H154.86V159.78C154.86 149.14 152.06 142.42 146.46 139.62C141.14 136.54 131.48 135 117.48 135C104.6 135 95.64 136.54 90.6 139.62C85.84 142.7 83.46 148.72 83.46 157.68V159.36H4.5V158.52C4.5 139.76 9.4 123.52 19.2 109.8C29 95.8 42.86 85.02 60.78 77.46C78.7 69.9 99.56 66.12 123.36 66.12C148 66.12 168.44 70.04 184.68 77.88C200.92 85.44 212.96 96.36 220.8 110.64C228.92 124.64 232.98 141.58 232.98 161.46V282ZM75.06 286.2C51.26 286.2 32.78 281.02 19.62 270.66C6.74 260.3 0.3 246.16 0.3 228.24C0.3 218.16 2.68 209.2 7.44 201.36C12.2 193.52 19.62 187.22 29.7 182.46C39.78 177.42 52.8 174.06 68.76 172.38L159.06 163.56V207.24L89.76 215.22C86.12 215.5 83.46 216.34 81.78 217.74C80.38 219.14 79.68 220.96 79.68 223.2C79.68 226.56 81.22 228.8 84.3 229.92C87.66 230.76 92.42 231.18 98.58 231.18C112.58 231.18 123.64 230.48 131.76 229.08C139.88 227.4 145.76 224.46 149.4 220.26C153.04 216.06 154.86 210.04 154.86 202.2L160.74 200.52V237.48H154.86C150.94 252.32 142.4 264.22 129.24 273.18C116.08 281.86 98.02 286.2 75.06 286.2ZM502.925 282H423.965V175.32C423.965 160.48 420.745 150.4 414.305 145.08C407.865 139.48 395.965 136.68 378.605 136.68C361.245 136.68 349.625 139.34 343.745 144.66C338.145 149.7 335.345 159.08 335.345 172.8H327.365L320.645 134.58H334.505C336.185 122.82 339.965 111.76 345.845 101.4C352.005 91.04 360.965 82.64 372.725 76.2C384.765 69.48 400.165 66.12 418.925 66.12C437.965 66.12 453.645 69.62 465.965 76.62C478.565 83.62 487.805 93.14 493.685 105.18C499.845 117.22 502.925 130.94 502.925 146.34V282ZM335.345 282H256.385V70.32H330.305V135.42L335.345 137.52V282ZM605.228 282H526.268V70.32H605.228V282ZM605.228 51H526.268V0.599993H605.228V51ZM744.268 286.2C707.028 286.2 678.608 279.34 659.008 265.62C639.408 251.9 629.608 232.86 629.608 208.5V206.82H708.568V211.02C708.568 216.9 710.948 220.54 715.708 221.94C720.748 223.34 730.408 224.04 744.688 224.04C758.408 224.04 767.088 223.34 770.728 221.94C774.368 220.26 776.188 217.6 776.188 213.96C776.188 210.6 774.788 208.36 771.988 207.24C769.188 205.84 762.888 204.58 753.088 203.46L691.768 196.74C669.928 194.5 653.268 188.34 641.788 178.26C630.308 167.9 624.568 153.76 624.568 135.84C624.568 123.24 628.068 111.76 635.068 101.4C642.348 90.76 653.968 82.22 669.928 75.78C686.168 69.34 707.448 66.12 733.768 66.12C758.408 66.12 778.988 69.06 795.508 74.94C812.308 80.82 824.908 89.64 833.308 101.4C841.988 112.88 846.328 127.3 846.328 144.66V146.34H767.368V143.82C767.368 140.18 766.528 137.24 764.848 135C763.448 132.48 760.088 130.66 754.768 129.54C749.728 128.42 741.888 127.86 731.248 127.86C718.368 127.86 710.248 128.84 706.888 130.8C703.808 132.48 702.268 135.28 702.268 139.2C702.268 142 703.808 144.24 706.888 145.92C710.248 147.6 718.088 149.14 730.408 150.54L772.408 155.16C803.208 158.52 824.488 165.38 836.248 175.74C848.008 186.1 853.888 200.24 853.888 218.16C853.888 231.32 849.548 243.08 840.868 253.44C832.468 263.52 820.148 271.5 803.908 277.38C787.668 283.26 767.788 286.2 744.268 286.2ZM951.81 282H872.85V70.32H951.81V282ZM951.81 51H872.85V0.599993H951.81V51ZM1374.35 282H1295.39V175.32C1295.39 160.48 1292.59 150.4 1286.99 145.08C1281.67 139.48 1270.75 136.68 1254.23 136.68C1237.99 136.68 1227.35 139.34 1222.31 144.66C1217.55 149.7 1215.17 159.08 1215.17 172.8H1207.19L1200.47 134.58H1214.75C1216.43 122.82 1219.93 111.76 1225.25 101.4C1230.85 91.04 1239.25 82.64 1250.45 76.2C1261.65 69.48 1276.35 66.12 1294.55 66.12C1312.75 66.12 1327.73 69.62 1339.49 76.62C1351.25 83.62 1359.93 93.14 1365.53 105.18C1371.41 117.22 1374.35 130.94 1374.35 146.34V282ZM1055.99 282H977.03V70.32H1050.95V135.42L1055.99 137.52V282ZM1215.17 282H1136.21V175.32C1136.21 160.48 1133.41 150.4 1127.81 145.08C1122.49 139.48 1111.57 136.68 1095.05 136.68C1078.81 136.68 1068.17 139.34 1063.13 144.66C1058.37 149.7 1055.99 159.08 1055.99 172.8H1048.01L1041.29 134.58H1055.15C1056.83 122.82 1060.33 111.76 1065.65 101.4C1070.97 91.04 1078.95 82.64 1089.59 76.2C1100.51 69.48 1114.79 66.12 1132.43 66.12C1150.91 66.12 1165.89 69.76 1177.37 77.04C1188.85 84.32 1197.25 94.12 1202.57 106.44C1208.17 118.48 1210.97 131.78 1210.97 146.34H1215.17V282ZM1515.03 286.2C1490.67 286.2 1469.11 281.86 1450.35 273.18C1431.87 264.22 1417.45 251.48 1407.09 234.96C1396.73 218.44 1391.55 198.84 1391.55 176.16C1391.55 153.2 1396.73 133.6 1407.09 117.36C1417.45 100.84 1431.87 88.24 1450.35 79.56C1469.11 70.6 1490.67 66.12 1515.03 66.12C1539.67 66.12 1561.23 70.6 1579.71 79.56C1598.19 88.24 1612.61 100.84 1622.97 117.36C1633.33 133.6 1638.51 153.2 1638.51 176.16C1638.51 198.84 1633.33 218.44 1622.97 234.96C1612.61 251.48 1598.19 264.22 1579.71 273.18C1561.23 281.86 1539.67 286.2 1515.03 286.2ZM1515.03 216.48C1532.95 216.48 1544.99 213.68 1551.15 208.08C1557.31 202.2 1560.39 191.56 1560.39 176.16C1560.39 160.76 1557.31 150.12 1551.15 144.24C1544.99 138.36 1532.95 135.42 1515.03 135.42C1497.11 135.42 1485.07 138.36 1478.91 144.24C1472.75 150.12 1469.67 160.76 1469.67 176.16C1469.67 191.56 1472.75 202.2 1478.91 208.08C1485.07 213.68 1497.11 216.48 1515.03 216.48ZM1834.3 282H1736.86L1642.78 70.32H1730.98L1783.9 205.14H1789.36L1842.7 70.32H1929.22L1834.3 282Z"
                  fill="currentColor"
                />
              </svg>
            </figure>
          </div>
          <div
            id="camera-section"
            className="relative z-[1] grid grid-cols-4 md:grid-cols-12 grid-x-2 md:gap-x-4 grid-rows-[1fr_auto] w-[calc(100% - 16px)] px-2 md:px-4 mx-2 md:mx-4 mt-7 rounded-lg bg-base-2"
          >
            <div className="col-[2/4] self-center h-fit mt-16 md:col-[3/6] md:mt-0">
              <Card id="camera-card">
                <Image
                  src={anisimov}
                  alt="anisimov"
                  className="size-full rounded-md"
                />
                <figcaption className="mt-2">
                  <a
                    href="https://www.instagram.com/anisimov_media"
                    target="_blank"
                    className="font-clash text-lg font-bold text-text"
                  >
                    @anisimov_media
                  </a>
                </figcaption>
              </Card>
            </div>
            <div className="col-[2/5] pt-14 pb-16 md:col-[8/11] md:py-32">
              <p className="font-clash text-white font-semibold text-xl leading-tight md:text-2xl">
                For what is Anisimov Media stand for?{" "}
                <b className="font-clash text-white font-normal text-lg leading-tight">
                  *clears throat*
                </b>{" "}
                <br /> Allow us to spotlight you.
              </p>
              <p className="font-clash mt-6 text-xl leading-tight font-normal text-white">
                We translate your philosophy into digital content. From point A,
                wherever it is to point B, where your target audience is
                hypnotized.
              </p>
              <p className="font-clash mt-6 text-xl leading-tight font-normal text-white">
                Dynamic and passionate, yours
              </p>
              <MagneticButton
                className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
                scale={1.5}
                tollerance={0.8}
                speed={0.5}
                borderRadius="50%"
              >
                <a href="/team">the team</a>
              </MagneticButton>
            </div>
            <div className="col-[1/5] md:col-[1/13] grid">
              <TickerTape />
            </div>
          </div>
        </section>

        <section
          id="reveal-section-1"
          className="fixed top-0 z-[1] h-svh w-full grid place-items-center"
        >
          <div className="flex w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center z-[2] pointer-events-none">
            <span
              id="text-left"
              className="font-clash text-primary font-bold text-4xl md:text-8xl leading-tight scale-[0.4] px-2 -translate-x-[40%] lg:-translate-x-[100%]"
            >
              PLAY
            </span>
            <span
              id="text-right"
              className="font-clash text-primary font-bold text-4xl md:text-8xl leading-tight scale-[0.4] px-2 translate-x-[40%] lg:translate-x-[100%]"
            >
              REEL
            </span>
          </div>
          <video
            id="video"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-svh rounded-lg scale-[0.43] md:object-contain cursor-pointer"
            onClick={openModalAndPlayVideo}
          >
            <source src="/videos/reel.mp4" />
          </video>
        </section>
        <section className="w-full pt-60 pb-10">
          <h2 className="w-full text-3xl md:text-6xl lg:text-8xl font-clash font-bold text-center uppercase text-primary leading-[0.8] text">
            Video <br /> Showcase
          </h2>
          <div className="px-4 mx-auto mt-10 flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-32">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/3] object-cover md:object-contain rounded-md  md:col-[1/7] md:row-[1] md:aspect-video md:translate-y-1/4 md:-translate-x-[55%]"
            >
              <source src="/videos/video1.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/3] object-cover md:object-contain rounded-md md:col-[4/10] md:row-[1] md:aspect-video"
            >
              <source src="/videos/video2.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/3] object-cover md:object-contain rounded-md md:col-[7/13] md:row-[1] md:aspect-video md:-translate-y-3/4 md:translate-x-[60%]"
            >
              <source src="/videos/video3.mov" />
            </video>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/3] object-cover md:object-contain rounded-md md:col-[7/13] md:row-[2] md:aspect-video md:-translate-y-3/4 md:translate-x-[60%]"
            >
              <source src="/videos/video4.mov" />
            </video>
          </div>
          <div className="w-full grid place-items-center mt-10 md:-mt-80">
            <MagneticButton
              className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
              scale={1.5}
              tollerance={0.8}
              speed={0.5}
              borderRadius="50%"
            >
              <a href="/videos">all videos</a>
            </MagneticButton>
          </div>
        </section>
        <section className="w-full pt-60 pb-10">
          <div>
            <h2 className="font-clash text-3xl md:text-6xl lg:text-8xl font-bold text-center uppercase text-primary">
              Photo <br /> Showcase
            </h2>
            <div className="mt-20">
              <ul className="wrapper flex gap-4 py-4">
                <Image
                  src={image1}
                  alt="image1"
                  width={image1.width}
                  height={image1.height}
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image2}
                  width={image2.width}
                  height={image2.height}
                  alt="image2"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image3}
                  width={image3.width}
                  height={image3.height}
                  alt="image3"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
              </ul>
              <ul className="wrapper flex gap-4 py-4">
                <Image
                  src={image6}
                  width={image6.width}
                  height={image6.height}
                  alt="image6"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image7}
                  width={image7.width}
                  height={image7.height}
                  alt="image7"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image4}
                  width={image4.width}
                  height={image4.height}
                  alt="image4"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
              </ul>
              <ul className="wrapper flex gap-4 py-4">
                <Image
                  src={image8}
                  width={image8.width}
                  height={image8.height}
                  alt="image8"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image5}
                  width={image5.width}
                  height={image5.height}
                  alt="image5"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
                <Image
                  src={image9}
                  width={image9.width}
                  height={image9.height}
                  alt="image9"
                  className="w-[600px] h-[400px] object-cover"
                  quality={50}
                  placeholder="blur"
                />
              </ul>
            </div>
            <div className="w-full grid place-items-center mt-10">
              <MagneticButton
                className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
                scale={1.5}
                tollerance={0.8}
                speed={0.5}
                borderRadius="50%"
              >
                <a href="/photos">all photos</a>
              </MagneticButton>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-32">
          <h2 className="font-clash text-3xl md:text-6xl lg:text-8xl font-bold text-center uppercase text-primary leading-[0.8]">
            Let&apos;s do <br /> something <br /> awesome <br />
            together!
          </h2>
          <div className="relative z-[1] grid grid-cols-4 md:grid-cols-12 grid-x-2 md:gap-x-4 grid-rows-[1fr_auto] w-[calc(100% - 16px)] px-2 md:px-4 mx-2 md:mx-4 mt-7">
            <div className="col-[2/4] self-center h-fit mt-16 md:col-[3/6] md:mt-0">
              <Card id="phone-card">
                <Image
                  src={anisimov}
                  alt="phone"
                  className="rounded-md size-full"
                />
                <figcaption className="mt-2">
                  <a
                    href="https://www.instagram.com/anisimov_media"
                    target="_blank"
                    className="font-clash text-lg font-bold text-text"
                  >
                    @anisimov_media
                  </a>
                </figcaption>
              </Card>
            </div>
            <div className="col-[2/5] py-2 md:col-[8/11] md:py-4">
              <p className="font-clash text-white font-semibold text-xl leading-tight md:text-2xl">
                We&apos;d be excited for a collaboration opportunity in your
                next venture.
              </p>
              <p className="font-clash text-white font-semibold text-xl leading-tight md:text-2xl">
                Hit us up and let&apos;s schedule a call.
              </p>
              <MagneticButton
                className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
                scale={1.5}
                tollerance={0.8}
                speed={0.5}
                borderRadius="50%"
              >
                <a href="mailto:anisimovmedia@gmail.com">contact me</a>
              </MagneticButton>
            </div>
          </div>
        </section>
        <Footer />
        <div className="py-2 text-text font-clash w-full md:w-[calc(100%-16px)] md:mx-2 text-center flex items-center justify-center">
          {/* <div className="font-bold">Copyright © 2024 Anisimov Media</div> */}
          <div className="font-semibold flex items-center gap-2">
            Webiste made by{" "}
            <a
              href="/"
              className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-[#4040f0]"
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M90.1635 27.2554C87.6937 27.5595 83.9444 28.1559 82.4939 28.476C82.0379 28.5769 81.1518 28.7708 80.5247 28.9074C78.4804 29.3532 73.6123 30.7549 72.2333 31.2948C71.4922 31.585 70.4869 31.9574 69.9993 32.1229C69.1209 32.4208 66.2966 33.7102 62.9106 35.3602C49.4645 41.9112 36.3868 55.0594 29.7423 68.7066C27.4984 73.315 29.1292 77.0907 33.3625 77.0907C35.7872 77.0907 37.0066 76.0397 38.9204 72.2987C40.7289 68.7635 43.2723 64.8032 45.4602 62.1147C45.8411 61.6466 46.4936 60.8449 46.9102 60.3329C52.8795 52.9946 63.163 45.3605 71.4663 42.1036C72.0592 41.8709 72.8707 41.5388 73.2697 41.3655C73.6687 41.1923 74.1818 40.9704 74.4098 40.8726C76.4676 39.9892 82.453 38.3652 85.9142 37.7502C94.0304 36.3087 103.159 36.3977 110.685 37.9912C123.818 40.7728 136.015 47.448 144.703 56.6089C154.232 66.6569 159.942 77.8013 162.404 91.159C163.314 96.0942 163.705 104.164 163.227 108.124C162.638 112.997 162.568 113.424 161.77 117.02C161.295 119.165 161.287 119.192 160.255 122.502C158.881 126.908 156.614 132.011 154.48 135.499C153.935 136.39 153.489 137.159 153.489 137.209C153.489 137.259 152.904 138.16 152.19 139.211C145.772 148.648 137.451 156 127.176 161.312C122.667 163.644 121.535 166.851 124.188 169.781C126.421 172.248 128.068 171.985 135.391 167.992C149.081 160.528 161.712 145.794 168.001 129.951C168.564 128.533 169.606 125.478 170.26 123.33C171.122 120.498 172.171 115.365 172.798 110.917C173.14 108.489 173.141 98.1952 172.799 95.2967C172.444 92.2803 171.919 88.9277 171.52 87.1247C171.419 86.6695 171.227 85.7851 171.093 85.1593C170.959 84.5334 170.779 83.7886 170.693 83.5042C170.606 83.2197 170.417 82.568 170.273 82.056C169.931 80.8384 168.445 76.2776 168.217 75.7459C168.12 75.5184 167.83 74.7736 167.574 74.0908C165.234 67.8542 160.315 59.7996 154.942 53.4043C148.213 45.3952 136.56 36.6956 128.2 33.4402C127.801 33.2846 127.007 32.9484 126.435 32.6929C124.195 31.6926 122.686 31.1464 119.909 30.3328C119.054 30.0825 118.121 29.8047 117.836 29.7163C116.684 29.3573 115.013 28.9529 112.654 28.4626C112.027 28.3317 111.141 28.145 110.685 28.0472C109.793 27.8564 107.537 27.5673 104.327 27.2331C101.95 26.9854 92.2338 27.0009 90.1635 27.2554ZM27.0258 116.88C23.8331 118.559 23.675 121.242 26.3583 128.192C26.6439 128.931 27.0196 129.954 27.1937 130.465C28.7188 134.947 34.3394 144.773 37.6627 148.766C44.4477 156.919 52.6303 164.177 58.7265 167.45C59.3717 167.796 60.5061 168.414 61.2471 168.823C68.0347 172.566 75.5001 175.365 77.5611 174.94C81.6824 174.09 82.98 169.371 79.8842 166.492C79.2888 165.939 78.3151 165.506 76.0681 164.795C73.3107 163.923 67.3838 161.256 65.0249 159.826C64.2922 159.381 63.6517 159.018 63.6019 159.018C63.5522 159.018 62.652 158.446 61.6021 157.747C48.2089 148.833 38.7597 136.172 34.2927 121.157C33.0526 116.989 30.1107 115.257 27.0258 116.88Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.7153 0.354085C0.210159 2.27451 -8.34299 32.0067 9.6339 70.1612C42.8671 140.697 128.4 207.235 175.201 198.959C200.523 194.481 207.044 166.006 190.783 130.92C190.45 130.201 190.177 129.571 190.177 129.52C190.177 128.984 188.519 126.186 187.876 125.637C183.985 122.313 178.496 126.531 180.511 131.296C180.776 131.922 181.697 134.065 182.559 136.059C199.663 175.629 187.469 196.744 152.5 188.109C96.8739 174.371 21.7441 97.96 11.0025 44.1969C4.44294 11.3641 25.1192 1.26438 64.7487 17.9446C68.8628 19.6762 69.7821 19.9912 70.7211 19.9912C74.5357 19.9912 76.7132 15.8607 74.6326 12.5707C73.9994 11.5699 73.4723 11.2477 69.8474 9.64742C53.96 2.6319 40.9611 -0.378293 29.7153 0.354085Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.6327 0.0489096C14.647 0.922487 3.56651 10.2391 0.748978 24.3348C0.62357 24.9606 0.404883 25.9847 0.262892 26.6105C-0.0920849 28.1725 -0.0858665 38.1155 0.271184 40.4719C0.876459 44.4607 1.08841 45.5572 1.97456 49.2646C3.05763 53.7964 5.46992 61.309 6.83541 64.403C7.23029 65.2983 7.53863 66.0363 7.77079 66.643C8.84557 69.4515 13.6375 79.155 16.0197 83.3481C16.3592 83.946 16.8328 84.7844 17.0717 85.2111C18.0071 86.8801 18.3201 87.4129 19.7182 89.7109C21.9455 93.3712 22.4036 94.0907 25.0486 98.0898C28.1247 102.74 32.2984 108.528 35.4906 112.572C36.2094 113.482 37.236 114.785 37.7723 115.468C38.3082 116.151 38.7994 116.756 38.8637 116.813C38.9279 116.87 39.7643 117.894 40.7225 119.089C41.6807 120.284 42.5171 121.308 42.5814 121.364C42.6451 121.421 43.1146 121.98 43.6245 122.606C44.1345 123.232 44.6034 123.79 44.6661 123.847C44.7294 123.904 45.5176 124.788 46.4177 125.813C53.3872 133.74 64.1572 144.671 70.9863 150.749C72.0694 151.712 73.0021 152.547 73.0591 152.605C73.3851 152.931 77.8246 156.682 81.0396 159.346C86.6535 163.999 87.5925 164.723 95.6772 170.623C98.9046 172.978 107.893 178.915 110.682 180.533C114.144 182.543 115.132 183.107 116.432 183.815C117.259 184.265 118.543 184.972 119.284 185.386C120.562 186.099 126.852 189.208 128.405 189.894C129.875 190.543 131.224 191.142 132.032 191.504C136.443 193.48 146.141 196.864 149.755 197.686C162.537 200.597 171.676 200.755 179.365 198.197C189.823 194.718 197.282 186.357 199.183 175.982C199.255 175.584 199.465 174.467 199.648 173.5C200.072 171.266 200.128 162.674 199.736 160.052C198.763 153.542 197.305 147.337 195.629 142.57C195.349 141.774 194.95 140.61 194.743 139.984C193.959 137.615 191.617 131.998 189.385 127.134C187.363 122.727 180.96 123.524 179.825 128.324C179.537 129.542 179.734 130.43 180.803 132.743C181.854 135.014 182.259 135.938 182.719 137.104C182.962 137.721 183.283 138.505 183.433 138.846C184.35 140.937 186.547 147.254 187.174 149.604C188.85 155.884 189.416 159.062 189.746 164.038C189.926 166.757 189.713 171.349 189.344 172.696C189.232 173.108 189.139 173.631 189.139 173.858C189.139 174.38 188.024 177.778 187.433 179.056C182.463 189.811 168.531 192.546 148.408 186.718C146.159 186.067 141.499 184.469 140.323 183.947C139.981 183.795 138.955 183.376 138.043 183.015C136.211 182.29 135.223 181.856 131.022 179.928C128.591 178.812 126.698 177.878 125.295 177.102C124.554 176.692 123.155 175.932 122.186 175.414C118.464 173.423 117.082 172.613 112.962 170.01C103.579 164.083 91.3708 155.087 83.838 148.548C76.5177 142.194 73.9391 139.797 67.3738 133.247C62.1917 128.077 56.5649 122.158 54.8993 120.123C54.5734 119.725 54.2557 119.353 54.194 119.296C53.7116 118.85 47.5158 111.474 45.6803 109.158C43.4069 106.291 38.1672 99.3249 37.1997 97.8829C36.8178 97.3139 35.9695 96.1037 35.3144 95.1934C33.0602 92.0606 27.9428 83.9087 25.6394 79.7803C25.3538 79.2683 24.8118 78.3187 24.435 77.6701C22.9597 75.129 18.2999 65.56 17.2925 63.0018C17.0505 62.3874 16.71 61.5588 16.5364 61.1606C16.1068 60.1758 15.9591 59.8023 15.4538 58.4193C15.215 57.765 14.8403 56.7409 14.6216 56.1436C14.4024 55.5462 13.9261 54.0799 13.5629 52.8851C13.1996 51.6903 12.8265 50.48 12.7337 50.1956C12.5819 49.7311 11.9979 47.3483 11.4911 45.1269C11.2941 44.2631 11.0371 42.8853 10.6811 40.7822C9.95351 36.4863 9.94937 29.7728 10.6718 26.8174C10.7692 26.4192 10.9583 25.6278 11.092 25.0589C12.8011 17.7827 17.8216 12.8898 25.3834 11.1308C28.7709 10.3431 36.1617 10.0891 39.3752 10.6498C40.1732 10.7894 41.3625 10.9927 42.0181 11.1023C42.6736 11.2115 43.7929 11.407 44.5055 11.5363C49.9607 12.5257 58.6357 15.5007 67.3588 19.3726C69.9115 20.5053 70.6655 20.6331 72.0434 20.1645C75.8725 18.8616 77.0131 13.7184 73.9847 11.4127C73.3649 10.9415 72.8125 10.6637 70.0535 9.43896C69.4835 9.18605 68.5248 8.75676 67.9226 8.4847C67.3209 8.21316 66.7836 7.99076 66.7286 7.99076C66.6737 7.99076 66.1866 7.7937 65.6466 7.55268C63.9945 6.81668 63.4649 6.59221 62.2803 6.12723C60.9614 5.6095 56.4618 4.12198 54.1961 3.45478C53.3411 3.20341 52.4083 2.91946 52.1233 2.82429C51.8382 2.72912 51.1853 2.5543 50.6723 2.43586C46.0529 1.36936 45.6834 1.28971 42.7954 0.738876C40.2048 0.244935 32.8664 -0.139874 29.6327 0.0489096ZM38.6497 0.558885C46.996 1.17954 57.7972 4.32577 69.8462 9.64637C73.4711 11.2466 73.9981 11.5689 74.6314 12.5697C76.712 15.8597 74.5345 19.9902 70.7199 19.9902C69.7809 19.9902 68.8616 19.6752 64.7475 17.9435C13.98 -3.4242 -4.727 20.1784 21.476 72.5393C54.9019 139.334 143.799 203.917 179.596 187.414C192.409 181.507 193.562 161.515 182.558 136.058C181.696 134.064 180.774 131.921 180.51 131.295C178.495 126.53 183.984 122.312 187.874 125.636C188.518 126.185 190.176 128.983 190.176 129.519C190.176 129.57 190.448 130.2 190.782 130.919C202.551 156.314 202.696 179.086 191.161 190.724C177.42 204.588 150.912 202.282 118.04 184.366C65.8741 155.933 13.8215 95.5104 2.4964 50.2426C-4.22174 23.3909 4.10494 5.10987 24.9465 0.952486C28.8093 0.182351 32.2518 0.0835631 38.6497 0.558885ZM94.3578 37.1007C94.6143 37.1504 95.034 37.1504 95.2906 37.1007C95.5471 37.0516 95.3372 37.0112 94.8242 37.0112C94.3111 37.0112 94.1013 37.0516 94.3578 37.1007ZM100.579 37.1012C100.837 37.1509 101.21 37.1488 101.408 37.0971C101.606 37.0454 101.395 37.0045 100.939 37.0071C100.483 37.0092 100.321 37.0516 100.579 37.1012ZM150.584 48.437C151.318 49.1767 151.966 49.7818 152.023 49.7818C152.08 49.7818 151.526 49.1767 150.791 48.437C150.057 47.6974 149.409 47.0923 149.352 47.0923C149.295 47.0923 149.85 47.6974 150.584 48.437ZM143.536 55.885C143.923 56.2832 144.286 56.6091 144.343 56.6091C144.4 56.6091 144.13 56.2832 143.744 55.885C143.357 55.4867 142.994 55.1609 142.937 55.1609C142.88 55.1609 143.15 55.4867 143.536 55.885ZM51.1775 56.0401L50.5686 56.7125L51.2423 56.1048C51.6128 55.7706 51.916 55.4681 51.916 55.4324C51.916 55.2726 51.745 55.4133 51.1775 56.0401ZM173.462 103.365C173.462 104.56 173.496 105.049 173.538 104.452C173.58 103.854 173.58 102.877 173.538 102.279C173.496 101.682 173.462 102.171 173.462 103.365ZM23.9806 121.158C23.9806 121.556 24.0231 121.719 24.0754 121.52C24.1272 121.321 24.1272 120.995 24.0754 120.796C24.0231 120.596 23.9806 120.759 23.9806 121.158ZM44.4537 156.845C44.8403 157.244 45.2035 157.57 45.2605 157.57C45.3175 157.57 45.0475 157.244 44.661 156.845C44.2744 156.447 43.9111 156.121 43.8541 156.121C43.7971 156.121 44.0671 156.447 44.4537 156.845ZM150.053 157.208L149.444 157.88L150.118 157.272C150.746 156.706 150.887 156.535 150.727 156.535C150.691 156.535 150.388 156.838 150.053 157.208Z"
                  fill="currentColor"
                />
              </svg>
              Synestia
            </a>
          </div>
        </div>
        <motion.div
          initial={{ y: "100%" }}
          animate={isOpenVideoModal ? "opened" : "closed"}
          variants={{
            opened: { y: 0, transition: { duration: 0.5 } },
            closed: { y: "100%", transition: { duration: 0.5 } },
          }}
          className="z-[100] fixed top-0 left-0 bg-base-2 w-full h-svh grid place-items-center"
        >
          <figure className="w-3/4 relative grid place-items-center h-3/4 md:h-auto">
            <video
              ref={videoRef}
              id="video"
              controls
              playsInline
              className="w-full h-full md:h-auto rounded-lg object-cover md:object-contain cursor-pointer"
            >
              <source src="/videos/reel.mp4" />
            </video>
            <button
              className="text-text font-clash font-bold size-10 rounded-lg bg-base p-2 absolute right-2 top-2"
              onClick={closeModalAndStopVideo}
            >
              X
            </button>
          </figure>
        </motion.div>
      </main>
    </ScrollContext>
  );
}

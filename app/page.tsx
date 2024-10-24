"use client";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import camera from "@/images/camera.png";
import phone from "@/images/phone.png";
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
      <main className="relative w-full h-full overflow-hidden">
        <section
          id="hero"
          className="z-[2] relative w-full mb-[100svh] bg-base"
        >
          <div className="relative z-[2] h-svh grid grid-cols-4 md:grid-cols-12 gap-x-2 md:gap-x-4 grid-rows-[1fr_auto] w-full px-4 md:px-8 mx-auto">
            {/* <CursorTrail /> */}

            <div className="grid w-full pt-12 md:pt-20 col-[1/5] md:col-[1/13] md:row-[1] md:relative gap-y-12 grid-cols-4 md:grid-cols-12 gap-x-2 content-center">
              <h1 className="font-clash col-start-2 col-end-4 uppercase font-bold font-base text-center md:text-xl text-white md:col-start-6 md:col-end-8 md:row-[1] self-center">
                Motion Design
                <br />
                Studio
              </h1>
              <ul className="col-[2/4] md:col-[1/13] md:row-[1] md:flex md:justify-between md:items-center">
                <li className="text-center">
                  <a
                    href="#"
                    className="font-clash font-semibold text-white text-lg md:text-xl leading-tight"
                  >
                    @ranlus.studio
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="#"
                    className="font-clash font-semibold text-white text-lg md:text-xl leading-tight"
                  >
                    @_ranlus
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
                  src={camera}
                  alt="camera"
                  className="size-full rounded-md"
                />
                <figcaption className="mt-2">
                  <a
                    href="/"
                    className="font-clash text-lg font-bold text-text"
                  >
                    @anisimov.photo
                  </a>
                </figcaption>
              </Card>
            </div>
            <div className="col-[2/5] pt-14 pb-16 md:col-[8/11] md:py-32">
              <p className="font-clash text-white font-semibold text-xl leading-tight md:text-2xl">
                What do we do at Ranlus Studio?{" "}
                <b className="font-clash text-white font-normal text-lg leading-tight">
                  *clears throat*
                </b>{" "}
                <br /> Allow us to enlighten you.
              </p>
              <p className="font-clash mt-6 text-xl leading-tight font-normal text-white">
                We conceptualize and animate engaging visuals that bring your
                message to life and captivate your target audience.
              </p>
              <p className="font-clash mt-6 text-xl leading-tight font-normal text-white">
                We materialize your ideas with creativity and precision.
              </p>
              <MagneticButton
                className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
                scale={1.5}
                tollerance={0.8}
                speed={0.5}
                borderRadius="50%"
              >
                the studio
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
              className="font-clash text-primary font-bold text-8xl leading-tight scale-[0.4] px-2 -translate-x-[100%]"
            >
              PLAY
            </span>
            <span
              id="text-right"
              className="font-clash text-primary font-bold text-8xl leading-tight scale-[0.4] px-2 translate-x-[100%]"
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
            className="w-full h-svh rounded-lg scale-[0.43] object-contain cursor-pointer"
            onClick={openModalAndPlayVideo}
          >
            <source src="/videos/korzh.mp4" />
          </video>
        </section>
        <section className="w-full pt-60 pb-10">
          <h2 className="w-full text-8xl font-clash font-bold text-center uppercase text-primary leading-[0.8] text">
            Video <br /> Showcase
          </h2>
          <div className="px-4 mx-auto mt-10 flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-32">
            <div className="bg-blue-500 aspect-[4/3] rounded-md md:col-[1/7] md:row-[1] md:aspect-video md:translate-y-1/4 md:-translate-x-[55%]"></div>
            <div className="bg-green-500 aspect-[4/3] rounded-md md:col-[4/10] md:row-[1] md:aspect-video"></div>
            <div className="bg-purple-500 aspect-[4/3] rounded-md md:col-[7/13] md:row-[1] md:aspect-video md:-translate-y-3/4 md:translate-x-[60%]"></div>
            <div className="bg-yellow-500 aspect-[4/3] rounded-md md:col-[7/13] md:row-[2] md:aspect-video md:-translate-y-3/4 md:translate-x-[60%]"></div>
          </div>
          <div className="w-full grid place-items-center mt-10 md:-mt-80">
            <MagneticButton
              className="font-clash mt-6 border-2 border-primary rounded-[50%] text-white px-8 py-4 font-semibold text-lg"
              scale={1.5}
              tollerance={0.8}
              speed={0.5}
              borderRadius="50%"
            >
              <a href="/gallery">all videos</a>
            </MagneticButton>
          </div>
        </section>
        <section className="w-full pt-60 pb-10">
          <div>
            <h2 className="font-clash text-8xl font-bold text-center uppercase text-primary">
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
                />
                <Image
                  src={image2}
                  width={image2.width}
                  height={image2.height}
                  alt="image2"
                  className="w-[600px] h-[400px] object-cover"
                />
                <Image
                  src={image3}
                  width={image3.width}
                  height={image3.height}
                  alt="image3"
                  className="w-[600px] h-[400px] object-cover"
                />
              </ul>
              <ul className="wrapper flex gap-4 py-4">
                <Image
                  src={image6}
                  width={image6.width}
                  height={image6.height}
                  alt="image6"
                  className="w-[600px] h-[400px] object-cover"
                />
                <Image
                  src={image7}
                  width={image7.width}
                  height={image7.height}
                  alt="image7"
                  className="w-[600px] h-[400px] object-cover"
                />
                <Image
                  src={image4}
                  width={image4.width}
                  height={image4.height}
                  alt="image4"
                  className="w-[600px] h-[400px] object-cover"
                />
              </ul>
              <ul className="wrapper flex gap-4 py-4">
                <Image
                  src={image8}
                  width={image8.width}
                  height={image8.height}
                  alt="image8"
                  className="w-[600px] h-[400px] object-cover"
                />
                <Image
                  src={image5}
                  width={image5.width}
                  height={image5.height}
                  alt="image5"
                  className="w-[600px] h-[400px] object-cover"
                />
                <Image
                  src={image9}
                  width={image9.width}
                  height={image9.height}
                  alt="image9"
                  className="w-[600px] h-[400px] object-cover"
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
                <a href="/gallery">all photos</a>
              </MagneticButton>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-32">
          <h2 className="font-clash text-8xl font-bold text-center uppercase text-primary leading-[0.8]">
            Let&apos;s do <br /> something <br /> awesome <br />
            together!
          </h2>
          <div className="relative z-[1] grid grid-cols-4 md:grid-cols-12 grid-x-2 md:gap-x-4 grid-rows-[1fr_auto] w-[calc(100% - 16px)] px-2 md:px-4 mx-2 md:mx-4 mt-7">
            <div className="col-[2/4] self-center h-fit mt-16 md:col-[3/6] md:mt-0">
              <Card id="phone-card">
                <Image
                  src={phone}
                  alt="phone"
                  className="rounded-md size-full"
                />
                <figcaption className="mt-2">
                  <a
                    href="/"
                    className="font-clash text-lg font-bold text-text"
                  >
                    @anisimov.photo
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
                contact me
              </MagneticButton>
            </div>
          </div>
        </section>
        <Footer />

        <motion.div
          initial={{ y: "100%" }}
          animate={isOpenVideoModal ? "opened" : "closed"}
          variants={{
            opened: { y: 0, transition: { duration: 0.5 } },
            closed: { y: "100%", transition: { duration: 0.5 } },
          }}
          className="z-[100] fixed top-0 left-0 bg-base-2 w-full h-svh grid place-items-center"
        >
          <figure className="w-3/4 relative grid place-items-center">
            <video
              ref={videoRef}
              id="video"
              controls
              playsInline
              className="w-full h-auto rounded-lg object-contain cursor-pointer"
            >
              <source src="/videos/korzh.mp4" />
            </video>
            <button
              className="font-clash font-bold size-10 rounded-lg bg-base p-2 absolute right-2 top-2"
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

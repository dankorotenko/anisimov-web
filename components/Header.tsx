"use client";

import Link from "next/link";
import { useState } from "react";
import CurrentTime from "./CurrentTime";
import { motion } from "framer-motion";
import FlipLink from "./FlipLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full pt-4 md:pt-6 pb-4 z-[4] will-change-transform">
        <div className="realtive grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 items-center w-full mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="font-clash font-bold text-primary text-xl col-start-1 col-end-3 md:col-end-5"
          >
            anisimov
          </Link>
          <button
            className="text-text cursor-pointer col-start-3 col-end-5 md:col-start-5 md:col-end-9 text-right md:text-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              initial="closed"
              animate={isMenuOpen ? "opened" : "closed"}
              className="text-text font-clash font-bold text-lg relative block overflow-hidden whitespace-nowrap"
              style={{
                lineHeight: 0.75,
              }}
            >
              <div>
                {"menu".split("").map((l, i) => (
                  <motion.span
                    variants={{
                      opened: {
                        y: "-100%",
                      },
                      closed: {
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0">
                {"close".split("").map((l, i) => (
                  <motion.span
                    variants={{
                      opened: {
                        y: 0,
                      },
                      closed: {
                        y: "100%",
                      },
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
            </motion.span>
          </button>
          <CurrentTime className="hidden md:block col-start-9 col-end-13 font-clash uppercase font-bold text-text font-base text-right" />
        </div>
      </header>

      <motion.div
        initial={{ opacity: "0", visibility: "hidden" }}
        animate={isMenuOpen ? "opened" : "closed"}
        variants={{
          opened: {
            opacity: 1,
            visibility: "visible",
            transition: { duration: 0.5 },
          },
          closed: {
            opacity: 0,
            visibility: "hidden",
            transition: { duration: 0.5 },
          },
        }}
        className="fixed top-0 left-0 w-full h-full z-[3] overflow-y-auto"
        data-lenis-prevent
      >
        <motion.div
          initial={{ opacity: "0", visibility: "hidden" }}
          animate={isMenuOpen ? "opened" : "closed"}
          variants={{
            opened: {
              opacity: 1,
              visibility: "visible",
              transition: { duration: 0.5 },
            },
            closed: {
              opacity: 0,
              visibility: "hidden",
              transition: { duration: 0.5 },
            },
          }}
          className="h-auto md:h-1/2 w-full md:p-4"
        >
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={isMenuOpen ? "opened" : "closed"}
            variants={{
              opened: {
                opacity: 0.6,
                visibility: "visible",
                transition: { duration: 0.5, delay: 0.2 },
              },
              closed: {
                opacity: 0,
                visibility: "hidden",
                transition: { duration: 0.5 },
              },
            }}
            className="absolute w-full h-svh bg-black left-0 top-0 opacity-60 z-[2]"
          ></motion.div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={isMenuOpen ? "opened" : "closed"}
            variants={{
              opened: { y: 0, transition: { duration: 0.5, delay: 0.2 } },
              closed: { y: "-100%", transition: { duration: 0.5 } },
            }}
            className="relative bg-base-2 md:rounded-md min-h-dvh md:min-h-0 z-[3] flex flex-col pt-16 justify-end md:justify-normal"
          >
            <div className="w-full max-w-[calc(100%-32px)] mx-auto grid grid-cols-4 md:grid-cols-12 gap-x-4 pb-12">
              <nav className="col-[1/5] mt-12 md:col-[8/13]">
                <menu>
                  <li>
                    <div>
                      <FlipLink
                        href="/"
                        className="font-clash font-bold text-7xl md:text-5xl lg:text-8xl text-primary uppercase leading-[0.8]"
                      >
                        Home
                      </FlipLink>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FlipLink
                        href="/team"
                        className="font-clash font-bold text-7xl md:text-5xl lg:text-8xl text-primary uppercase leading-[0.8]"
                      >
                        Team
                      </FlipLink>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FlipLink
                        href="/videos"
                        className="font-clash font-bold text-7xl md:text-5xl lg:text-8xl text-primary uppercase leading-[0.8]"
                      >
                        Videos
                      </FlipLink>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FlipLink
                        href="/photos"
                        className="font-clash font-bold text-7xl md:text-5xl lg:text-8xl text-primary uppercase leading-[0.8]"
                      >
                        Photos
                      </FlipLink>
                    </div>
                  </li>
                </menu>
              </nav>
              <figure className="col-[1/4] row-[1] rounded-md aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-md w-full h-full"
                >
                  <source src="/videos/reel.mp4" />
                </video>
              </figure>
            </div>
            <div>
              <ul className="md:flex md:justify-center md:items-stretch">
                <li className="border-t-2 border-t-zinc-700 md:flex-1 md:text-center">
                  <a
                    href="https://www.instagram.com/anisimov_media"
                    target="_blank"
                    className="text-text font-clash lowercase text-2xl font-semibold block p-8 md:p-4 hover:text-primary transition-colors duration-300"
                  >
                    instagram
                  </a>
                </li>
                <li className="border-t-2 border-t-zinc-700 md:flex-1 md:border-l-2 md:border-l-zinc-700 md:text-center">
                  <a
                    href="https://t.me/tanisimov"
                    target="_blank"
                    className="text-text font-clash lowercase text-2xl font-semibold block p-8 md:p-4 hover:text-primary transition-colors duration-300"
                  >
                    telegram
                  </a>
                </li>
                <li className="border-t-2 border-t-zinc-700 md:flex-1 md:border-l-2 md:border-l-zinc-700 md:text-center">
                  <a
                    href="mailto:anisimovmedia@gmail.com"
                    className="text-text font-clash lowercase text-2xl font-semibold block p-8 md:p-4 hover:text-primary transition-colors duration-300"
                  >
                    mail
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;

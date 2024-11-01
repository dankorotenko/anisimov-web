"use client";
import { motion } from "framer-motion";

const FlipLink = ({ children, href, className }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className={`relative block overflow-hidden whitespace-nowrap ${className}`}
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
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
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
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
      </motion.a>
    );
  };

  export default FlipLink;
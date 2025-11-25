import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Sakamoto Takashi
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack and Blockchain Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="max-w-1xl mt-8 text-base text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                Full Stack Engineer with over 7 years of expertise in crafting,
                developing, and launching web and decentralized applications.
                Skilled in frontend, backend, blockchain, and AI-driven
                technologies, with a focus on creating scalable,
                high-performance systems for both startups and enterprise
                clients. Proficient in Web3integrations, smart contract
                development, and crypto payment systems using Solidity,
                ethers.js, and Web3.js. Experienced in building and deploying
                AI-powered chatbots, automation tools, and intelligent APIs that
                enhance user engagement and operational efficiency. Enjoy
                working in fast-paced,remote environments, collaborating with
                cross-functional teams, and delivering exceptional user
                experiences through clean code and modern architecture{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">VueJS</span>,{" "}
                <span className="font-semibold text-accent">AnglarJS</span>,{" "}
                <span className="font-semibold text-accent">SolidJS</span>,{" "}
                <span className="font-semibold text-accent">NestJS</span>,{" "}
                <span className="font-semibold text-accent">Django</span>,{" "}
                <span className="font-semibold text-accent">Rust</span>,{" "}
                <span className="font-semibold text-accent">EthersJs</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">TypeScript</span>,{" "}
                <span className="font-semibold text-accent">Solidity</span> and{" "}
                <span className="font-semibold text-accent">Web3.js</span>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

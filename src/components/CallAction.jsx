import React from "react";
import Button from "../constants/Button";
import startBg from "../assets/stars.png";
import gridLines from "../assets/grid-lines.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const CallAction = () => {
  return (
    <section className="py-20 md:py-24" id="changelog">
      <div className="container">
        <motion.div
          animate={{ backgroundPositionX: "100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="border border-white/15 py-24  rounded-xl overflow-hidden relative"
          style={{ backgroundImage: `url(${startBg})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines})` }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear ,impactful result without the complexity.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button title="Join Waitlist" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallAction;

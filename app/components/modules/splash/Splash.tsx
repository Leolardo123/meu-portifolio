import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

export default function Splash() {
  const [showSplash, setShowSplash] = useState(true);
  const particles = Array.from({ length: 50 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 300;

    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 2 + Math.random() * 4,
    };
  });

  setTimeout(() => {
    setShowSplash(false);
  }, 200);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'circIn', duration: 2, delay: 2 }}
          id="splash-main"
          className="bg-primary inset-0 fixed z-9999"
        >
          <div className="flex h-full w-full items-center justify-center">
            <div id="reveal">
              <rect width="100%" height="100%" fill="white" />
            </div>

            <motion.div animate={{ opacity: 0 }} transition={{ delay: 2 }}>
              <h1 className="text-center font-bold">Leoferstos</h1>
              <p>Desenvolvedor BackEnd</p>
            </motion.div>
            {particles.map((p, index) => {
              return (
                <motion.div
                  key={index}
                  className="bg-secondary-1 absolute rounded-full"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    x: p.x,
                    y: p.y,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                ></motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

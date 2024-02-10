'use client'
import { motion } from "framer-motion";
import Link from "next/link";

function app() {
  return (
    <div className="Home">
      <Link href="/about">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: "infinity", duration: 5 }}
          className="text-[22vw] leading-none tracking-tighter font-semibold uppercase"
          whileHover={{ scale: 1.2 }}
        >
          we are ochi
        </motion.h1>
      </Link>
      <Link href="/contact">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: "infinity", duration: 5 }}
          className="text-[22vw] leading-none tracking-tighter font-semibold uppercase"
          whileHover={{ scale: 1.2 }}
        >
          we are ochi
        </motion.h1>
      </Link>
    </div>
  );
}

export default app;

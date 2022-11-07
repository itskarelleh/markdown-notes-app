import { motion } from "framer-motion";

export default function Main({ children, classname, ...props }) {

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.25 }}
      className={`bg-white dark:bg-zinc-800 drop-shadow-xl h-full relative z-200 p-8  w-10/12 h-full relative top-16 mx-auto flex flex-col md:flex-row ${classname}`}
      {...props}
    >
      {children}
    </motion.main>
  );
}

import { motion } from "framer-motion";

export default function SkillSliders() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <div className=" bg-black w-fit h-fit text-amber-50 p-3">Sliders</div>
    </motion.div>
  );
}

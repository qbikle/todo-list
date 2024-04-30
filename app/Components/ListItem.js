import { motion } from "framer-motion";

const CheckboxItem = ({ text, isChecked, onChange }) => {
  return (
    <motion.div
      className="checkbox-item shadow-md rounded-md overflow-hidden"
      layout
      style={{ display: "flex", alignItems: "center", padding: "1.5rem" }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-4 h-4 mr-4 focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
      />
      <motion.span className="text text-white/90 text-xl">{text}</motion.span>
    </motion.div>
  );
};

export default CheckboxItem;

/* eslint-disable react/prop-types */
import { CircleCheckBig, X, Info } from "lucide-react";
import { motion } from "motion/react";

function NotificationCard({ message, type, onClose }) {
  const icons = {
    success: <CircleCheckBig size={20} color="white" />,
    error: <Info size={20} color="white" />,
    warning: <Info size={20} color="yellow" />,
  };

  const bgColor = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-600",
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1, // Smooth in duration
        ease: [0.25, 0.8, 0.5, 1], // Smooth easing curve
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.1, // Smooth out duration
        ease: [0.4, 0, 0.2, 1], // Smooth fade-out easing curve
      },
    },
  };

  return (
    <motion.div
      className={`absolute bottom-0 left-0 w-full h-auto pointer-events-auto ${bgColor[type]} `}
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.1, ease: "circInOut"}}
    >
      <div className="flex items-center justify-between gap-8 py-4 container">
        <div className="flex items-center gap-2">
          {icons[type]}
          <p className="text-sm text-white">{message}</p>
        </div>

        <div onClick={onClose} className="cursor-pointer">
          <X color="white" size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default NotificationCard;

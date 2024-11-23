import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const RetractableSidebar = ({ opened, onClickClose }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleClose = () => {
    setIsSidebarVisible(false); // Close animation
    onClickClose(); // Notify parent component
  };

  useEffect(() => {
    if (opened) {
      setIsSidebarVisible(true); // Open animation
    } else {
      setIsSidebarVisible(false); // Close animation
    }
  }, [opened]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-[#00000030] backdrop-filter z-50 ${
        isSidebarVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-300 ease-in-out flex justify-end`}
    >
      <aside
        className={`bg-red-600 max-w-[50%] w-[300px] h-full flex flex-col items-center justify-center transform ${
          isSidebarVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={handleClose} className="text-white text-2xl">
          <AiOutlineCloseCircle />
        </button>
      </aside>
    </div>
  );
};

export default RetractableSidebar;

import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type VideoProp = {
  closeVideo: () => void;
};

const Popup = ({ closeVideo }: VideoProp) => {
  return (
    <div className="bg-black/90 h-screen w-full z-50 fixed top-0 left-0 text-white">
      <IoCloseSharp onClick={closeVideo} />
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default Popup;

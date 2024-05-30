import React from "react";
import { IoCloseSharp } from "react-icons/io5";

type VideoProp = {
  closeVideo: () => void;
};

const Popup = ({ closeVideo }: VideoProp) => {
  return (
    <div className="bg-black/95 h-screen w-full z-50 fixed top-0 left-0 text-white ">
      <div className="flex justify-end">
        <IoCloseSharp
          onClick={closeVideo}
          size={30}
          className="cursor-pointer m-4"
        />
      </div>
      <div className="flex justify-center items-center h-[90vh] text-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Popup;

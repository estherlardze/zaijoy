import React from "react";

const Buyticket = ({ color, textColor }: any) => {
  return (
    <button
      className="group relative inline-flex overflow-hidden rounded-md  font-medium"
  
    >
      <div
        className="inline-flex text-lg py-2 font-semibold translate-y-0 items-center justify-center bg-pink px-8 text-white transition duration-500 group-hover:-translate-y-[150%]"
        style={{ backgroundColor: color }}
      >
        Buy Ticket
      </div>
      <div className="absolute inline-flex w-fit translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
        <span className="absolute translate-y-full  scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span
          className="z-10 font-semibold h-full  px-8 py-2 text-center my-auto pt-2 w-full"
          style={{ border: `2px solid ${color}`, color: textColor }}
        >
          Buy Ticket
        </span>
      </div>
    </button>
  );
};

export default Buyticket;

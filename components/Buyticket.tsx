import React from 'react'

const Buyticket = () => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  font-medium">
    <div className="inline-flex h-12 font-semibold translate-y-0 items-center justify-center bg-pink px-6 text-white transition duration-500 group-hover:-translate-y-[150%]">
     Buy Ticket
    </div>
    <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
      <span className="absolute translate-y-full scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
      <span className="z-10 border-2 border-pink h-full text-center my-auto pt-2 w-full">Buy Ticket</span>
    </div>
  </button>
  )
}


export default Buyticket
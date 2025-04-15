import React from "react";

const Stripe= ({ val })=> {
  return (
      <div className="w-[16.66%] px-8 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between ">
        <img className="h-4" src={val.url} alt="" />
        <span className="font-semibold text-lg">{val.number}</span>
      </div>
  );
}

export default Stripe;
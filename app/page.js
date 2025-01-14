import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" flex justify-center items-center flex-col text-white">
      <div className=" flex justify-center items-center flex-col gap-4 h-[42vh]">
        <p className="text-3xl font-extrabold my-2">Buy Me A Cup of CHAI....</p>
        <p>
          A crowed Funding Platform for project Creators...! Get Funds From Your
          Fans & Followers..Starts Now
        </p>
        <div className="m-3">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all"
          >
            Starts Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 w-screen opacity-15"></div>

      <div className="w-screen  gap-5 my-5 container">
        <h1 className="text-center text-3xl font-bold">
          Your Fans Can Buy You A chai....
        </h1>
        <div className="flex gap-5 justify-around mt-14">
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/man.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/coin.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/group.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
        </div>

        <div className="bg-white h-1 w-screen opacity-15 mt-7"></div>

        <h1 className="text-center text-2xl font-bold mt-8">
          Learn More About Us....
        </h1>
        <div className="flex gap-5 justify-around mt-14">
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/man.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/coin.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
          <div className="item space-y-2 px-3 flex flex-col items-center">
            <Image
              className="bg-slate-400 p-2 rounded-full"
              src="/group.gif"
              alt=""
              width={88}
              height={88}
            />
            <p className="font-bold">Your Fans Want To Help </p>
            <p>Your Fans Are Available to Help You..!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

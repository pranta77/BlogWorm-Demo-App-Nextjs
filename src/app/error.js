"use client";

import Image from "next/image";

const error = () => {
  function handleClick() {
    window.location.href = "/";
  }

  return (
    <div className="mx-auto my-5">
      <Image
        src="https://i.ibb.co/TqkYPP3/erorr.jpg"
        width={0}
        height={0}
        alt="errpr"
      />
      {/* <img src="https://i.ibb.co/TqkYPP3/erorr.jpg" alt="" /> */}
      <div className="flex justify-center">
        <button onClick={handleClick} className="btn btn-error">
          Go BACK
        </button>
      </div>
    </div>
  );
};

export default error;

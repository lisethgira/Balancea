import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/load.json";
import "./Loading.css";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="dashboard">
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
};

export default Loading;

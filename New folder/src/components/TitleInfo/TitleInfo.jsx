import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TitleInfo.css";
import "animate.css";

const TitleInfo = ({ headings, paragraph, align, interval }) => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  const alignmentClass =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  useEffect(() => {
    const headingInterval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, interval);

    return () => clearInterval(headingInterval);
  }, [headings, interval]);

  return (
    <div
      className={`h-[300px] w-full bg-cover bg-center flex flex-col justify-center items-center ${alignmentClass}`}
    >
      <div className="overflow-y-hidden h-[50px] mt-[100px]">
        <h1
          className="text-4xl mb-4 animate__animated animate__bounceInUp text-[#3366FF] text-[50px] font-extrabold"
          data-animation="animated bounceInUp"
        >
          {headings[currentHeadingIndex]}
        </h1>
      </div>
      <p className="text-lg max-w-[700px] font-semibold">{paragraph}</p>
    </div>
  );
};

TitleInfo.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  paragraph: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
  interval: PropTypes.number
};

TitleInfo.defaultProps = {
  align: "center",
  interval: 5000 // Default interval of 1 second
};

export default TitleInfo;

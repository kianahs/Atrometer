import React, { Component } from "react";
import Tooltip from "./tooltip";

const CarouselCard = ({
  title,
  caption,
  image,
  icon,
  color,
  scale,
  tooltipText,
  textColor,
  buttonColor,
  showButton,
  tooltipColor,
  tooltipTextCols,
}) => {
  const tooltipTextStyle =
    "tooltiptext text-tooltip-carousel top-80 right-1/3 carousel-after bg-" +
    tooltipColor;
  const cardClass = " slide card bg-" + image;
  const cardFilterClass =
    "card-filter from-" + color + " to-" + color + "-fade";
  const width = 100 / scale + "%";
  const cardTitleClass = "card-title " + { textColor };
  const cardCaptionClass = "card-caption " + { textColor };
  console.log(textColor);
  return (
    <Tooltip
      tooltipStyle="tooltip visible"
      tooltipTextStyle={tooltipTextStyle}
      tooltipText={tooltipText}
      textCols={tooltipTextCols}
    >
      <div className={cardClass} style={{ width }}>
        <div className={cardFilterClass}>
          <div className="card-body">
            <img src={process.env.PUBLIC_URL + "/" + icon} alt={icon} />
            <p className="card-title" style={{ color: textColor }}>
              {title}
            </p>
            <p className="card-caption" style={{ color: textColor }}>
              {caption}
            </p>

            {showButton && (
              <button style={{ backgroundColor: buttonColor }}>انتخاب</button>
            )}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default CarouselCard;

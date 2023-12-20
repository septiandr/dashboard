import React from "react";

interface ProgressBarProps {
  leftPercentage: number;
  rightPercentage: number;
  leftColor: string;
  rightColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  leftPercentage,
  rightPercentage,
  leftColor,
  rightColor,
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "99%",
    borderRadius:'10px'

  };

  const leftBarStyle: React.CSSProperties = {
    width: `${leftPercentage}%`,
    backgroundColor: leftColor,
    height: "30px",
    marginRight:'2px',
    borderRadius:'5px'
  };

  const rightBarStyle: React.CSSProperties = {
    width: `${rightPercentage}%`,
    backgroundColor: rightColor,
    height: "30px",
    borderRadius:'5px'
  };

  return (
    <div style={containerStyle}>
      <div style={leftBarStyle}></div>
      <div style={rightBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
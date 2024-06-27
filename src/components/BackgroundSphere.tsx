import React from "react";

type BackgroundSphereProps = {
  color: string;
  right: string;
  top: string;
};

const BackgroundSphere: React.FC<BackgroundSphereProps> = ({
  color,
  right,
  top,
}) => {
  return (
    <div
      className="bgsphere"
      style={{
        width: "220px",
        height: "220px",
        position: "absolute",
        right: right,
        top: top,
        borderRadius: "50%",
        background: color,
        filter: "blur(60px)",
        zIndex: 5,
      }}
    ></div>
  );
};

export default BackgroundSphere;

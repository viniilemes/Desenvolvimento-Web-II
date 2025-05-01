import React from "react";

type BallProps = {
  number: number;
  color: string;
};

const Ball: React.FC<BallProps> = ({ number, color }) => {
  return (
    <div
      style={{ // esse estilo já estava aplicado no arquivo original
        display: "inline-block",
        margin: "5px",
        padding: "10px",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        backgroundColor: color,
        textAlign: "center",
      }}
    >
      {number}
    </div>
  );
};

export default Ball;

import React, { useState } from "react";
import Ball from "./Ball";
import "../styles/App2.css"; // Importação correta do CSS

const Exercise2: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = (num: number) => {
    setNumbers((prev) =>
      prev.length < 12 ? [...prev, num] : [...prev.slice(1), num]
    );
  };

  const removeNumber = (index: number) => {
    setNumbers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <input
        type="number"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const num = Number((e.target as HTMLInputElement).value);
            addNumber(num);
            (e.target as HTMLInputElement).value = "";
          }
        }}
        placeholder="Digite um número"
        className="input"
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {numbers.map((num, index) => (
          <div
            key={index}
            onContextMenu={(e) => {
              e.preventDefault();
              removeNumber(index);
            }}
          >
            <Ball number={num} color="#cc1313"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise2;
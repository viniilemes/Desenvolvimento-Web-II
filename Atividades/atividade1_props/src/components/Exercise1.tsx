import "../styles/App1.css"; // Importação correta do CSS
import React, { useState } from "react";
import Ball from "./Ball";

const Exercise1: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  const generateNumbers = () => {
    if (quantity > 0 && quantity <= 12) {
      const randomNumbers = Array.from({ length: quantity }, () =>
        Math.floor(Math.random() * 100)
      );
      setNumbers(randomNumbers.sort((a, b) => a - b));
    } else {
      alert("Digite um número entre 1 e 12.");
    }
  };

  return (
    <div className="container">
      <input
        type="number"
        onChange={(e) => {
            if (Number(e.target.value) > 0 && Number(e.target.value) <= 12) {
              setQuantity(Number(e.target.value));
            }
          }
        }
        onKeyDown= {(e) => {
          if (e.key === "Enter") {
            const num = Number((e.target as HTMLInputElement).value);
            if (num > 0 && num <= 12) {
              setQuantity(num);
              generateNumbers()
            }
            (e.target as HTMLInputElement).value = "";
          }
          
        }}
        placeholder="Quantos números?"
        className="input"
      />
      <div>
        {numbers.map((num, index) => (
          <Ball key={index} number={num} color="#793fdd" />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
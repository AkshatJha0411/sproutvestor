"use client";
import React, { useState } from "react";

const page = () => {
  const stocks = [
    "Infosys",
    "HCL Technologies",
    "Coal India",
    "Bajaj Auto",
    "Eicher Motors",
    "Hero Motocorp",
    "NMDC",
    "Petronet LNG",
    "Coromandel International",
    "Indraprastha Gas",
    "Apar Industries",
    "Sun TV Network",
    "Gujarat State Petronet",
    "Castrol India",
    "Mahanagar Gas",
  ];

  const mutualFunds = [
    "ICICI Prudential Focused Bluechip Equity Fund",
    "Aditya Birla Sun Life Small & Midcap Fund",
    "Tata Equity PE Fund",
    "HDFC Monthly Income Plan – MTP",
    "L&T Tax Advantage Fund",
    "SBI Nifty Index Fund",
    "Kotak Corporate Bond Fund",
    "Canara Robeco Gilt PGS",
    "DSP BlackRock Balanced Fund",
    "Axis Liquid Fund",
  ];

  const getRandomStocks = () => {
    const remainingStocks = [...stocks]; // Create a copy of the original array
    const randomStocks = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * remainingStocks.length);
      randomStocks.push(remainingStocks[randomIndex]); // Add the randomly selected stock
      remainingStocks.splice(randomIndex, 1); // Remove the selected stock from the array
    }
    return randomStocks;
  };

  const getRandomMutualFunds = () => {
    const remainingMutualFunds = [...mutualFunds]; // Create a copy of the original array
    const randomMutualFunds = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(
        Math.random() * remainingMutualFunds.length
      );
      randomMutualFunds.push(remainingMutualFunds[randomIndex]); // Add the randomly selected mutual fund
      remainingMutualFunds.splice(randomIndex, 1); // Remove the selected mutual fund from the array
    }
    return randomMutualFunds;
  };

  const [randomStocks, setRandomStocks] = useState(() => getRandomStocks());
  const [randomMutualFunds, setRandomMutualFunds] = useState(() =>
    getRandomMutualFunds()
  );

  return (
    <div className="">
      <div>
        <h2 className="text-4xl">Top 5 stocks to invest in</h2>
        <ul>
          {randomStocks.map((stock, index) => (
            <li key={index} className="text-xl">
              {stock}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-4xl">Top 5 mutual funds to invest in</h2>
        <ul>
          {randomMutualFunds.map((mutualFund, index) => (
            <li key={index} className="text-xl">
              {mutualFund}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;

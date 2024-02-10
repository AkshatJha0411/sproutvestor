"use client";
// pages/index.js
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const SurveyPage = () => {
  const questions = [
    {
      question:
        "Estimate the amount of time you have until you need to start spending the money you are investing.",
      options: [
        "2 years or less",
        "3-5 years",
        "6-10 years",
        "11-15 years",
        "more than 15 years",
      ],
    },
    {
      question: "Describe your investment experience.",
      options: [
        "very inexperienced",
        "somewhat inexperienced",
        "somewhat experienced",
        "experienced",
        "very experienced",
      ],
    },
    {
      question: "Describe your current and future income sources.",
      options: [
        "very unstable",
        "unstable",
        "somewhat stable",
        "stable",
        "very stable",
      ],
    },
    {
      question: "When do you plan to begin taking money from your investments?",
      options: [
        "1 year or less",
        "1-2 years",
        "3-5 years",
        "6-10 years",
        "11-15 years",
        "more than 15 years",
      ],
    },
    {
      question: "How do you feel about risk during market downturns?",
      options: [
        "sell all the remaining investment",
        "sell a portion of the remaining investment",
        "hold onto the investment and sell nothing",
        "buy more of the remaining investment",
      ],
    },
    {
      question:
        "How would you feel if you saw a sudden change in your account balance?",
      options: [
        "strongly disagree",
        "disagree",
        "somewhat agree",
        "agree",
        "strongly agree",
      ],
    },
    {
      question:
        "Choose a hypothetical investment based on the potential gain or loss.",
      options: ["minimal volatility", "moderate volatility", "most volatility"],
    },
    {
      question: "How do you tend to react during market declines?",
      options: [
        "strongly disagree",
        "disagree",
        "somewhat agree",
        "agree",
        "strongly agree",
      ],
    },
    {
      question:
        "Would you invest in a mutual fund or ETF based on a brief conversation with a friend or relative?",
      options: [
        "strongly disagree",
        "disagree",
        "somewhat agree",
        "agree",
        "strongly agree",
      ],
    },
    {
      question: "Describe your actions during a previous market decline.",
      options: [
        "sell all the remaining investment",
        "sell a portion of the remaining investment",
        "hold onto the investment and sell nothing",
        "buy more of the remaining investment",
      ],
    },
    {
      question:
        "Describe your preference for investment ups and downs and returns.",
      options: [
        "strongly disagree",
        "disagree",
        "somewhat agree",
        "agree",
        "strongly agree",
      ],
    },
  ];

  // State to store selected options for each question
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill("")
  );

  // Handler function to update selected option for a question
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = value;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Answer the following</h1>
        <form>
          {questions.map((questionObj, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{questionObj.question}</p>
              <div>
                {questionObj.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="inline-flex items-center">
                    {/* <input
                      type="radio"
                      value={option}
                      checked={selectedOptions[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="form-radio text-blue-500"
                    /> */}
                    <div class="radio-input">
                      <input
                        type="radio"
                        value={option}
                        checked={selectedOptions[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                        className=" text-blue-500"
                      />
                      <div class="circle"></div>
                    </div>

                    <span className="mx-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        <span>Click</span>
      </div>
    </div>
  );
};

export default SurveyPage;

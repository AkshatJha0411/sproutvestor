"use client";
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const SurveyPage = () => {
  const questions = [
    {
      id: "1",
      question:
        "Estimate the amount of time you have until you need to start spending the money you are investing.",
      options: [
        { id: "1_1", text: "2 years or less" },
        { id: "1_2", text: "3-5 years" },
        { id: "1_3", text: "6-10 years" },
        { id: "1_4", text: "11-15 years" },
        { id: "1_5", text: "more than 15 years" },
      ],
    },
    {
      id: "2",
      question: "Describe your investment experience.",
      options: [
        { id: "2_1", text: "very inexperienced" },
        { id: "2_2", text: "somewhat inexperienced" },
        { id: "2_3", text: "somewhat experienced" },
        { id: "2_4", text: "experienced" },
        { id: "2_5", text: "very experienced" },
      ],
    },
    {
      id: "3",
      question: "Describe your current and future income sources.",
      options: [
        { id: "3_1", text: "very unstable" },
        { id: "3_2", text: "unstable" },
        { id: "3_3", text: "somewhat stable" },
        { id: "3_4", text: "stable" },
        { id: "3_5", text: "very stable" },
      ],
    },
    {
      id: "4",
      question: "When do you plan to begin taking money from your investments?",
      options: [
        { id: "4_1", text: "1 year or less" },
        { id: "4_2", text: "1-2 years" },
        { id: "4_3", text: "3-5 years" },
        { id: "4_4", text: "6-10 years" },
        { id: "4_5", text: "11-15 years" },
        { id: "4_6", text: "more than 15 years" },
      ],
    },
    {
      id: "5",
      question: "How do you feel about risk during market downturns?",
      options: [
        { id: "5_1", text: "sell all the remaining investment" },
        { id: "5_2", text: "sell a portion of the remaining investment" },
        { id: "5_3", text: "hold onto the investment and sell nothing" },
        { id: "5_4", text: "buy more of the remaining investment" },
      ],
    },
    {
      id: "6",
      question:
        "How would you feel if you saw a sudden change in your account balance?",
      options: [
        { id: "6_1", text: "strongly disagree" },
        { id: "6_2", text: "disagree" },
        { id: "6_3", text: "somewhat agree" },
        { id: "6_4", text: "agree" },
        { id: "6_5", text: "strongly agree" },
      ],
    },
    {
      id: "7",
      question:
        "Choose a hypothetical investment based on the potential gain or loss.",
      options: [
        { id: "7_1", text: "minimal volatility" },
        { id: "7_2", text: "moderate volatility" },
        { id: "7_3", text: "most volatility" },
      ],
    },
    {
      id: "8",
      question: "How do you tend to react during market declines?",
      options: [
        { id: "8_1", text: "strongly disagree" },
        { id: "8_2", text: "disagree" },
        { id: "8_3", text: "somewhat agree" },
        { id: "8_4", text: "agree" },
        { id: "8_5", text: "strongly agree" },
      ],
    },
    {
      id: "9",
      question:
        "Would you invest in a mutual fund or ETF based on a brief conversation with a friend or relative?",
      options: [
        { id: "9_1", text: "strongly disagree" },
        { id: "9_2", text: "disagree" },
        { id: "9_3", text: "somewhat agree" },
        { id: "9_4", text: "agree" },
        { id: "9_5", text: "strongly agree" },
      ],
    },
    {
      id: "10",
      question: "Describe your actions during a previous market decline.",
      options: [
        { id: "10_1", text: "sell all the remaining investment" },
        { id: "10_2", text: "sell a portion of the remaining investment" },
        { id: "10_3", text: "hold onto the investment and sell nothing" },
        { id: "10_4", text: "buy more of the remaining investment" },
      ],
    },
    {
      id: "11",
      question:
        "Describe your preference for investment ups and downs and returns.",
      options: [
        { id: "11_1", text: "strongly disagree" },
        { id: "11_2", text: "disagree" },
        { id: "11_3", text: "somewhat agree" },
        { id: "11_4", text: "agree" },
        { id: "11_5", text: "strongly agree" },
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

  // Function to log the option's text when its radio button is clicked
  const logOptionText = (optionText) => {
    console.log("Selected option text:", optionText);
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
                    <div class="radio-input">
                      <input
                        type="radio"
                        value={option.text}
                        checked={selectedOptions[index] === option.text}
                        onChange={() => {
                          handleOptionChange(index, option.text);
                          logOptionText(option.text);
                        }}
                        className=" text-blue-500"
                      />
                      <div class="circle"></div>
                    </div>
                    <span className="mx-3">{option.text}</span>{" "}
                    {/* Render only option.text */}
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
        <span></span>
      </div>
    </div>
  );
};

export default SurveyPage;

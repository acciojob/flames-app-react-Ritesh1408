import React, { useState } from "react";
import "../styles/App.css";

const FlamesCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const relationshipStatus = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

  const calculateRelationship = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    let nameArr1 = name1.split("");
    let nameArr2 = name2.split("");

    for (let char of [...name1]) {
      let index = nameArr2.indexOf(char);
      if (index !== -1) {
        nameArr1.splice(nameArr1.indexOf(char), 1);
        nameArr2.splice(index, 1);
      }
    }

    let remainingLength = nameArr1.length + nameArr2.length;
    setResult(relationshipStatus[remainingLength % 6]);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div className="container">
      <input
        data-testid="input1"
        name="name1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
        className="input-field"
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
        className="input-field"
      />
      <button className="btn" data-testid="calculate_relationship"
       name="calculate_relationship" onClick={calculateRelationship}>
        Calculate Relationship Future
      </button>
      <button className="btn" data-testid="clear" name="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default FlamesCalculator;
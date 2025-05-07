import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    const flamesResult = calculateFlames(name1, name2);
    setResult(flamesResult);
  };

  const calculateFlames = (n1, n2) => {
    let arr1 = n1.split("");
    let arr2 = n2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    const remaining = arr1.filter(Boolean).length + arr2.filter(Boolean).length;
    const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    return flames[remaining % 6];
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h1>Flames: Check your Love Status Now!</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex",justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <input
            data-testid="input1"
            name="name1"
            placeholder="Enter First Name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="input-field"
          />
          <input
            data-testid="input2"
            name="name2"
            placeholder="Enter Second Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="input-field"
          />
          <button
            type="submit"
            data-testid="calculate_relationship"
            name="calculate_relationship"
            className="btn"
          >
            Calculate Relationship Future
          </button>
          <button
            type="button"
            data-testid="clear"
            name="clear"
            onClick={handleClear}
            className="btn"
          >
            Clear
          </button>
        </div>
      </form>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {result && <h3 data-testid="answer">{result}</h3>}
      </div>
      
    </div>
  );
};

export default App;

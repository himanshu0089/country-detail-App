import "./styles.css";
import { useState } from "react";

const countryDB = {
  India: [
    { name: "President", value: "Ram Nath Kovind" },
    { name: "Capital", value: "Delhi" },
    { name: "Currency", value: "₹-Rupee" },
    { name: "Population", value: "1.38 Billion" },
    { name: "Tourism-Ranking", value:"6th in asia"}
  ],
  China: [
    { name: "President", value: "Xi Jinping" },
    { name: "Capital", value: "Beijing" },
    { name: "Currency", value: " ¥-Chinese Yuan" },
    { name: "Population", value: "1.412 Billion" },
    { name: "Tourism-Ranking", value:"5th in asia"}
  ],
  Japan: [
    { name: "President", value: "Shinzo Abe" },
    { name: "Capital", value: "Tokyo" },
    { name: "Currency", value: " ¥-Japenese Yen " },
    { name: "Population", value: "125.7Million" },
    { name: "Tourism-Ranking", value:"2nd in asia"}
  ],
  Singapore: [
    { name: "President", value: "Halimah Yacob" },
    { name: "Capital", value: "Singpore" },
    { name: "Currency", value: "$-Singapore dollar" },
    { name: "Population", value: "5.89 Million" },
    { name: "Tourism-Ranking", value:"9th in asia"}
  ]
};

export default function App() {
  const [selectedCountry, setCountry] = useState("India");
  function phoneClickHandler(country) {
    setCountry(country);
  }
  return (
    <div className="App">
      <h1>Asia countries detail App</h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Click on the country for the informative detail.
      </p>

      <div>
        {Object.keys(countryDB).map((country) => (
          <button
            onClick={() => phoneClickHandler(country)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {countryDB[selectedCountry].map((country) => (
            <li
              key={country.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {country.name} </div>
              <div style={{ fontSize: "smaller" }}> {country.value} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

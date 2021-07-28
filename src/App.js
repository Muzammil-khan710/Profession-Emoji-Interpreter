import React, { useState } from "react";
import "./styles.css";

var professionDictionary = {
  "👨‍🎓": "Student",
  "👨‍⚕️": "Doctor ",
  "👩‍🏫": "Teacher ",
  "👩‍⚖️": "Judge ",
  "👨‍🌾": "Farmer ",
  "👨‍💻": "Technologist ",
  "👨‍🚀": "Astronaut ",
  "👮": "Police "
};
var professionWeKnow = Object.keys(professionDictionary);
export default function App() {
  const [professionName, setProfessionName] = useState(
    "Profession will be shown here"
  );

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var professionName = professionDictionary[userInput];
    if (professionName === undefined) {
      professionName = "Sorry we don't know this profession..";
    }
    setProfessionName(professionName);
  }

  function emojiClickHandler(emoji) {
    var professionName = professionDictionary[emoji];
    setProfessionName(professionName);
  }

  return (
    <div className="App">
      <h1>Emojis for Profession</h1>
      <input
        onChange={inputEventHandler}
        className="place-holder"
        placeholder="Enter your emoji"
      />

      <div>{professionName}</div>
      <p>Professions in our database</p>
      {professionWeKnow.map((emoji) => {
        return (
          <span
            className="known-profession"
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

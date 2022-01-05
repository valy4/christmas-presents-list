import { useState, useEffect } from "react";
import "./App.css";
import PresentList from "./PresentList";



function getPresentsFromLocalStorage() {
  let presentsString = localStorage.getItem("presents");
  if (presentsString && presentsString.length > 0) {
    return presentsString.split(",");
  } else {
    return [];
  }
}

function App() {
  const [presents, setPresents] = useState(getPresentsFromLocalStorage());
  const [inputValue, setInputValue] = useState("");


  function removePresent(present) {
    setPresents(presents.filter((gift) => gift !== present));
  }

  useEffect(() => {
    localStorage.setItem("presents", presents);
  }, [presents]);



  return (
    <div id="app">
      <h1 className="presents-title">Christmas Presents List</h1>
      <div className="input-row">
        <input
          className="add-present-input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          className="submit-button"
          onClick={(e) => {
            if (inputValue && inputValue.length > 0) {
              // add present
              setPresents([...presents, inputValue]);
              // clean up the field
              setInputValue("");
            }
          }}
        >
          Add Present
        </button>
      </div>
      <div className="present-list-container">

        {presents.map((present) => (
          <PresentList present={present} removePresent={removePresent} />
        ))}

      </div>
      <p>
        You have <strong>{presents.length} presents</strong> in your list!
      </p>
    </div>
  );
}

export default App;

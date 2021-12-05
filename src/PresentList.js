import React from "react";

export default function PresentList({ present, removePresent }) {
  return <div className="present">
    <p>{present}</p>
    <button className="remove" onClick={(e) => {
      removePresent(present)
    }}>X</button>
  </div>;
}
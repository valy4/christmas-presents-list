import React from "react";
import { useState } from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export default function PresentList({ present, removePresent }) {
  const [editPresent, setEditPresent] = useState(present);
  console.log(editPresent)
  function handleSave(e) {
    setEditPresent(e.value)

  }

  return <div className="present">
    <EditText defaultValue={present} onSave={handleSave}></EditText>
    <button className="remove" onClick={(e) => {
      removePresent(present)
    }}>X</button>
  </div >;
}
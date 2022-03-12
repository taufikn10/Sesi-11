import React, { useState, useEffect } from "react";

export default function Output() {
  const [antrian, setUsername] = useState("[]");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    console.log(disable);
  }),
    [antrian, disable];

  return (
    <div className="output">
      <p>Antrian Kosong</p>
    </div>
  );
}

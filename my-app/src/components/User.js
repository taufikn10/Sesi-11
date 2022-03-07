import React, { useState } from "react";

export default function User() {
  const [name, setName] = useState("Default");

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("Taufik")}>Change Name</button>
      <button onClick={() => setName("")}>Delete Name</button>
    </div>
  );
}

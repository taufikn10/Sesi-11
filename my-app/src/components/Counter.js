import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Mirip dengan componentDidMount dan componentDidUpdate
  useEffect(() => {
    // Memperbarui Judul dokumen menggunakan  API browser
    document.title = `You clicked ${count} time`;
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      {/* <button onClick={() => setCount(count + 1)}>Click Me</button> */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

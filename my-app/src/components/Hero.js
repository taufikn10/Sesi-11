import React, { useState } from "react";

function HeroSpesification() {
  const [hero, setHero] = useState({
    name: "",
    age: "",
  });
  return (
    <form>
      <input
        type="text"
        maxLength={9}
        value={hero.name}
        pattern="[+-]?\d+(?:[.,]\d+)?"
        onChange={(e) => setHero({ ...hero, name: e.target.value })}
      ></input>
      <input
        type="number"
        pattern="\d*"
        maxLength={3}
        value={hero.age}
        onChange={(e) => setHero({ ...hero, age: e.target.value })}
      ></input>
      {/* output */}
      <h3>Your name is - {hero.name}</h3>
      <h3>Your age is - {hero.age}</h3>
    </form>
  );
}

export default HeroSpesification;

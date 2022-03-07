import React, { useState, useEffect } from "react";

export default function Content() {
  return (
    <div className="content">
      <form>
        <label>Masukkan Nama</label>
        <br />
        <input
          type="text"
          maxLength={10}
          pattern="[+-]?\d+(?:[.,]\d+)?"
        ></input>
        <br />
        <br />
        <button>Antrikan !</button>
        <button>Majukan !</button>
      </form>
    </div>
  );
}

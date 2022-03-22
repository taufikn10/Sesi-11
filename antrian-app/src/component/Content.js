import React, { useState, useEffect } from "react";

export default function Content() {
  const [list, setList] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    console.log(disable);
  }, [list, disable]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name");

    if (e.target.value === "Antrikan!") {
      setList([
        {
          id: list.length,
          value: name.value,
        },
        ...list,
      ]);
    } else {
      list.pop();
      setList([...list]);
    }
  };

  const buttonStatus = () => {
    let name = document.getElementById("name").value;
    if (name === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  return (
    <div className="content">
      <form>
        <label>Masukkan Nama</label>
        <br />
        <input
          type="text"
          maxLength={10}
          onChange={buttonStatus}
          id="name"
          name="name"
        ></input>
        <br />
        <br />
        <input
          onClick={handleSubmit}
          disabled={disable}
          type="submit"
          value="Antrikan!"
        />
        <span>&nbsp;&nbsp;</span>
        <input onClick={handleSubmit} type="submit" value="Majukan!" />
      </form>
      <hr />
      <div className="result">
        {list.length === 0 ? (
          <p>[ Antrian Kosong ! ]</p>
        ) : (
          <p>
            {list.map((list, index) =>
              index === 0 ? (
                <span key={list.id}>
                  <span className="value">{list.value}</span>
                </span>
              ) : (
                <span key={list.id}>
                  {" => "}
                  <span className="value">{list.value}</span>
                </span>
              )
            )}
          </p>
        )}
      </div>
    </div>
  );
}

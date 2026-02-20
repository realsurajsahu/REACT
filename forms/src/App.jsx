import React from "react";
import { useState } from "react";

const App = () => {
  const [Text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitted by", Text);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={Text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

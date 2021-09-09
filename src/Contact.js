import React, { useContext } from "react";
import { Context } from "./Context";

export function Contact() {
  const { value, setValue } = useContext(Context);
  return (
    <div>
      <h1>Contact</h1>
      <p>{value}</p>
      <button onClick={() => setValue("React is fun")}>Change Text</button>
    </div>
  );
}

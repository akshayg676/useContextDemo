import React, { useContext } from "react";
import { Context } from "./Context";

export function Home() {
  const { value, setValue } = useContext(Context);
  return (
    <div>
      <h1>Home</h1>
      <p>{value}</p>
    </div>
  );
}

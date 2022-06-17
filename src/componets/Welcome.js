import React from "react";

function Welcome({ name, gender }) {
  // const props = { name: "Sruthi", gender: "F" }
  return (
    <div>
      {name ? <div>Welcome {name}</div> : <div>Name not provided</div>}
      {gender && <div>Gender: {gender}</div>}
    </div>
  );
}

export default Welcome;

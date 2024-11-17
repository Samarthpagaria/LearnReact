import React, { useState } from "react";

function App() {
  const [fullname, setfullname] = useState({ fname: "", lname: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setfullname((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          vlaue={fullname.fname}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

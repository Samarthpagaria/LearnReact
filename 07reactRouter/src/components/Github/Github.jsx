import React, { useState, useEffect } from "react";

function Github() {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/Samarthpagaria`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div className="text-center bg-gray-500 text-white text-3xl p-4 ">
      User Id :{data.name}
      <img
        className="w-50 h-50 rounded-full border-4 border-white shadow-lg mx-auto mt-5"
        src={data.avatar_url}
        alt=""
        width={300}
      />
    </div>
  );
}

export default Github;

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  console.log(emojipedia);
  return (
    <div>
      <dl className="dictionary">
        {emojipedia.map((emojiList) => (
          <Entry
            key={emojiList.id}
            emoji={emojiList.emoji}
            name={emojiList.name}
            meaning={emojiList.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmojiResults from "./components/EmojiResults";
import filterEmoji from "./filterEmoji";
function App() {
  const [filteredEmoji, setFilteredEmoji] = useState([]);
  const [emojiInput, setEmojiInput] = useState("");
  useEffect(() => {
    setFilteredEmoji(filterEmoji(emojiInput, 20));
  }, [emojiInput]);

  return (
    <div>
      <Header />
      <SearchInput setEmojiInput={setEmojiInput} />
      <EmojiResults filteredEmoji={filteredEmoji} />
    </div>
  );
}

export default App;

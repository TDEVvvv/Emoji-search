import React from "react";
import EmojiResultRow from "./EmojiResultRow";
const EmojiResults = ({ filteredEmoji }) => {
  return (
    <div>
      {filteredEmoji.map((emoji, index) => (
        <EmojiResultRow key={index} title={emoji.title} symbol={emoji.symbol} />
      ))}
    </div>
  );
};

export default EmojiResults;

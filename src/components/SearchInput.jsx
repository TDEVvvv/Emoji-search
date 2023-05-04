import React from "react";

const SearchInput = ({ setEmojiInput }) => {
  return (
    <div className="m-4">
      <input
        onChange={(e) => setEmojiInput(e.target.value)}
        type="text"
        placeholder="Эможи хайх"
        className="w-full border-2 border-gray-600 rounded-md p-2"
      />
    </div>
  );
};

export default SearchInput;

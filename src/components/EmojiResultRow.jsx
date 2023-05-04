import React, { useEffect } from "react";
import ClipboardJS from "clipboard";

const EmojiResultRow = ({ title, symbol }) => {
  useEffect(() => {
    new ClipboardJS(".copy-btn");
  }, []);
  return (
    <div
      data-clipboard-text={symbol}
      className="copy-btn group flex items-center justify-between border border-gray-300 p-3 cursor-pointer hover:bg-gray-200"
    >
      <div className="flex items-center p-2">
        <p className="text-5xl mr-5">{symbol}</p>
        <p className="text-2xl font-spartan">{title}</p>
      </div>
      <div className="hidden  text-gray-400 group-hover:block">
        <p>Click to copy emoji</p>
      </div>
    </div>
  );
};

export default EmojiResultRow;

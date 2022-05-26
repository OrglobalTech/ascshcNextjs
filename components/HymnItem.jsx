import React from "react";
import Link from "next/link";

const HymnItem = ({ hymn }) => {
  return (
    
      <div className="bg-black/50 hover:bg-white/70 text-white hover:text-fuchsia-800 p-2 text-lg rounded-md mt-3 border shadow-sm shadow-black  mb-3 font-serif ">
        <Link href="/hymn/[id]" as={`/hymn/${hymn.id}`}>
          <a>
            <h3>
              {hymn.id}. {hymn.title}
            </h3>
          </a>
        </Link>
      </div>
    
  );
};

export default HymnItem;

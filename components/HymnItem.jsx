import React from "react";
import Link from "next/link";

const HymnItem = ({ hymn }) => {
  return (
    
      <div className="bg-white hover:bg-fuchsia-800 text-black hover:text-white p-2 text-lg rounded-md mt-3 shadow-md  mb-3 font-serif">
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

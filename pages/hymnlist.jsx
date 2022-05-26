import React, { useState } from "react";
import Header from "../components/Header";
import { server } from "../config/index";
import HymnItem from "../components/HymnItem";
import Search from "../components/Search";
import Meta from "../components/Meta";

export default function HymnList({ hymns }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Meta titleHead={"ASCSHC-Hymns"} />
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <div className=" flex p-5 mx-10 max-w-full rounded-xl shadow-2xl  text-center justify-center  ">
        <h1 className="text-white text-xl whitespace-pre-line">
          {hymns.filter((hymn) => {
              if (searchTerm === "") {
                return { hymn };
              } else if (
                hymn.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return { hymn };
              } else if (hymn.id.includes(searchTerm)) {
                return { hymn };
              }
            })
            .map((hymn) => {
              return <HymnItem key={hymn.id} hymn={hymn} />;
            })}

          {/* {function handler({query:{id}},res){
    
    const filtered = hymns.filter(hymn => hymn.id ===id
        )
    if (filtered.length >0){
        res.status(200).json(filtered[0])
    }else{
            res.status(404).json({message:`Hymn ${id} is not found`})
  
        }
    }} */}
        </h1>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}`);
  const hymns = await res.json();
  

  return {
    props: {
      hymns,
    },
  };
};

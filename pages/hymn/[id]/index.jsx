import React from "react";
import Link from "next/link";
import { server } from "../../../config/index";
import Header from "../../../components/Header";
import Meta from "../../../components/Meta";

const hymn = ({ hymn }) => {
  
const lastHymn = 5
const firstHymn = 1
const titleHymn="ASCSHC"
  return (<>
<Meta titleHead= {titleHymn.concat("-",hymn.title) }/>
    <div className="flex flex-col ">
      <Header />
      <div className=" flex flex-row justify-between">

        <button className="bg-white rounded-md px-2 py-1 mb-2 ">
          {hymn.id == firstHymn ? <Link href="/hymn/[id]" as={`/hymn/${hymn.id}`} >Previous</Link>:<Link href="/hymn/[id]" as={`/hymn/${parseInt(hymn.id)-1}`}>Previous</Link>}
        </button>
        <button className="bg-white rounded-md px-2 py-1 mb-2 ">
          <Link href="/hymnList">Home</Link>
        </button>
        <button className="bg-white rounded-md px-2 py-1 mb-2">
          {hymn.id == lastHymn ? <Link href="/hymn/[id]" as={`/hymn/${hymn.id}`} >Next</Link>:<Link href="/hymn/[id]" as={`/hymn/${parseInt(hymn.id)+1}`}>Next</Link>}
        </button>
      </div>

      <div className=" pl-5 pb-5 pr-5 max-w-md rounded-xl shadow-2xl justify-center  bg-white divide-y-2 divide-solid divide-fuchsia">
        {/* The hymn id and title */}
        <h1 className="mt-3 text-3xl font-bold text-center text-black whitespace-pre-line ">
          {hymn.id}. {hymn.title}
        </h1>

        {/* The description and the tune */}
        <h6 className="mt-3 text-sm text-right text-black whitespace-pre-line px-2 py-4">
          {hymn.description} | {hymn.tune}
        </h6>

        {/* The Hymn Body */}
        <p className="text-black whitespace-pre-line ml-2">{hymn.body}</p>

        {/* Composedby */}
        <h6 className="mt-3 text-sm text-right text-black whitespace-pre-line p-3">
          {hymn.composedby}
        </h6>
      </div>
    </div>

  </>
    
  );
};

{/* Fetching the data using static props via internal api */}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/hymns/${context.params.id}`);

  const hymn = await res.json();

  return {
    props: { hymn },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/hymns/`);

  const hymns = await res.json();
  const ids = hymns.map((hymn) => hymn.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    
    paths,
    fallback: false,
    
  };
};

export default hymn;

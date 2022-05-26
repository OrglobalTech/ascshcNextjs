import React from "react";
import Link from "next/link";
import { server } from "../../../config/index";
import Header from "../../../components/Header";
import Meta from "../../../components/Meta";

const hymn = ({ hymn }) => {
  const lastHymn = 5;
  const firstHymn = 1;
  const titleHymn = "ASCSHC";
  return (
    <>
      <Meta titleHead={titleHymn.concat("-", hymn.title)} />
      <div className="flex flex-col ">
        <Header />
        <div className=" flex flex-row justify-between mx-2">
          <button className="bg-white text-xs rounded-md px-1 py-1 mb-1 mx-1 ">
            {hymn.id == firstHymn ? (
              <Link href="/hymn/[id]" as={`/hymn/${hymn.id}`}>
                ...
              </Link>
            ) : (
              <Link href="/hymn/[id]" as={`/hymn/${parseInt(hymn.id) - 1}`}>
                Previous
              </Link>
            )}
          </button>
          <button className="bg-white text-xs rounded-md px-2 py-1 mb-1 ">
            <Link href="/hymnlist">Home</Link>
          </button>
          <button className="bg-white text-xs rounded-md px-2 py-1 mb-1">
            {hymn.id == lastHymn ? (
              <Link href="/hymn/[id]" as={`/hymn/${hymn.id}`}>
                ...
              </Link>
            ) : (
              <Link href="/hymn/[id]" as={`/hymn/${parseInt(hymn.id) + 1}`}>
                Next
              </Link>
            )}
          </button>
        </div>

        <div className="flex flex-col pl-5 pb-5 pr-5 mx-2 shadow-sm shadow-black justify-start text-white h-[350px] overflow-auto rounded-lg divide-y bg-black/40 divide-fuchsia">
          {/* The hymn id and title */}
          <h1 className="mt-3 text-3xl font-bold text-center  whitespace-pre-line ">
            {hymn.id}. {hymn.title}
          </h1>

          {/* The description and the tune */}
          <h6 className="mt-3 text-sm text-right  whitespace-pre-line px-2 py-4">
            {hymn.description} | {hymn.tune}
          </h6>

          {/* The Hymn Body */}
          <p className=" whitespace-pre-line ml-2">{hymn.body}</p>

          {/* Composedby */}
          <h6 className="mt-3 text-sm text-right  whitespace-pre-line p-3">
            {hymn.composedby}
          </h6>
        </div>
      </div>
    </>
  );
};

{
  /* Fetching the data using static props via internal api */
}
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}${context.params.id}`);

  const hymn = await res.json();

  return {
    props: { hymn },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}`);

  const hymns = await res.json();  
  const ids = hymns.map((hymn) => hymn.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {    
    paths,
    fallback: false,
  };
};

export default hymn;

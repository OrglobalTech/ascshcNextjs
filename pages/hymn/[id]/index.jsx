import React from "react";
import Link from "next/link";
import { server } from "../../../config/index";
import Header from "../../../components/Header";

const hymn = ({ hymn }) => {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="">
      <button className="bg-white rounded-md px-2 py-1 mb-2 ml-4">
        <Link href="/hymnList">Back</Link>
      </button>
      </div>
     
      <div className=" pl-5 pb-5 max-w-md  mx-4 rounded-xl shadow-2xl justify-center  bg-white ">
        <h1 className="mt-3 text-2xl font-bold text-center text-black whitespace-pre-line">
          {hymn.id}. {hymn.title}
        </h1>
        <p className="text-black whitespace-pre-line">{hymn.body}</p>
      </div>
    </div>
  );
};

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

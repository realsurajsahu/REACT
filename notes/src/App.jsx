import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')


  const handler = (e) => {
    e.preventDefault();
    console.log(Title , Details);
    setTitle('')
    setDetails('')
  };

  return (
    <div className="bg-black p-10 h-fit">
      <div className="rounded-xl pb-1">
        <div className=" text-white max-w-full ps-6 pb-8">
          <h1 className="text-4xl font-bold">Create a Note</h1>
        </div>
        <hr className="w-full text-white" />
        <form
          onSubmit={(e) => {
            handler(e);
          }}
          className=" text-white max-w-full p-6 m-6 rounded-xl shadow-2xl"
        >
          <h4 className="text-2xl font-semibold">Note Title</h4>
          <br />
          <input
            type="text"
            placeholder="Enter your title"
            value={Title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            className="border rounded-xl shadow-xl p-3 w-full mb-7 text-xl"
          />
          <h4 className="text-2xl font-semibold">Note Description</h4>
          <br />
          <textarea
            placeholder="Write your note..."
            className="border rounded-xl shadow-xl p-3 h-50 w-full mb-10"
            value={Details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          ></textarea>
          <br />
          <button className="w-full border  p-3 rounded-4xl font-semibold text-2xl">
            Add Note
          </button>
        </form>
      </div>
      <br />
      <hr className="text-gray-500" />
      <br />
      <div>
        <h1 className="text-3xl font-bold text-white">Recent Notes</h1>
        <br />
        <br />
        <div className="flex gap-2 flex-wrap">
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
          <div className="w-80 text-pretty border-2 border-white p-5 ms-6 rounded-2xl">
            <h3 className="text-xl pb-3 font-semibold text-white">Meeting Notes</h3>
            <hr className="pb-3 text-white" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, kdnvfe fkve jfdnvfje vnf
              vjefv fn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

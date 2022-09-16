// import React, { useState } from "react";
// import Axios from "./Axios";
// import { useNavigate } from "react-router-dom";

// const Createuser = () => {
//   let [name, setPname] = useState("");
//   let [salary, setPtext] = useState("");
//   let [company, setPupload] = useState("");
//   let navigate = useNavigate();

//   let submitHandler = async e => {
//     e.preventDefault();
//     // console.log({name, salary, company});
//     let payLoad = { name, text,upload };
//     await Axios.post("/users", payLoad);
//     navigate("/users");
//   };

//   return (
//     <section className="w-full h-[100vh] bg-slate-300 flex items-center">
//       <form
//         className="w-[50%] m-auto h-[50vh] bg-white text-center px-2 py-5 rounded-md"
//         onSubmit={submitHandler}>
        
//         <h1 className="text-3xl text-yellow-300 p-3">
//           create post details
//         </h1>
// {/* ----------------------------------------------------------------------   */}

//         <div>
//           <label htmlFor="" className="font-bold text-black text-2xl">
//             post Name:
//           </label>
//           <input
//             className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
//             type="text"
//             placeholder="enter name"
//             value={name}
//             onChange={e => setPname(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="" className="font-bold text-black text-2xl">
//             post text :
//           </label>
//           <input
//             className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
//             type="text"
//             placeholder="enter post text"
//             value={text}
//             onChange={e => setPtext(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="" className="font-bold text-black text-2xl">
//           Post upload
//           </label>
//           <input
//             className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
//             type="post"
//             placeholder="Upload post"
//             value={upload}
//             onChange={e => setPupload(e.target.value)}
//           />
//         </div>
//         <button className="bg-gray-400 px-7 py-1 rounded-md text-blue-600 font-bold my-4">
//           Publish post
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Createuser;

import React, { useState } from "react";
import Axios from "./Axios";
import { useNavigate } from "react-router-dom";
const CreateUsers = () => {
  let [name, setPname] = useState("");
  let [text, setPtext] = useState("");
  let [upload, setPupload] = useState("");
  let navigate = useNavigate();
  let submitHandler = async e => {
    e.preventDefault();
    // console.log({ pname, ptext });
    let payLoad = { name, text,upload };
    await Axios.post("/users", payLoad);
    navigate("/users");
  };
  return (
    <section className="w-full h-[100vh] bg-slate-300 flex items-center ">
      <form
        className="w-[50%] m-auto h-[50vh] bg-cyan-500 text-center px-2 py-5 rounded-md"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl text-yellow-300 p-3">
          Create New Post
        </h1>
        <div>
          <label htmlFor="" className="font-bold text-black text-2xl">
            post Name :
          </label>
          <input
            className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
            type="text"
            placeholder="Enter Post Name"
            value={name}
            onChange={e => setPname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className="font-bold text-black text-2xl">
           post Text :
          </label>
          <input
            className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
            type="text"
            placeholder="Enter your text"
            value={text}
            onChange={e => setPtext(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="" className="font-bold text-black text-2xl">
           upload post :
          </label>
          <input
            className="border-[1px] px-2 py-1 m-1 rounded-lg text-[20px] text-black outline-none"
            type="post"
            placeholder="Upload Post"
            value={upload}
            onChange={e => setPupload(e.target.value)}
          />
        </div>
        <button className="bg-gray-400 px-7 py-1 rounded-md text-blue-600 font-bold my-4">
           Publish Post
        </button>
      </form>
    </section>
  );
};

export default CreateUsers;

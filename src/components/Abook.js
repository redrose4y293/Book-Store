import React from "react"
const Abook = () => {
    const upload =()=>{
        console.log("Data Upload")
    }
    return (
        <div>
            <h1 className="text-rose-900 text-center mt-7 ">Add Book To Your Record</h1>
            <div className="flex flex-col items-center gap-4 mt-6">
            <input className="h-[50px] w-[30%] border-2 text-center" type="text" placeholder="Please Enter Book Name" />
            <input className="h-[50px] w-[30%] border-2 text-center" type="text" placeholder="Please Enter Book Author"/>
            <input className="h-[50px] w-[30%] border-2 text-center" type="text" placeholder="Please Enter Class Name"/>
            <input className="h-[50px] w-[30%] border-2 text-center" type="text" placeholder="Please Enter Department Name"/>
            <input className="h-[50px] w-[30%] border-2 text-center" type="date" placeholder="Please Select Date"/>
            <button className="h-[50px] w-[100px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
             type="submit" onClick={upload}>Submit</button>
            </div>
        </div>
    )
}
export default Abook;
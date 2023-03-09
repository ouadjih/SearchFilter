import { useState } from "react";
import "./App.css";
import {data} from "./assets/data";
function App() {
  const [search,setSearch]=useState('');

  const result = data.filter(info => info.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  
  const table = (
    <table className="table-fixed  border-collapse border-spacing-2 border border-slate-300 bg-slate-400 m-10">
    <thead>
      <tr>
        <th class="border border-slate-300">First Name</th>
        <th class="border border-slate-300">Email</th>
        <th class="border border-slate-300">Phone Num</th>
        <th class="border border-slate-300">Company</th>
        <th class="border border-slate-300">Country</th>
      </tr>
    </thead>
    <tbody>
     { 
     (search?result:data).map(info =>
      <tr>
      <td class="border border-slate-300">{info.Name}</td>
      <td class="border border-slate-300">{info.email}</td>
      <td class="border border-slate-300">{info.phone}</td>
      <td class="border border-slate-300">{info.company}</td>
      <td class="border border-slate-300">{info.country}</td>
    </tr>
    )
    }
    </tbody>
  </table>
  )

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Contact-info</h1>
      
     

      <div className="container mx-auto bg:color flex flex-auto flex-col align-middle justify-center">
      <form className="flex items-center w-1/3  align-middle justify-center mt-10  px-4">   
        <label for="simple-search" className="sr-only">Search</label>
        <div class="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input 
            type="text" 
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   focus:border-slate-400 block w-full pl-10 p-2.5 " 
            placeholder="Search" 
            onChange={(e)=>setSearch(e.target.value)}
            required
          />
      </div>
      </form>
      {data?table:<p>No datafound</p>}
      </div>
    </div>
  );
}

export default App;

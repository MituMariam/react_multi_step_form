import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  
  const formArray = [1,2,3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setstate] = useState({
    name:'',
    dept:'',
    batch:'',
    varsity:'',
    session:'',
    address:'',
    district:'',
    thana:'',
    post:'',
  })

  const inputs =(e) =>{
    setstate({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const next = () =>{
    if(formNo === 1 && state.name && state.dept && state.batch){
      setFormNo(formNo + 1)
    }
    else if(formNo === 2 && state.varsity && state.session && state.address ){
      setFormNo(formNo + 1)
    }
    else{
      toast.error("please fillup all input field!!")
      // toast.dark("please fillup all input field!!");
    }
    
  }
  const prev = () =>{
  setFormNo(formNo - 1 )
  }

  const handleSubmit = () => {
if(state.district && state.thana && state.post){
  console.log(state);
  toast.success("Form submitted!!")

}else{
  toast.error("please fillup all input field!!")

}
  }

  return (
   
      <div class="h-screen bg-gray-300 flex justify-center items-center">
         <ToastContainer/>
          <div className="bg-white w-[400px] shadow-md p-5">
       
              <div className="flex justify-between items-center py-2">
              {
              formArray.map((j,i) => <>
              <div className={`w-10 h-10 rounded-full ${formNo - 1 === i || formNo - 1 === i+1 || formNo === formArray.length ? 'bg-lime-600':'bg-slate-400 ' } flex justify-center items-center`}>{j}</div>
              {
                i !== formArray.length - 1 && <div className={`w-[125px] h-1 ${ formNo === i+2 || formNo === formArray.length ?'bg-lime-600':'bg-slate-400'}`}></div>
              }
                
              </>
                
                )
              }
              </div>
           
           {
            formNo === 1 && <div>
             <div>
              <label htmlFor="name" className="text-slate-700">Name :</label>
              <input onChange={inputs} value={state.name} className="p-2 border border-slate-200 w-full" type="text" name="name" id="name" placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="dept" className="text-slate-700">Dept :</label>
              <input onChange={inputs}  value={state.dept} className="p-2 border border-slate-200 w-full" type="text" name="dept" id="dept" placeholder="Dept"/>
            </div>
            <div>
              <label htmlFor="batch" className="text-slate-700">Batch :</label>
              <input onChange={inputs}  value={state.batch} className="p-2 border border-slate-200 w-full" type="text" name="batch" id="batch" placeholder="Batch"/>
            </div>
            <div>
              <button className="w-full bg-lime-600 p-1 text-xl" onClick={next}>Next</button>
            </div>
            </div>
           }

          {
            formNo === 2 && <div>
             <div>
              <label htmlFor="varsity" className="text-slate-700">Varsity :</label>
              <input onChange={inputs}  value={state.varsity} className="p-2 border border-slate-200 w-full" type="text" name="varsity" id="varsity" placeholder="Varsity"/>
            </div>
            <div>
              <label htmlFor="session" className="text-slate-700">Session :</label>
              <input onChange={inputs}  value={state.session} className="p-2 border border-slate-200 w-full" type="text" name="session" id="session" placeholder="Session"/>
            </div>
            <div>
              <label htmlFor="address" className="text-slate-700">Address :</label>
              <textarea value={state.address} onChange={inputs}  type="number" rows="5" className="p-2 border border-slate-200 w-full" name="address" id="address" />
              {/* <textarea  onChange={inputs}  value={state.address} ></textarea> */}
            </div>
            <div className="flex gap-5">
              <button className="w-full bg-lime-600 p-1 text-xl" onClick={prev}>Prev</button>
              <button className="w-full bg-lime-600 p-1 text-xl" onClick={next}>Next</button>
            </div>
            </div>
           }
           {
            formNo === 3 && <div>
             <div>
              <label htmlFor="district" className="text-slate-700">District :</label>
              <input onChange={inputs}  value={state.district} className="p-2 border border-slate-200 w-full" type="text" name="district" id="district" placeholder="District"/>
            </div>
            <div>
              <label htmlFor="thana" className="text-slate-700">Thana :</label>
              <input onChange={inputs}  value={state.thana} className="p-2 border border-slate-200 w-full" type="text" name="thana" id="thana" placeholder="Thana"/>
            </div>
            <div>
              <label htmlFor="post" className="text-slate-700">Post :</label>
              <input onChange={inputs}  value={state.post} className="p-2 border border-slate-200 w-full" type="text" name="post" id="post" placeholder="Post"/>
            </div>
            <div className="flex gap-5">
              <button className="w-full bg-lime-600 p-1 text-xl" onClick={prev}>Prev</button>
              <button className="w-full bg-lime-600 p-1 text-xl" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
           }
          </div>
      </div>

  )
}

export default App

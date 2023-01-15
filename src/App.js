import React,{useState} from 'react';
import Table from './Component/Table';
import './App.css';


function App() {
  let c=false;

  const[names,setNames]=useState([]);
  

  const[Input,setInput] = useState('');
  

  const InputHandler = (e) =>{
   
     e.preventDefault();

     if(!Checker(Input)){
      alert("Wrong Input")
     }
     else{
      setNames([...names,Input])
     
    }


   
     
  }
 
  const Checker = (str) =>{
   
    const words = str.match(/\S+/g);
   
      if(words.length===3)
       {
        c=true;
      }

   
   return c;
    
 }
  return(
    <div>

       <h1>Task 1</h1>
      <form onSubmit={InputHandler}>
      <input type ="text" onChange={(e)=>{
       setInput(e.target.value)
      }}  value={Input}></input>
      
     

      <button type="submit"> Enter</button>
      </form>
    {
    
      names.map((value,index)=>(
          <Table key={index} name={value}/>        
      ))
    }

    </div>
  );
}


export default App ;

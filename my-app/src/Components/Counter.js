import {useState,useEffect} from "react"



// function Counter()
// {
//     const[count,setCount]=useState[10];
//     let name='kumar';

//     const updateName=()=>{
//         name="Kumar"
//     }

//     return (
//         <div>
//          <button onclick={updateName}>updateName</button>
//           <h1>{name}</h1>
//         </div>
//     )
// }

function Counter()
{
    const [count,setCount]=useState(10);
    const [name,setName]=useState('sharmila');

    useEffect(()=>{
       console.log('useEffect mounted');
       return()=>{
           console.log('UseEffect UnMounted');

       }
    },[count]);

    const incrementCount =()=>
    {
        setCount(count+1);
    }
    const decrementCount=()=>
    {
        setCount(count -1);
    }
    const reset=()=>
    {
        setCount(count);
    }
   const updateName=()=>{
        setName('Kumar')
            }
    return (
        <div>

        <h1> counter : {count}</h1>
        <h1> Name : {name}</h1>
        <button onClick={updateName}>updateName</button>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}> decrementCount</button>
        <button onClick={reset}>Reset</button>


        </div>
    )
     
}
export default Counter;
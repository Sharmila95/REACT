import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
// import GreetClass from './Components/GreetClass';
import Counter from './Components/Counter';

import User from './Components/useStateObject';
import BookList from './Components/BookList';
import CounterClass from './Components/CounterClass';
import LifeCycle from './Components/LifeCycle';
import Albums from './Components/Albums';
import PostList from './Components/PostList';
import PostList1 from './Components/PostList1';
import PostListAxios from './Components/PostListAxios';
import MyComponent from './Components/Styles/MyComponent';
import Registration from './Components/FormsEventHandling/Registration';
import RegistrationUseRef from './Components/FormsEventHandling/RegistrationUseRef';



const employee={
  firstName:"sharmila",
  lastName:"age",
  salary:"10000",
  address:{
    city:"Bangalore",    
    state:"Karnataka",
    country:"India"
  }
}



function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      <RegistrationUseRef/>
    {/* <MyComponent/> */}
   {/* <PostListAxios/> */}
    {/* <PostList1/> */}
     {/* <Albums/> */}
    {/* <LifeCycle/> */}
     {/* <Counter/> */}
    {/* <Counter/> */}
    {/* <CounterClass/> */}
    {/* <BookList/>
   
    {/* <User/> */} 
     {/* <Greet firstName="sharmila" lastName="Ramalingam" data={employee}></Greet>
     <Greet firstName="abc" lastName="sdf" data={employee}></Greet>
     <Greet firstName="efds" lastName="sfsd" data={employee}></Greet>
     <Greet firstName="sdf" lastName="sf" data={employee}></Greet>
     <Greet firstName="sdf" lastName="sdf" data={employee}></Greet>
     <Greet firstName="sdf" lastName="sf" data={employee}></Greet>
     <GreetClass firstName="GreetClassFN" lastName="GreetClassLN" data={employee}>
     </GreetClass> */}
    </div>
  );
}

export default App;

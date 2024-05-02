import {useState} from "react";


function User()
{


const employee={name:"Ravi",
age:21,
salary:"10000",
married: true}

let[user,SetUser]=useState(employee);

function incrementSalary()
{
    SetUser ({...employee, salary: employee.salary + 1 });
}
return (
    <div>
        <h1>user name is {user.name}  and age is {user.age}</h1>

        <h1>user Salary is {user.salary}  and married is {user.married}</h1>

        <button onClick={incrementSalary}>incrementSalary</button>
    </div>
)
}

export default User;
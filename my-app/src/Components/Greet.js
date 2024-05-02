




function Greet(props){
    const {firstName,lastName,data}=props;
    console.log(data);
    const {address,salary}=data;
    return (
        

        <div>
            <h1>Welcome to React class {address.city} {salary}</h1>
        </div>
    )
}



export default Greet;
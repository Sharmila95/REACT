import React,{useState,useEffect} from 'react';


import axios from 'axios';


function PostListAxios()
{
const[posts,setPosts]=useState([]);

const[loading,setLoading]=useState(true);

const[error,setError]=useState("");

useEffect(()=>{
  const fetchData=async()=>{

    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        setLoading(false);
        setPosts(response.data);    
    }
    catch(error)
    {
        setLoading(false);
        setError("Error while fetching data");
        console.error(error);
    }
  }
fetchData();

},[]);

if(loading){
    return <div>Loading...</div>
}
if(error){
    return <div>{error}</div>
}
return (
    <div>
        List of Posts
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>

    </div>
)

}


export default PostListAxios;
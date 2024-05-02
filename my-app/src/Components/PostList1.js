// create postlist component consuming the API from jsonplaceholder.typicode.com/posts
// and display the list of posts in the browser
// i want to handle loading state, error state and success state
import { useEffect,useState } from 'react';

function PostList1() {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{        
      const fetchdata=async()=>{
    try{  
       const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok)
        {           
            throw new Error('Something went wrong');
        }
        const data=await response.json();
       
            setPosts(data);           
            setLoading(false);
    }
    catch(error) {
            setError('Something went wrong');
            setLoading(false);
            console.log(error);
    }
  
    }
    fetchdata();
    },[])


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
export default PostList1;

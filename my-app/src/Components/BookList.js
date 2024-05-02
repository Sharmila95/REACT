
import {useState} from "react";


function BookList(){
    const BooksArrray = [
        {
            id: 1,
            title: "Outliers",
            author: "Malcolm Gladwell",
            price: 400
          },
          {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 471
          },
          {
            id: 3,
            title: "The Power of Now",
            author: "Eckhart Tolle",
            price: 310
          },
          {
            id: 4,
            title: "Man’s Search for Meaning",
            author: "Viktor E. Frankl",
            price: 323
          },
          {
            id: 5,
            title: "Grit",
            author: "Angela Duckworth",
            price: 266
          }
        ];

        const [Books,setBook]=useState(BooksArrray);

   const AddBook=(event)=>{

    const title=event.target.Title.value;
    const author=event.target.author.value;    
    const Price=event.target.author.Price;
    const newbook={
      id: Books.length+1,
      title: title,
      author: author,
      price: Price
    }
   setBook([...Books,newbook]);

   }

return(<div>
  <div>
    <form onSubmit={AddBook}>
      <input type="text" placeholder="Title"  name ="Title"/>
      <input type="text" placeholder="Author"  name ="Title"/>
      <input type="text" placeholder="Price"  name ="Title"/>
      <button type="submit">Add Book</button>
    </form>

    </div>
  <h1> Book list</h1>
  <table>
   <thead>
       <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>

       </tr>
    </thead>
    <tbody>
 {Books.map((book)=>
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      
    </tr>

  )}
    </tbody>
    </table>
    </div>);

}

export default BookList;
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List.js"
import "./App.css";

function App() {
  const [inputText, setInputText, setuserName, setBooksState] = useState("");

  useEffect (()=> {
    fetch("https://developers.google.com/books/docs/v1/using#WorkingVolume")
    .then((res)=> res.json())
    .then((booksArray) => {
      const newBooksState = booksArray.map((book)=> {
        return book.title
      })
      setBooksState(newBooksState)
    })
  }, [])

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleChange =(e)=>{
    if(e.target.value.length > 3){ 
      window.alert("Username shouldn't exceed more than 3 characters")
    }
    setuserName(e.target.value);
  }



  return (
    <div className="main">
      <h1>MTA dev club Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          //onChange={inputHandler}
          onChange={handleChange} // i didnt know to to merge between 2 different onChange 
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}


export default App;
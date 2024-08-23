 import React from "react";
// import { v4 as uuid } from "uuid";
 import "./App.css";
 import Header from "./Header";
 import AddContact from "./AddContact";
 import ContactList from "./ContactList";


function App () {
   const contacts = [
     {
       id:"1",
    
      name:"Praveen",
      email:"praveen@gmail.com" ,
  },
  {
      id:"2",
      name:"Ram",
      email:"Ram@gmail.com",
  },
  ];
  return(
 <div className="ui container">
  <Header />
  <AddContact />
  <ContactList  contacts ={contacts} />

 </div>
  );
}
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);


export default App;

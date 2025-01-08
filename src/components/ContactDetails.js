import React from "react";
import { useParams, Link } from "react-router-dom";

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return <div>Contact not found!</div>;
  }

  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src="../images/face.png" alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue center">Back to Contact List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;


// import React from "react";
// import user from "../images/face.png";
// import { Link } from "react-router-dom";

// const ContactDetails = (props) => {
  
//   const {name,email} =  props.location.state.contact;
//   return (
//   <div className="main">
//     <div className="ui card centered">
// <div className="image">
//    <img src={face} alt="face"/>
//    </div>
//    <div className="content">
//     <div className="header">{name}</div>
//     <div className="description">{email}</div>
//    </div>
//    <div className=" .center-div">
//     <Link to= "/">
//     <button className=" ui button blue center">Back to Contact</button>
//     </Link>
//    </div>

//     </div>
//   </div>
//   );
// };

// export default ContactDetails;



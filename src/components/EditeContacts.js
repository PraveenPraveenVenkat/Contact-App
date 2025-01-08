import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ updateContactHandler, contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ id, name, email });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;



// import React from "react";

// class EditeContact extends React.Component {
//  constructor(props) {
//    super(props);
//    const{id,name,email }=props.location.state.contact;
//    this.state={
//     id,
//     name,
//     email,
//    };
//  }

//   update = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.updateContactHandler (this.state);
//     this.setState({ name: "", email: "" });
//   }; 
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Edit Contact</h2>
//         <form className="ui form" onSubmit={this.update}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Update</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default EditeContact;

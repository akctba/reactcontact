import React from "react";
import uuid from 'react-uuid'
import { Consumer } from "./Context";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = (dispatch, e) => {
    
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newUser = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newUser });
    this.props.history.push("/");
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
  });



  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <>
              <h1>Add new contact</h1>

              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the name"
                  value={name}
                  onChange={this.onChange}
                />
                <br />
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter the email"
                  value={email}
                  onChange={this.onChange}
                />
                <br />
                <label>Phone: </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter the phone #"
                  value={phone}
                  onChange={this.onChange}
                />
                <br />
                <input type="submit" value="Add contact" className="btn btn-success" />
                
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

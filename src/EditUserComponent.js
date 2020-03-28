import React from "react";

function EditUser(props) {
  const { name, email, phone } = props.editUserData;
  console.log("editing " + name);
  return (
    <>
      <label>Name:</label>
      <input type="text" defaultValue={name} id={"name" + props.id} />
      <br />
      <label>Email:</label>
      <input type="email" defaultValue={email} id={"email" + props.id} />
      <br />
      <label>Company Phone:</label>
      <input type="text" defaultValue={phone} id={"phone" + props.id} />
      <br />
      <button className="btn btn-success"
        onClick={() => {
          props.editUserFunction();
        }}
      >
        Save
      </button>

      <hr />
    </>
  );
}

export default EditUser;

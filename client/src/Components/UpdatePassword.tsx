import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  const onFinish = async () => {
    const updated = await updatePassword({
      variables: {
        username: username,
        oldPassword: currentPassword,
        newPassword: newPassword,
      },
    });
    console.log(updated.data.updatePassword.message);
    setUpdateMessage(updated.data.updatePassword.message);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Current Password..."
        onChange={(event) => setCurrentPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <button onClick={onFinish}>Update Password</button>
      <br></br>
      {updateMessage}
    </div>
  );
}

export default UpdatePassword;

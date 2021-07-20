import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <div className="profContainer">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn cursor"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="displayName">{userObj.displayName}님! 환영합니다~</span>
      <span className="formBtn cursor cancelBtn logOut" onClick={onLogOutClick}>
        <span>Log Out</span>
      </span>
    </div>
  );
};

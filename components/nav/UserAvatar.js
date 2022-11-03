import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const userProfileInitials = (firstName, lastName) => {
  return firstName.charAt(0) + lastName.charAt(0);
};

export default function UserAvatar() {
  const { userProfile } = useContext(UserContext);

  return (
    <>
      <p>{userProfile.displayName}</p>
      {/* <figure className="user-avatar-fig">
        <img
          className="user-avatar-src"
          src={userProfile.avatar}
          alt={userProfile.displayName}
        />
      </figure> */}
    </>
  );
}

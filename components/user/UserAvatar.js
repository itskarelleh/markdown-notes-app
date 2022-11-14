import React from "react";

export default function UserAvatar({ user, editing }) {
  if (!user.avatar) {
    return (
      <div>
        <p className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900">
          {user.firstName.charAt(0) + user.lastName.charAt(0)}
        </p>
        {editing && <input type="file" />}
      </div>
    );
  }

  return (
    <>
      <figure>
        <img
          src={user.avatar.src}
          alt={`${user.firstName} ${user.lastName}`}
          width="50"
        />
      </figure>
    </>
  );
}

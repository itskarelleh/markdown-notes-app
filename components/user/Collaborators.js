import React, { useState } from "react";
import UserAvatar from "./UserAvatar";

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState([]);

  //use the posts context to get the ids of collaborats associated
  //with a document

  if (!collaborators) {
    <Button label="Add" />;
  }

  return (
    <div className="bg-transparent w-full flex flex-row">
      {collaborators &&
        collaborators.map((collaborator) => <UserAvatar user={collaborator} />)}
    </div>
  );
}

//useStaticProps

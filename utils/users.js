export const users = [
  { id: "jane", name: "jane", imagePath: "images/jane.png" },
  { id: "neil", name: "neil", imagePath: "images/neil.png" },
  { id: "alex", name: "alex", imagePath: "images/alex.png" },
];

  
  export const getOwnerNameById = (ownerId) => {
    const user = users.find((user) => user.id === ownerId);
    return user ? user.name : "";
  };
  
export const users = [
  { id: "neil", name: "Neil", imagePath: "/images/neil.png" },
  { id: "jane", name: "Jane", imagePath: "/images/jane.png" },
  { id: "alex", name: "Alex", imagePath: "/images/alex.png" },
];

  
  export const getOwnerNameById = (ownerId) => {
    const user = users.find((user) => user.id === ownerId);
    return user ? user.name : "";
  };
  
import React, {useState} from "react";

export const From = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`fullName`, fullName);
    console.log("email :>> ", email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName"></label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>
              Add Person
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { createItem } from "../../services/api";

const Create = () => {
  const [username, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newItem = { username };
      await createItem(newItem);
      alert("Item created successfully");
      setName("");
    } catch (error) {
      console.error("There was an error creating the item!", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Item Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;

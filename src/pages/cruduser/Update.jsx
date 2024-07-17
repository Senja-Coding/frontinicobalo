import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem, updateItem } from "../../services/api";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getItem(id);
        setName(response.data.name);
      } catch (error) {
        console.error("There was an error fetching the item!", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedItem = { name };
      await updateItem(id, updatedItem);
      alert("Item updated successfully");
    } catch (error) {
      console.error("There was an error updating the item!", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Item Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;

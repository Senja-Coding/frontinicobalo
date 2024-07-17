import React, { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/api";

const Read = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the items!", error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Items List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nama</th>
            <th className="py-2">Email</th>
            <th className="py-2">No HandPhone</th>
            <th className="py-2">Level</th>
            <th className="py-2">Jabatan</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2">{item.id}</td>
              <td className="py-2">{item.nama}</td>
              <td className="py-2">{item.email}</td>
              <td className="py-2">{item.no_hp_pengguna}</td>
              <td className="py-2">{item.level}</td>
              <td className="py-2">{item.jabatan}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;

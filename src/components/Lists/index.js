import React from "react";
import List from "./List";

const Lists = ({ data, setData, setEditItem }) => {
  function deleteitem(id) {
    const updatedata = [...data].filter((item) => item.id !== id);
    setData(updatedata);
  }

  return (
    <div className="body">
      {data.map((item) => (
        <>
          <List
            item={item}
            key={item.id}
            deleteitem={deleteitem}
            setEditItem={setEditItem}
          />
          <hr />
        </>
      ))}
    </div>
  );
};

export default Lists;

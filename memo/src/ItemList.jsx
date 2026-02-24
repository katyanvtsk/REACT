import { memo, useEffect, useState } from "react";

const ItemList = ({ items }) => {
  console.log("render item");

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default memo(ItemList);

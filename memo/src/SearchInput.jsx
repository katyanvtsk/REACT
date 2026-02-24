import { memo } from "react";

const SearchInput = ({ onChange }) => {
  console.log("render input");

  return (
    <>
      <input type="text" onChange={onChange} placeholder="Поиск..." />
    </>
  );
};

export default memo(SearchInput);

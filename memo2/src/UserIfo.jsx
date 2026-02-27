import { useState, memo } from "react";
const UserInfo = ({ obj }) => {
  console.log("render userInfo");

  const [user, setUser] = useState(obj);

  const setName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Pavel",
    }));
  };

  const setAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  const setActive = () => {
    setUser((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  };

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "10px",
      }}
    >
      <h2>Профиль пользователя</h2>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "да" : "нет"}</p>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <button onClick={setName}>Сменить имя</button>
        <button onClick={setAge}>Увеличить возраст</button>
        <button onClick={setActive}>Переключить активноть</button>
      </div>
    </div>
  );
};

export default memo(UserInfo);

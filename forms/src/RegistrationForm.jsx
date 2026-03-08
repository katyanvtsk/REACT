import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Radio, Checkbox, DatePicker, Button, Modal } from "antd";

const RegistrationForm = () => {
  const [subData, setSubData] = useState(null);
  const [modalOpen, setModal] = useState(false);
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("форма отправлена", data);
    setSubData(data);
    setModal(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <Input {...field} placeholder="Введите имя" />
            )}
          />
          <p>{errors.name && errors.name.message}</p>
        </div>

        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Обязательное поле",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "ВВедите правильный email",
              },
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Введите email" />
            )}
          />
          <p>{errors.email && errors.email.message}</p>
        </div>

        <div>
          <label>Пароль:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Обязательное поле",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              pattern: {
                value: /[A-Z]/,
                message: "Хотя бы 1 заглавная буква",
              },
            }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Введите пароль" />
            )}
          />
          <p>{errors.password && errors.password.message}</p>
        </div>

        <div>
          <label>Подтвердите пароль:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Обязательное поле",
              validate: (value) => value === password || "Пароли не совпадают",
            }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Подтвердите пароль" />
            )}
          />
          <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
        </div>

        <div>
          <label>Дата рождения:</label>
          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field }) => (
              <DatePicker {...field} placeholder="Введите дату рождения" />
            )}
          />
          <p>{errors.birthDate && errors.birthDate.message}</p>
        </div>

        <div>
          <label>Пол:</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Обязательное поле" }}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </Radio.Group>
            )}
          />
          <p>{errors.gender?.message}</p>
        </div>

        <div>
          <label>Номер телефона:</label>
          <Controller
            name="number"
            control={control}
            rules={{
              required: "Обязательное поле",
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: "Введите верный номер телефона",
              },
            }}
            render={({ field }) => <Input {...field} />}
          />
          <p>{errors.number && errors.number.message}</p>
        </div>

        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </form>

      <Modal
        title="Зарегистрировано"
        open={modalOpen}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        {subData && <pre>{JSON.stringify(subData, null, 3)}</pre>}
      </Modal>
    </>
  );
};

export default RegistrationForm;

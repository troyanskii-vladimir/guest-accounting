"use client";

import { FormEvent, useState } from "react";
import styles from "./register.module.scss";
import container from "@/styles/container.module.scss";
import { ApiRoute } from "@/constants/config";

function Register(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creatingUser, setCreatingUser] = useState<boolean>(false);
  const [userCreated, setUserCreate] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setCreatingUser(true);
    await fetch(ApiRoute.Register, {
      method: 'POST',
      body: JSON.stringify({
        email, password
      }),
      headers: {'Content-Type': 'application/json'},
    });
    setCreatingUser(false);
  };

  return (
    <section className={styles["form-container"]}>
      <div className={container["main-container"]}>
        <h2 className={styles["title"]}>Зарегестрироватсья</h2>
        <form className={styles["form"]} onSubmit={handleFormSubmit}>
          <label>Email: </label>
          <input
            className={styles["input"]}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            disabled={creatingUser}
          />
          <label>Пароль: </label>
          <input
            className={styles["input"]}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            disabled={creatingUser}
          />
          <button
            className={`btn-reset ${styles["button"]}`}
            type="submit"
            disabled={creatingUser}
          >
            Регистрация
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;

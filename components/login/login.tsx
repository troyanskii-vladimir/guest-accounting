"use client";

import { FormEvent, useState } from "react";
import styles from "./login.module.scss";
import container from "@/styles/container.module.scss";

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <section className={styles["form-container"]}>
      <div className={container["main-container"]}>
        <h2 className={styles["title"]}>Войти</h2>
        <form className={styles["form"]} onSubmit={handleFormSubmit}>
          <label>Email: </label>
          <input
            className={styles["input"]}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <label>Пароль: </label>
          <input
            className={styles["input"]}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button className={`btn-reset ${styles["button"]}`} type="submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;

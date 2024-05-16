"use client";

import { FormEvent, useState } from "react";
import styles from "./login.module.scss";
import container from "@/styles/container.module.scss";
import { ApiRoute } from "@/constants/config";
import {signIn} from 'next-auth/react';

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggingUser, setLoggingUser] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoggingUser(true);

    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });

    setLoggingUser(false);
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
            disabled={loggingUser}
          />
          <label>Пароль: </label>
          <input
            className={styles["input"]}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            disabled={loggingUser}
          />
          <button
            className={`btn-reset ${styles["button"]}`}
            type="submit"
            disabled={loggingUser}
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;

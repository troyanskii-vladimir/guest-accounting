"use client";

import { FormEvent, useState } from "react";
import styles from "./register.module.scss";
import container from "@/styles/container.module.scss";
import { ApiRoute, AppRoute } from "@/constants/config";
import Link from "next/link";

function Register(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creatingUser, setCreatingUser] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setCreatingUser(true);
    setIsError(false);
    setIsSuccess(false);
    const response = await fetch(ApiRoute.Register, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }

    setCreatingUser(false);
  };

  return (
    <section className={styles["form-container"]}>
      <div className={container["main-container"]}>
        <h2 className={styles["title"]}>Зарегестрироватсья</h2>
        {
          isSuccess &&
          <div className={styles['success__created']}>
            Пользователь зарегестрирован. Теперь вы можете <Link href={AppRoute.Login}>войти</Link> в аккаунт
          </div>
        }
        {
          isError &&
          <div className={styles['error__created']}>
            Ошибка создания пользователя.
            <br />
            Попробуйте позднее
          </div>
        }
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

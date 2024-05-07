'use client'

import { FormEvent, useState } from 'react';

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  }

  return (
    <section>
      <h1>Войти в аккаунт</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button
          type="submit"
        >
          Войти
        </button>
      </form>
    </section>
  );
}


export default Login;

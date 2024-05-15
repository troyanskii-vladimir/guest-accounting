"use client";
import { AppRoute } from "@/constants/config";
import styles from "./header.module.scss";
import container from "@/styles/container.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import { Tooltip } from "@mui/material";

type HeaderProps = {
  setActiveAddRoom: (value: boolean) => void;
};

function Header({ setActiveAddRoom }: HeaderProps) {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("Владимир");

  return (
    <header className={styles["header"]}>
      <div
        className={`${container["main-container"]} ${styles["header__container"]}`}
      >
        <Link className={styles["title"]} href={AppRoute.Main}>
          <Image
            src="./img/icons/icon-logo.svg"
            width={50}
            height={50}
            alt="Логотип"
          />
          <span className={styles["title-text"]}>Резервиум</span>
          <span className={styles["title-comment"]}>
            Управляй отелем онлайн
          </span>
        </Link>
        <nav className={styles["nav-links"]}>
          {!isLogged && (
            <>
              <Link
                className={`${styles["btn"]} ${styles["btn-login"]}`}
                href={AppRoute.Login}
              >
                Вход
              </Link>
              <Link
                className={`${styles["btn"]} ${styles["btn-register"]}`}
                href={AppRoute.Register}
              >
                Регистрация
              </Link>
            </>
          )}
          {isLogged && (
            <>
              <Link
                className={`${styles["btn"]} ${styles["btn-login"]}`}
                href={AppRoute.Calendar}
              >
                График
              </Link>
              <Tooltip title="Добавить бронирование" followCursor>
                <button className={`${styles["btn"]} ${styles["btn-nav"]}`}>
                  <AddOutlinedIcon sx={{ fontSize: 26 }} />
                </button>
              </Tooltip>
              <Tooltip title="Добавить комнату" followCursor>
                <button
                  onClick={() => setActiveAddRoom(true)}
                  className={`${styles["btn"]} ${styles["btn-nav"]}`}
                >
                  <AddHomeOutlinedIcon sx={{ fontSize: 26 }} />
                </button>
              </Tooltip>
              <Tooltip title="Профиль" followCursor>
                <Link
                  className={`${styles["btn"]} ${styles["btn-nav"]}`}
                  href={AppRoute.Profile}
                >
                  <FaceOutlinedIcon sx={{ fontSize: 26 }} />
                </Link>
              </Tooltip>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

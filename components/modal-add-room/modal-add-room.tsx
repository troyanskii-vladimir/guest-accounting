import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./modal-add-room.module.scss";
import FocusLock from "react-focus-lock";
import Image from "next/image";
import { useScrollLock } from "@/hooks/use-scroll-lock";

type ModalAddRoomProps = {
  activeAddRoom: boolean;
  setActiveAddRoom: (value: boolean) => void;
};

function ModalAddRoom({
  activeAddRoom,
  setActiveAddRoom,
}: ModalAddRoomProps): JSX.Element {
  const modalRef = useRef(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  const [roomName, setRoomName] = useState<string>("");

  const handleButtonClose = () => {
    setActiveAddRoom(false);
  };

  const handleEscapeKeydown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setActiveAddRoom(false);
      }
    },
    [setActiveAddRoom],
  );

  useEffect(() => {
    if (activeAddRoom && modalRef.current) {
      document.addEventListener("keydown", handleEscapeKeydown);
      lockScroll();
    }

    return () => {
      unlockScroll();
      document.removeEventListener("keydown", handleEscapeKeydown);
    };
  }, [activeAddRoom, handleEscapeKeydown, lockScroll, unlockScroll]);

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(roomName);
    setActiveAddRoom(false);
  };

  return (
    <FocusLock returnFocus disabled={!activeAddRoom}>
      <div
        ref={modalRef}
        className={
          activeAddRoom
            ? `${styles["modal"]} ${styles["modal--active"]}`
            : styles["modal"]
        }
      >
        <div className={styles["modal__wrapper"]}>
          <div
            className={styles["modal__overlay"]}
            onClick={() => handleButtonClose()}
          ></div>
          <div className={styles["modal__content"]}>
            <div className={styles["modal-call"]}>
              <div className={styles["modal__top"]}>
                <p className={styles["modal__top--title"]}>Добавить номер</p>
                <p className={styles["modal__top--text"]}>
                  Для добавления номера укажите необходимые данные
                </p>
              </div>

              <div className={styles["modal__bottom"]}>
                <div className={styles["form"]}>
                  <form
                    action="#"
                    method="POST"
                    id="submit_form_zakazzvonka"
                    onSubmit={handleSubmitForm}
                  >
                    <div className={styles["custom_input"]}>
                      <label>
                        <input
                          type="text"
                          value={roomName}
                          onChange={(evt) => setRoomName(evt.target.value)}
                        />
                        <span className={styles["custom-input__label"]}>
                          Название номера
                        </span>
                      </label>
                    </div>
                    <div className={styles["custom_input"]}>
                      <label>
                        <input type="file" />
                        <span className={styles["custom-input__label"]}>
                          Загрузите фото
                        </span>
                      </label>
                    </div>
                    <button className={styles["btn"]} type="submit">
                      Добавить номер
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <button
              className={styles["modal__close_btn"]}
              onClick={handleButtonClose}
            >
              {/* <Image
                src={`${basePath}/img/layout/close-modal-btn.svg`}
                alt="Закрыть Попап"
                width={14}
                height={14}
              /> */}
            </button>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}

export default ModalAddRoom;

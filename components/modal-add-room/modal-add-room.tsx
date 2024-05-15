import { FormEvent, useCallback, useEffect, useRef } from "react";
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

  return (
    <FocusLock returnFocus disabled={!activeAddRoom}>
      <div
        ref={modalRef}
        className={
          activeAddRoom
            ? `${styles.modal} ${styles["modal--active"]}`
            : styles.modal
        }
      >
        <div className={styles.modal__wrapper}>
          <div
            className={styles.modal__overlay}
            onClick={() => handleButtonClose()}
          ></div>
          <div className={styles.modal__content}>
            <div className="modal-call">
              <div className={styles.modal__top}>
                <p className={styles["modal__top--title"]}>
                  Продать недвижимость
                </p>
                <p className={styles["modal__top--text"]}>
                  Укажите свой номер и наш менеджер перезвонит вам в течение 5
                  минут
                </p>
              </div>
            </div>

            <button
              className={styles.modal__close_btn}
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

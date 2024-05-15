"use client";

import { PropsWithChildren, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ModalAddRoom from "../modal-add-room/modal-add-room";

function ClientLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  const [activeAddRoom, setActiveAddRoom] = useState<boolean>(false);
  return (
    <div>
      <Header setActiveAddRoom={setActiveAddRoom} />
      <main>
        {children}
        {activeAddRoom && (
          <ModalAddRoom
            activeAddRoom={activeAddRoom}
            setActiveAddRoom={setActiveAddRoom}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ClientLayout;

import { PropsWithChildren } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

function ClientLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default ClientLayout;

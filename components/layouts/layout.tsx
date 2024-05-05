import Header from '../modules/header/header';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      {children}
      <div></div>
    </>
  );
}

export default Layout;

import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-zinc-100">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;

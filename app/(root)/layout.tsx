import NavBar from "@/components/shared/navBar/NavBar";
import { ReactChildrenType } from "@/types/types";

const Layout = ({ children }: ReactChildrenType) => {
  return (
    <main className="background-light850_dark100 relative">
      <NavBar />
      <div className="flex">Left side</div>
      <section className="flex min-h-screen flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
      <div className="flex">Right Side</div>
      Toaster
    </main>
  );
};

export default Layout;

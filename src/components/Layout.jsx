import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h3>Header</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;

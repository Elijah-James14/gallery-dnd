import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

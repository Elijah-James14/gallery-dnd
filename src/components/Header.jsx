import { HStack, Heading, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("userId"));
  const handleLogout = () => {
    signOut(auth).then((credentials) => {
      sessionStorage.clear();
      console.log(credentials);
      navigate("/login");
    });
  };
  return (
    <HStack justifyContent="space-between" padding="10px" boxShadow="2xl">
      <Heading>CarGallery</Heading>

      {token && (
        <Text fontWeight="extrabold" cursor={"pointer"} onClick={handleLogout}>
          Log Out
        </Text>
      )}
    </HStack>
  );
};

export default Header;

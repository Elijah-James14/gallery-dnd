import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
  Badge,
  Text,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useRef, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((credentials) => {
        setErrorMessage("");
        if (credentials.user) {
          sessionStorage.setItem(
            "userId",
            JSON.stringify(credentials._tokenResponse.idToken)
          );
        }
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage("Enter a valid email and password");
        email.current.value = "";
        password.current.value = "";
      });
  };
  return (
    <Box
      margin="auto"
      marginTop={"20vh"}
      width={"80vw"}
      boxShadow="lg"
      padding="10px"
      height="50vh"
    >
      <Text
        as="p"
        fontSize="2xl"
        marginBottom="10px"
        textAlign="center"
        fontWeight="bold"
      >
        Login to view gallery
      </Text>
      <VStack width="100%">
        <form onSubmit={handleLogin}>
          <InputGroup>
            <InputLeftAddon children="Email" />
            <Input type="email" ref={email} />
          </InputGroup>
          <InputGroup marginTop="10px">
            <InputLeftAddon children="Password" />
            <Input type="password" ref={password} />
          </InputGroup>
          <Input
            type="submit"
            value="login"
            marginTop="10px"
            cursor={"pointer"}
            _hover={{ background: "red" }}
          />
        </form>
      </VStack>
      {errorMessage && <Text textColor={"red.600"}>{errorMessage}</Text>}
      <Box marginTop="20px">
        <Text>Don't have an account yet?</Text>
        <Link to="/register">
          <Badge backgroundColor="red.800" cursor="pointer">
            Register
          </Badge>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;

import {
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Badge,
  Box,
  Text,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((credentials) => {
        console.log(credentials);
        if (credentials.user) {
          sessionStorage.setItem(
            "userId",
            JSON.stringify(credentials._tokenResponse.idToken)
          );
        }
        navigate("/");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <>
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
          marginBottom="10px"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          Register to view gallery
        </Text>
        <VStack width="100%">
          <form onSubmit={handleRegister}>
            <InputGroup>
              <InputLeftAddon children="Email" />
              <Input type="email" ref={email} autoComplete="off" />
            </InputGroup>

            <InputGroup marginTop="10px">
              <InputLeftAddon children="Password" />
              <Input type="password" ref={password} />
            </InputGroup>
            <Input
              type="submit"
              value="Register"
              marginTop="10px"
              cursor={"pointer"}
              _hover={{ background: "red" }}
            />
          </form>
        </VStack>
        {errorMessage ? <Text>{errorMessage}</Text> : ""}
        <Box marginTop="20px">
          <Text>Already have an account?</Text>

          <Link to="/login">
            <Badge backgroundColor="red.800" cursor="pointer">
              Log In
            </Badge>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Register;

import {
    FormControl,
    FormLabel,
    Input,
    useToast,
    Button,
    Flex,
    VStack,
} from "@chakra-ui/react";

import { useState } from "react";

interface LoginProps {
    handleSubmit: (username: string) => void;
    handleToggle: () => void;
}


export default function Login( {handleSubmit, handleToggle} : LoginProps) {
    const [username, setUsername] = useState('');
    const toast = useToast();
    const [isTouched, setIsTouched] = useState(false);
    const isError = username === '' && isTouched || username.length > 20;

    const handleBlur = () => {
        setIsTouched(true);
    }

    const handleClick = () => {
        if (username === '') {
            toast({
                title: "username is empty",
                description: "please enter a username",
                status: "error",
                duration: 4000,
                isClosable: true,
                position: "top",
            });
        } else {
            handleToggle()
            handleSubmit(username);
        }
    }

    return ( 
        <VStack
        >
            <FormControl>
                <FormLabel
                    justifyContent={"center"}
                    display={"flex"}
                >
                    enter username here
                </FormLabel>
                <Flex
                    justifyContent={"center"}
                    display={"flex"}
                >
                    <Input 
                        placeholder={"username"}
                        textAlign={"center"}
                        display={"flex"}
                        width={"25vh"}
                        isInvalid={isError}
                        onBlur={handleBlur}
                        onChange={(e) => 
                            setUsername(e.target.value)}/>
                </Flex>
                <Flex
                    justifyContent={"center"}
                    display={"flex"}
                    marginTop={"1vh"}
                >
                    <Button
                        onClick={handleClick}
                        bgColor={"#26507A"}
                        _hover={{
                            bgColor: "#4B637A",
                        }}
                        isDisabled={isError}
                    >
                        lets play
                    </Button>
                </Flex>
            </FormControl>
        </VStack>
    );
}
import { Button } from "@chakra-ui/react";
import AnimatedMark from "@components/AnimatedMark";

interface SquareProps {
    value: string;
    onSquareClick: () => void;
}   


export default function Square ({value, onSquareClick} : SquareProps) {


    return (
        <Button 
            w="100px" 
            h="100px" 
            bg="white" 
            border="1px solid black"
            onClick={onSquareClick}
            fontFamily="Ubuntu"
            fontSize={"50px"}
            bgColor="#6483A3"
            _hover={{
                bgColor: "#81AAD4",
            }}
            color="#162F47"
        >
            {value && <AnimatedMark value={value} />}
        </Button>
    )
}
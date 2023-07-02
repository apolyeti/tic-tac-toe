import { Button, AbsoluteCenter } from "@chakra-ui/react";
import { useState } from "react";
import AnimatedMark from "@components/AnimatedMark";

interface GridslotProps {
    index: number;
}   


export default function Gridslot ({index} : GridslotProps) {
    const [mark, setMark] = useState(null);
    const [player, setPlayer] = useState("X");

    const handleClick = () => {
        if (mark === null) {
            setMark(player);
            setPlayer(player === "X" ? "O" : "X")
        }
    }


    return (
        <Button 
            w="100px" 
            h="100px" 
            bg="white" 
            border="1px solid black"
            onClick={handleClick}
            fontFamily="Ubuntu"
            fontSize={"50px"}
            bgColor="#6483A3"
            _hover={{
                bgColor: "#81AAD4",
            }}
            color="#162F47"
        >
            {mark && <AnimatedMark value={mark} />}
        </Button>
    )
}
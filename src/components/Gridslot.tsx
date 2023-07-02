import { Button, AbsoluteCenter } from "@chakra-ui/react";
import { useState } from "react";

interface GridslotProps {
    index: number;
}   


export default function Gridslot ({index} : GridslotProps) {
    const [mark, setMark] = useState(null);

    const handleClick = () => () => {
        setMark("O");
    }



    return (
        <Button 
            w="100px" 
            h="100px" 
            bg="white" 
            border="1px solid black"
            onClick={handleClick()}
            fontFamily="Ubuntu"
            fontSize={"50px"}
        >
            {mark}
        </Button>
    )
}
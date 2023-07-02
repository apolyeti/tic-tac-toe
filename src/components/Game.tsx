import { Grid, GridItem, AbsoluteCenter } from "@chakra-ui/react";
import Square from "@components/Square";
import { useState } from "react";


export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [value, setValue] = useState("X");

    function handleSquareClick(index : number) {
        const nextSquares = squares.slice();
        nextSquares[index] = value;
        setSquares(nextSquares);
        setValue(value === "X" ? "O" : "X");
    }

    return (
        <AbsoluteCenter>
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(3, 1fr)"
                gap={0}
                w="300px"
                h="300px"
                border="1px solid black"
            >
                <GridItem>
                    <Square value={squares[0]} key={0} onSquareClick={() => handleSquareClick(0)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[1]} key={1} onSquareClick={() => handleSquareClick(1)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[2]} key={2} onSquareClick={() => handleSquareClick(2)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[3]} key={3} onSquareClick={() => handleSquareClick(3)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[4]} key={4} onSquareClick={() => handleSquareClick(4)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[5]} key={5} onSquareClick={() => handleSquareClick(5)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[6]} key={6} onSquareClick={() => handleSquareClick(6)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[7]} key={7} onSquareClick={() => handleSquareClick(7)}/>
                </GridItem>
                <GridItem>
                    <Square value={squares[8]} key={8} onSquareClick={() => handleSquareClick(8)}/>
                </GridItem>
            </Grid>
        </AbsoluteCenter>
    )
}
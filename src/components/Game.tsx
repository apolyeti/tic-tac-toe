import { Grid, GridItem, AbsoluteCenter, Button } from "@chakra-ui/react";
import Square from "@components/Square";
import { useState } from "react";


interface GameProps {
    username: string;
}

export default function Game({username} : GameProps) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [value, setValue] = useState("X");
    const winner = calculateWinner(squares);

    function handleSquareClick(index : number) {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[index] = value;
        setSquares(nextSquares);
        setValue(value === "X" ? "O" : "X");
    }
   

    return (
        <AbsoluteCenter>
            <h1>
                {username}
            </h1>
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(3, 1fr)"
                gap={0}
                w="300px"
                h="300px"
                border="1px solid black"
            >
                {squares.map((mark, index) => (
                    <GridItem key={index}>
                        <Square
                            value={mark}
                            key={index}
                            onSquareClick={() => handleSquareClick(index)}
                            isWinning={winner && winner.includes(index)}
                        />
                    </GridItem>
                ))}
            </Grid>
        </AbsoluteCenter>
    )
}

function calculateWinner(squares : Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7 ,8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i]
        }
    }
    return null;
}
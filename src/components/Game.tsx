import { Grid, GridItem, AbsoluteCenter } from "@chakra-ui/react";
import Gridslot from "@components/Gridslot";
import { useState } from "react";


export default function Game() {


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
                    <Gridslot index={0} key={0}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={1} key={1}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={2} key={2}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={3} key={3}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={4} key={4}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={5} key={5}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={6} key={6}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={7} key={7}/>
                </GridItem>
                <GridItem>
                    <Gridslot index={8} key={8}/>
                </GridItem>
            </Grid>
        </AbsoluteCenter>
    )
}
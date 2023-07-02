import type { NextPage } from 'next'
import Login from "@components/Login"
// import Playboard from "@components/Playboard"
import Game from '@components/Game';
import { useState } from 'react';
import { AbsoluteCenter, Slide, SlideFade, useDisclosure } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [user, submitUser] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  if (user !== "") {
    return (
      <AbsoluteCenter>
        <SlideFade in={isOpen} offsetY="20px"
            transition={{
              enter: {
                duration: 0.5,
                delay: 0.5,
              }
            }}
            >
          <Game />
        </SlideFade>
      </AbsoluteCenter>
    )
  }
  return (
    <AbsoluteCenter>
      <SlideFade in={true} offsetY="-20px"
        transition={{
          enter: {
            duration: 0.5,
            delay: 0.5,
          }
        }}
        >
      <Login 
        handleSubmit={submitUser}
        handleToggle={onToggle}
      />
      </SlideFade>
    </AbsoluteCenter>
  )
}

export default Home

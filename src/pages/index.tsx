import type { NextPage } from 'next'
import Login from "@components/Login"
import Playboard from "@components/Playboard"
import { useState } from 'react';
import { AbsoluteCenter, SlideFade } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [user, submitUser] = useState("");
  if (user !== "") {
    return (
      <Playboard />
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
      />
      </SlideFade>
    </AbsoluteCenter>
  )
}

export default Home

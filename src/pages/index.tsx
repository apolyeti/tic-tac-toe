import type { NextPage } from 'next'
import Login from "@components/Login"
// import Playboard from "@components/Playboard"
import Game from '@components/Game';
import { useState } from 'react';
import { AbsoluteCenter, SlideFade } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [user, submitUser] = useState("");
  const [showGame, setShowGame] = useState(false);

  const handleSubmit = (username: string) => {
    if (username !== '') {
      submitUser(username);
      setShowGame(true);
    }
  }

  return (
    <AbsoluteCenter>
        <SlideFade in={!showGame} offsetY="-20px"
          transition={{
            enter: {
              duration: 0.5,
              delay: 0,
            }
          }}
          >
          {!showGame && (
            <Login
              handleSubmit={handleSubmit}
            />
          )}
        </SlideFade>
        <SlideFade in={showGame} offsetY="20px" 
          transition={{ 
            enter: {
              duration: 0.5,
              delay: 0,
            }
          }}>
            {showGame && (
              <Game username={user} />
            )}
        </SlideFade>
    </AbsoluteCenter>
  )
}

export default Home

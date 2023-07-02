import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

interface AnimatedMarkProps {
    value: string;
}

export default function AnimatedMark({value} : AnimatedMarkProps) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0}}
        >
            <Box>
                {value}
            </Box>
        </motion.div>
    )
}
import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

function Logo(props) {
    return (
        <Link href="/">
            <Box {...props}>
                <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="xl" fontWeight="extrabold">
                    Janu8ry
                </Text>
            </Box>
        </Link>
    );
}

export default Logo;

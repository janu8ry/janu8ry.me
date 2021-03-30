import { Text } from '@chakra-ui/react';
import React from 'react';

function NotFound() {
    return (
        <div>
            <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
                404 Not Found
            </Text>
            <Text
                bgGradient="linear(to-r,gray.300,yellow.400,pink.200)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                This page doesn't exist.
            </Text>
        </div>
    );
}

export default NotFound;

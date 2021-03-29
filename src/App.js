import React from 'react';
import { ChakraProvider, extendTheme, Box, Text, VStack, Grid, Stack } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Logo } from './Logo';
import { ButtonLink } from './components';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};
const theme = extendTheme({ colors });

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        <Logo h="40vmin" pointerEvents="none" />
                        <Text
                            bgGradient="linear(to-l, #7928CA,#FF0080)"
                            bgClip="text"
                            fontSize="6xl"
                            fontWeight="extrabold"
                        >
                            Janu8ry
                        </Text>
                        <Stack spacing={4} direction="row" align="center">
                            <ButtonLink text="Github" color="blue" link="https://github.com/janu8ry" icon={FaGithub} />
                            <ButtonLink text="Website" color="red" link="https://somix.studio" icon={CgWebsite} />
                            <ButtonLink text="Email" color="green" link="mailto:janu8ry0108@gmail.com" icon={MdEmail} />
                        </Stack>
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;

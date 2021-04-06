import { Box, Grid, Stack, Text, VStack } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { ButtonLink } from '../components';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import React from 'react';

function Home() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
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
                        <ButtonLink text="Blog" color="red" link="https://velog.io/@janu8ry" icon={CgWebsite} />
                        <ButtonLink text="Email" color="green" link="mailto:janu8ry0108@gmail.com" icon={MdEmail} />
                    </Stack>
                </VStack>
            </Grid>
        </Box>
    );
}

export default Home;

import { Box, Image, Img, Text, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
// import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <Box color="black" fontSize="20px" >
                <Image />
                <Stack isInline spacing="10"  >
                    <Box>
                        <Text>KamiBisa</Text>
                        <Text>Donasikan</Text>
                        <Text>Ajukan Campaign</Text>
                        <Text>Transparansi</Text>
                        <Text>#covid19</Text>
                        <Text>FAQ</Text>
                        <Text>Tentang Kami</Text>
                        <Text>Masuk</Text>
                        <Text>Daftar</Text>
                        <Text>Language</Text>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}

export default Navbar;
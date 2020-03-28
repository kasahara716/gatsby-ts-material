import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import Footer from '../../molecules/Footer';

const Index: React.FC = () => {
    return (
        <>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography>テスト</Typography>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Index;

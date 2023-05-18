import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    return (
        <Container maxWidth="md" className={className}>
            Hello World!
        </Container>
    );
};

export default styled(Component)``;

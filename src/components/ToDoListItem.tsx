import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    return <div className={className}>Hello World!</div>;
};

export default styled(Component)``;

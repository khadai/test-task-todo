import React from 'react';
import styled from "styled-components";

interface Props {
    className?: string;
}

const App = ({className}: Props) => {

    return (
        <div className={className}>
            Hello World!
        </div>
    );
}

export default styled(App)`

`;

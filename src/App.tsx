import React from 'react';
import styled from 'styled-components';
import { ToDoList } from './layouts';

interface Props {
    className?: string;
}

const App = ({ className }: Props) => {
    return (
        <div className={className}>
            <ToDoList />
        </div>
    );
};

export default styled(App)``;

import React from 'react';
import styled from 'styled-components';
import { Container, List } from '@mui/material';
import { AddListItem, ToDoListItem } from '../components';
import { useSelector } from 'react-redux';
import { Task } from '../types/Task';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const list = useSelector((state: any) => state.todo.toDoList);

    return (
        <Container maxWidth="md" className={className}>
            <List>
                {list.map((item: Task) => (
                    <ToDoListItem key={item.id} title={item.title} id={item.id} active={item.active} />
                ))}
            </List>
            <AddListItem />
        </Container>
    );
};

export default styled(Component)``;

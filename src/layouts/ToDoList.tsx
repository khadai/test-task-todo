import React from 'react';
import styled from 'styled-components';
import { Button, Container, List, Stack } from '@mui/material';
import { AddListItem, SearchField, ToDoListItem } from '../components';
import { useSelector } from 'react-redux';
import { Task } from '../types/Task';
import { CheckCircleOutline } from '@mui/icons-material';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const list = useSelector((state: any) => state.todo.toDoList);

    return (
        <Container maxWidth="md" className={className}>
            <Stack direction="row" spacing={1}>
                <SearchField />
                <Button variant="outlined">All</Button>
                <Button variant="outlined" startIcon={<CheckCircleOutline fontSize="small" />}>
                    Done
                </Button>
            </Stack>
            <List>
                {list.map((item: Task) => (
                    <ToDoListItem key={item.id} title={item.title} id={item.id} active={item.active} />
                ))}
            </List>
            <AddListItem />
        </Container>
    );
};

export default styled(Component)`
    margin-top: ${({ theme }) => theme.spacing(4)};
`;

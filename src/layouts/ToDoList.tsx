import React from 'react';
import styled from 'styled-components';
import { Button, Container, List, Stack } from '@mui/material';
import { AddListItem, SearchField, ToDoListItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../types/Task';
import { CheckCircleOutline } from '@mui/icons-material';
import { setFilter } from '../redux/slice';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const list = useSelector((state: any) => state.todo.toDoList);
    const filter = useSelector((state: any) => state.todo.filter);
    const dispatch = useDispatch();

    const filteredList: Task[] = list.filter((item: Task) => !item.active);

    return (
        <Container maxWidth="md" className={className}>
            <Stack direction="row" spacing={1}>
                <SearchField />
                <Button
                    variant={filter === 'all' ? 'contained' : 'outlined'}
                    disableElevation
                    onClick={() => {
                        dispatch(setFilter({ filter: 'all' }));
                    }}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'done' ? 'contained' : 'outlined'}
                    disableElevation
                    onClick={() => {
                        dispatch(setFilter({ filter: 'done' }));
                    }}
                    startIcon={<CheckCircleOutline fontSize="small" />}
                >
                    Done
                </Button>
            </Stack>
            <List>
                {(filter === 'all' ? list : filteredList).map((item: Task) => (
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

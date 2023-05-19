import React from 'react';
import styled from 'styled-components';
import { Container, List, Stack } from '@mui/material';
import { AddTask, FilterButtons, SearchField, ToDoListItem } from '../components';
import { useSelector } from 'react-redux';
import { Task } from '../types/Task';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const list = useSelector((state: any) => state.todo.toDoList);
    const filter = useSelector((state: any) => state.todo.filter);
    const searchValue = useSelector((state: any) => state.todo.searchValue);

    const filteredList: Task[] = [...list.filter((item: Task) => !item.active)];

    const filterList = () => {
        if (filter === 'all' && searchValue === '') {
            return list;
        } else if (filter === 'all' && searchValue !== '') {
            return list.filter((item: Task) => item.title.includes(searchValue));
        } else if (filter === 'done' && searchValue !== '') {
            return filteredList.filter((item: Task) => item.title.includes(searchValue));
        } else {
            return filteredList;
        }
    };

    return (
        <Container maxWidth="md" className={className}>
            <Stack direction="row" spacing={1}>
                <SearchField />
                <FilterButtons />
            </Stack>
            <List>
                {filterList().map((item: Task) => (
                    <ToDoListItem key={item.id} title={item.title} id={item.id} active={item.active} />
                ))}
            </List>
            <AddTask />
        </Container>
    );
};

export default styled(Component)`
    margin-top: ${({ theme }) => theme.spacing(4)};
`;

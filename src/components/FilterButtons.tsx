import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleOutline } from '@mui/icons-material';
import { setFilter } from '../redux/slice';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const filter = useSelector((state: any) => state.todo.filter);
    const dispatch = useDispatch();

    return (
        <>
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
        </>
    );
};

export default styled(Component)``;

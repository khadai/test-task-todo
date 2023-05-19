import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../redux/slice';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const dispatch = useDispatch();

    const { register, control, watch } = useForm<{ searchValue: string }>({
        defaultValues: {
            searchValue: '',
        },
    });

    const searchValue = watch('searchValue');

    useEffect(() => {
        dispatch(setSearchValue({ searchValue }));
    }, [searchValue]);

    return (
        <FormControl fullWidth variant="outlined" className={className}>
            <Controller
                name="searchValue"
                render={({ field }) => (
                    <TextField
                        {...field}
                        size="small"
                        placeholder="Search by text..."
                        fullWidth
                        {...register('searchValue')}
                    />
                )}
                control={control}
            />
        </FormControl>
    );
};

export default styled(Component)`
    width: 100%;
`;

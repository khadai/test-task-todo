import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToDoItem } from '../redux/slice';

interface Props {
    className?: string;
}

const Component = ({ className }: Props) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors: fieldsErrors },
    } = useForm<{ title: string }>({
        defaultValues: {
            title: '',
        },
    });

    const onSubmit = (data: { title: string }) => {
        console.log(data);
        dispatch(addToDoItem({ title: data.title, id: '2', active: true }));
        reset();
    };
    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth variant="outlined">
                <Controller
                    name="title"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="title"
                            size="small"
                            placeholder="Search by text..."
                            // label="Search"
                            fullWidth
                            helperText={fieldsErrors.title ? fieldsErrors.title.message : undefined}
                            error={Boolean(fieldsErrors.title)}
                            {...register('title')}
                        />
                    )}
                    control={control}
                    rules={{
                        required: 'Task name required',
                    }}
                />
            </FormControl>
        </form>
    );
};

export default styled(Component)`
    width: 100%;
`;

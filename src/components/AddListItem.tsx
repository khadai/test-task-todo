import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl, TextField } from '@mui/material';
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
        <div className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth variant="outlined" className="form">
                    <Controller
                        name="title"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="title"
                                size="small"
                                placeholder="Your task"
                                label="Your task"
                                helperText={fieldsErrors.title ? fieldsErrors.title.message : undefined}
                                error={Boolean(fieldsErrors.title)}
                                {...register('title')}
                            />
                        )}
                        control={control}
                        rules={{
                            required: 'Task name required',
                            minLength: {
                                value: 2,
                                message: 'Task name is too short',
                            },
                        }}
                    />

                    <Button variant="outlined" color="primary" type="submit">
                        Add
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default styled(Component)``;

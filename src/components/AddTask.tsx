import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToDoItem } from '../redux/slice';
import { v4 as uuid } from 'uuid';

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
        const newId = uuid().slice(0, 8);
        dispatch(addToDoItem({ title: data.title, id: newId, active: true }));
        reset();
    };
    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth variant="outlined" className="form">
                <Stack direction="row" spacing={1}>
                    <Controller
                        name="title"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="title"
                                size="small"
                                label="Your task"
                                placeholder="Write your checklist text here"
                                fullWidth
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
                                message: 'At least 2 characters',
                            },
                        }}
                    />
                    <Button variant="outlined" color="primary" type="submit" className="add-btn">
                        Add
                    </Button>
                </Stack>
            </FormControl>
        </form>
    );
};

export default styled(Component)`
    .add-btn {
        width: 120px;
        max-height: 40px;
    }
`;

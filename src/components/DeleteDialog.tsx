import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { removeToDoItem } from '../redux/slice';
import { useDispatch } from 'react-redux';

interface Props {
    className?: string;
    open: boolean;
    onClose: any;
    taskId: string;
}

const Component = ({ className, open, onClose, taskId }: Props) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeToDoItem({ id: taskId }));
    };

    return (
        <div className={className}>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Confirm action</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete it?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default styled(Component)``;

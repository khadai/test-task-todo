import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { DeleteForeverOutlined, MoreVertRounded } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Task } from '../types/Task';
import { DeleteDialog } from './index';
import { toggleActiveStatus } from '../redux/slice';

interface Props extends Task {
    className?: string;
}

const Component = ({ className, title, id, active }: Props) => {
    const dispatch = useDispatch();

    // const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleCheckbox = () => {
        // setIsActive(!isActive);
        dispatch(toggleActiveStatus({ id }));
    };

    const handleDialogOpen = () => {
        if (isHovered) {
            setOpenDialog(true);
        }
    };

    return (
        <div className={className}>
            <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleDialogOpen}
                    >
                        {isHovered ? <DeleteForeverOutlined color="error" /> : <MoreVertRounded />}
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} onClick={handleCheckbox} dense>
                    <ListItemIcon>
                        <Checkbox edge="start" checked={!active} disableRipple />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography className={active ? '' : 'done-task'} noWrap>
                                {title}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <DeleteDialog open={openDialog} onClose={handleClose} taskId={id} />
        </div>
    );
};

export default styled(Component)`
    .done-task {
        text-decoration: line-through;
    }
`;

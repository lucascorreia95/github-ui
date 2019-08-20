import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>                   
                    <Typography variant="h6" component="h1" className={classes.title}>
                        GitHub - Material-UI
                    </Typography>
                    <IconButton color="inherit">
                        <HelpOutlineIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
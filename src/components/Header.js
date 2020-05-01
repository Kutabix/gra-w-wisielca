import React from 'react';
import { Typography, makeStyles, useMediaQuery } from '@material-ui/core';

export default () => {  
    const matches = useMediaQuery('(max-width: 767px)');
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontSize: matches ? '36px' : '64px',
            paddingTop: '2px'
        }
    });

    return (
        <div className={useStyles().root}>
            <Typography align="center" color="primary" variant="inherit">Gra w wisielca</Typography>
        </div>
    )
}
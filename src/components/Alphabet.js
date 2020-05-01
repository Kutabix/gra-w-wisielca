import React, { useState } from 'react';
import { Grid, Button, makeStyles, useMediaQuery } from '@material-ui/core';
import { generateAlphabet, indexesOf } from '../functions';

const Alphabet = ({ value: { value, copy, setValue, actualState, setActualState } }) => {
    const [lose, setLose] = useState(false);
    const [winCounter, setWinCounter] = useState(0);
    const [win, setWin] = useState(false);
    const [done, setDone] = useState([]);

    const matchesBtn = useMediaQuery('(max-width: 767px) and (max-height: 738px)');
    const matches = useMediaQuery('(max-width: 767px)');
    const dimensions = matchesBtn ? '30px' : '42px';
    const useStyles = makeStyles({
        btn: {
            maxWidth: dimensions,
            maxHeight: dimensions,
            minHeight: dimensions,
            minWidth: dimensions,
            margin: '4px',
            lineHeight: '15px',
        },
        root: {
            fontSize: matches && !lose ? '32px' : matches && lose ? '12px' : '64px',
            margin: '5px',
            letterSpacing: lose ? '0' : '4px',
        }
    });
    
    const clickHandler = (letter, index, { currentTarget }) => {
        if(!currentTarget.disabled) {
            const indexes = indexesOf(copy, letter);
            const { length } = indexes;
            currentTarget.disabled = true;
            setDone(done.concat(index))
            if(length === 0) {
                setActualState(actualState + 1);
                if(actualState === 5) setLose(true);
                return;
            }    
            setWinCounter(winCounter + length);
            let update = value.split('');
            for(let i=0; i<length; i++) update[indexes[i]] = letter;
            setValue(update.join('')); 
            if(winCounter + length === copy.length) setWin(true);
        }
    }

    const LoseBtn = () => (<Button variant="contained" color="secondary" onClick={() => window.location.reload()}>Przegrana! Słowo to: {copy}. Kliknij, aby zagrać jeszcze raz</Button>);
    const WinBtn = () => (<Button variant="contained" color="primary" onClick={() => window.location.reload()}>Wygrana! Kliknij, aby zagrać jeszcze raz</Button>);
    
    const classes = useStyles();
    return (
        <>
            <Grid item xs={10}>
                <div className={classes.root}>
                    { (!lose && !win) ? value : lose ? <LoseBtn /> : <WinBtn /> }
                </div>
            </Grid>
            <Grid item xs={10} md={9}>
                <div style={{overflow: 'hidden', textAlign: 'center', maxWidth: '105%'}}>
                    { generateAlphabet().map((letter, index) => (
                        <Button className={classes.btn} key={index} variant="contained" color={done.includes(index) ? '' : 'primary'} value={letter} onClick={lose || win ? () => {} : event => clickHandler(letter, index, event)}>
                            {letter} 
                        </Button>
                    )) }
                </div>
            </Grid>
        </>
    );
}

export default Alphabet;
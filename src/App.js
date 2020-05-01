import React, { useState, useEffect } from 'react';
import { Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import Image from './components/Image';
import Alphabet from './components/Alphabet';
import { hash } from './functions';
import { db } from './db';
import './App.css';

import img0 from './images/0.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const App = () => {
  const [value, setValue] = useState(undefined);
  const [copy, setCopy] = useState(undefined);
  const [images] = useState([img0, img1, img2, img3, img4, img5, img6]) 
  const [actualState, setActualState] = useState(0);

  useEffect(() => {
    const index = Math.floor(Math.random()*db.length);
    setValue(hash(db[index]));
    setCopy(db[index]);
  }, []);

  const theme = createMuiTheme({ typography: { fontFamily: 'Montserrat' } });

  return (
    <MuiThemeProvider theme={theme}>
      <div style={{overflowY: 'hidden'}}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item component={Header}>   
              <Header />
            </Grid>
            <Grid item xs={3}>
              <Image image={images[actualState]} />
            </Grid>
              { (value && copy) && <Alphabet value={{value, copy, setValue, actualState, setActualState}} /> }
          </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;


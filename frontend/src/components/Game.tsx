import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Like from './Like';

interface IGame {
  name: string;
  players: string;
  image: string;
  rom: string; 
}

const Game = ({ name, players, image, rom }: IGame) => {
  const [imageLoad, setImageLoad] = useState<boolean>(true);
  
  const imageLoaded = useCallback(() => {
    setImageLoad(false);
  }, [setImageLoad])

  useEffect(() => {
    const img = new Image();
    img.src = image as string;
    img.addEventListener("load", imageLoaded);
    return () => {
      img.removeEventListener("load", imageLoaded);
    };
  }, [image, imageLoaded]);

  return (
    <Grid item lg={4} xs={6} sm={12} md={6}>
      <Card>
        <CardContent>
          <h3>{name}</h3>
          {
            imageLoad
            ? <div className={'image image-container'}><CircularProgress variant="determinate" value={25} /></div>
            : <img 
                className={'image'}
                alt={name} 
                src={image} 
                onLoad={imageLoaded} /> 
          }
          <h3>Players: {players}</h3>
          <Tooltip title={rom}>
            <h3 className='rom'>Rom: {rom}</h3>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Like id={name}/>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default React.memo(Game);

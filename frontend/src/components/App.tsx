import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import useGame from '../hooks/useGame';
import Game from './Game';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';

const App = () => {
  const { loading, error, games, getGames } = useGame();

  const refreshGames = () => {
    getGames();
  }

  return (
    <div className="App">
      <div className="refresh">
        <Tooltip title={'Refresh Games list!'}>
          <span>
            <Button 
              variant="contained" 
              color="primary"
              disabled={loading}
              onClick={refreshGames}
              startIcon={<RefreshIcon />}
              style={{ marginLeft: '15px'}}>
              Refresh List
            </Button>
          </span>
        </Tooltip>
      </div>  

      {
        loading && <CircularProgress variant="determinate" value={25} />
      }

      {
        !loading
        && games.length 
        && <Grid container spacing={2} className={'grid-container'}>
            {
              games.map((data, index) => {
                return (
                  <Game 
                    key={`${data.name} ${index}`} 
                    name={data.name}
                    image={data.image}
                    players={data.players}
                    rom={data.rom} />
                )   
              })
            }
          </Grid>
      }

      {
        error &&
        <h1 className={'error'}> Error occuring while fetching the games data! </h1>
      }
    </div>
  );
}

export default App;

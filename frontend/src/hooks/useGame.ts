import { useState, useEffect } from 'react';
import axios from 'axios';

const URL: string = (process.env.REACT_APP_BACKEND_URL as string);

interface GameStates {
  loading: boolean;
  games: Array<{
    name: string;
    image: string;
    rom: string;
    players: string;
  }>;
  error: boolean;
}

const useGame = () => {
  const [gamesData, setGamesData] = useState<GameStates>({
    loading: false,
    games: [],
    error: false
  });

  const getGames = () => {
    // Setting loading states
    setGamesData((data) => ({
      ...data,
      error: false,
      loading: true
    }));

    // Setting games states
    axios.get(URL)
    .then((response) => {
      setGamesData((data) => ({
        ...data,
        error: false,
        loading: false,
        games: response.data.data || []
      }));
    })
    .catch(() => {
      setGamesData((data) => ({
        ...data,
        loading: false,
        error: true,
      }));
    });
  }

  useEffect(() => {
    getGames();
  }, []);

  return { ...gamesData, getGames };
}

export default useGame;

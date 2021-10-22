import React from 'react';
import axios from 'axios';

const URL: string = (process.env.REACT_APP_BACKEND_URL as string);

describe("API Test ", () => {
  let response: any;

  beforeEach(async () => {
    response = await axios.get(URL);
  });

  it ('It should respond 200', () => {
    expect(response.status).toBe(200);
  });

  it ('It should respond OK statusText', () => {
    console.log('respo', response.data.data)
    expect(response.statusText).toEqual('OK');
  });

  it ('Response data should not be empty', () => {
    expect(response.data.data).not.toEqual([]);
  });

  it ('Game data should contain proper keys', () => {
    const game = response.data.data[0];
    const gameKeys = Object.keys(game);
    expect(gameKeys).toEqual(['name', 'image', 'rom', 'players']);
  });
});

//Exmaple!!

import { ODDS } from './actionsType';

const getOdds = (query) => async (dispatch) => {
    console.log('In getLiveGames')
    console.log(query)

    //   fetch('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //       "x-rapidapi-key": "b78d8edbacmsh0d14864fbf5ad4ap1427d6jsn0b94b1b8d032"
    //     }
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('Success:', data);

    //   const oddsObj = {
    //       homeODDS = data.bets.values[0].odd,
    //       drawODDS = data.bets.values[1].odd,
    //       awayODDS = data.bets.values[2].odd
    //   }
    const oddsObj = {
        homeODDS: 2.20,
        drawODDS: 3.70,
        awayODDS: 2.60
    }
    const matchTeams = {
        home: 'Paris Saint Germain',
        away: 'Strasbourg'
    }
    const advice = 'Winner : Paris Saint Germain'
    const predictedScore = {
        home: 4,
        away: 2
    }
    const winningPercent = {
        home: '50%',
        draw: '50%',
        away: '0%'
    }
    dispatch({
        type: ODDS,
        odds: oddsObj,
        match: matchTeams,
        advice: advice,
        predictedScore: predictedScore,
        winningPercent: winningPercent
    });
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
}

export default getOdds
import { useState } from "react";

import { cardtype } from "@cardgame/types";
import * as NPCNames from "./../../../../src/assets/npcnames.json";
import * as allCards from "./../../../../src/assets/deck.json";

import { Button } from "@cardgame/button";
import { gameSettings } from "@cardgame/types";

export function GameScreen(props: { isRendered: React.Dispatch<React.SetStateAction<boolean>>, gameSettings: gameSettings }) {

    const { isRendered, gameSettings } = props;

    const [ deck, setDeck ] = useState(allCards);
    const [ gamedata, setGameData ] = useState({ ...gameSettings });
    const [ playerCards, setPlayerCards ] = useState(Array<cardtype>);
    const [ playerChips, setPlayerChips ] = useState([100, 100, 100, 100]);
    const [ playerNames, setPlayerNames ] = useState([""]);
    const [ pot, setPot ] = useState(0);
    const [ roundNumber, setRoundNumber ] = useState(1);
    const [ selectedCards, setSelectedCards ] = useState([-1]);

    const timerDelay = 1000;

    function addToPot(value: number, playerId: number) {

        let newArr = [ ...playerChips ];
        newArr[playerId] -= value;
        setPlayerChips({ ...newArr });
        setPot(pot + value);
    }

    function dealCards(toAdd: number) {

        const tempDeck = deck;

        for(let i = 0; i >= toAdd; i++) {

            const randomCard = tempDeck[(tempDeck.length - 1) * Math.random()];
        }

        setPlayerCards({ ...playerCards });
    }

    function finishGame() {


    }

    function gameLoop(numOfRounds: number) {

        for(let i = 0; i < numOfRounds; i++) {

            roundStart(gamedata.playerAttitudes.length);
        }


    }

    function roundEnd() {


    }
    
    function roundStart(numOfPlayers: number) {

        setNPCNames(numOfPlayers);
        
        for(let i = 0; i < numOfPlayers; i++) {

        setTimeout(() => {

            addToPot(10, i);
        }, timerDelay * 1,5);
        }
    }

    function setNPCNames(numOfPlayers: number) {//TODO: slumpa fram namn

        for(let i = 0; i >= numOfPlayers; i++) {

            const keys = Object.keys(NPCNames);
            const randomGender = keys[keys.length * Math.random() << 0];
            setPlayerNames([ ...playerNames, playerNames[i] = "Steve" ]);
            console.log(randomGender)
        }
    }

    return(
        <div className="game_screen">
            <button onClick={ () => dealCards(1) }>nya kort test</button>
            <section className="round_info">
                <h3>Runda { roundNumber }</h3>
                <h3>Pott: { pot }</h3>
            </section>
            <section className="player_1">
                <h3>{ gamedata.playerName }</h3>
                <h4>Chips: { playerChips[0] }</h4>
                {/* <Hand cards={ playerCards } selectedCards={ selectedCards } setSelectedCards={ setSelectedCards } /> */}
                <Button text="Spara hand" onClick={ () => "" }/>
                <Button text="Kasta valda" onClick={ () => "" }/>
            </section>
                { 
                    gamedata.playerAttitudes.map((player, i) => {
                        return(
                            <section key={ i } className={ "player_" + (player + 1) }>
                                <h3>{ playerNames[i] }</h3>
                                <h4>{ playerChips[i + 1] }</h4>
                            </section>
                        );
                    })
                }
        </div>
    )
}

/*
knapp syns, klicka för att starta
ett antal startchip läggs i potten
fem kort delas ut till spelarna
en slumpad spelare får börja
under spelarens tur, rendera x antal knappar med alternativ
spelaren kan klicka på körten för att markera dem
kan sen välja att kasta de korten och få nya
i nästa vända, välj om de vill satsa mer chips för att vara med, eller lägga sig
alla kort spelas ut, potten går till vinnaren

saker som renderas på skärmen
1. korten i handen
2. potten
3. antal chip varje spelare har
4. rundans nummer
5. instruktioner för knappars funktioner, t.ex pausmeny
*/
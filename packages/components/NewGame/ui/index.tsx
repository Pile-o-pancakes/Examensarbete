import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@cardgame/button";
// import { gameSettings } from "@cardgame/types";

import "./index.scss";

export function NewGame(props: { isRendered: React.Dispatch<React.SetStateAction<boolean>> }) {

    const nav = useNavigate();

    const [settings, setSettings] = useState({
        numOfRounds: 1,
        players: [
            {
                id: 1,
                attitude: "1"
            }
        ]
    });

    function handleClickAdd() {//TODO: Snygga till

        if(settings.players.length < 3) {

            const addPlayer = [...settings.players, { id: settings.players.length + 1, attitude: "1" }];
            setSettings({ ...settings, players: addPlayer });
        }
    }

    function handleClickRemove() {

        if(settings.players.length > 1) {

            settings.players.splice(settings.players.length - 1);
            setSettings({ ...settings });
        }
    }

    function handleOnChange(value:string) {

        const rounds = parseInt(value);
        setSettings({ ...settings, numOfRounds: rounds});
    }

    return(
        <div className="popup">
            <section className="popup_column">
                <h2>Nytt spel</h2>
                <Button text="Tillbaka" onClick={ () => props.isRendered(false) }/>

                <p>Antal rundor</p>
                <select onChange={ (e) => handleOnChange(e.target.value) }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <p>Antal datorspelare, upp till 3</p>
                <Button text="+" onClick={ handleClickAdd } />
                <Button text="-" onClick={ handleClickRemove } />
                <Button text="Deal!" onClick={ () => { nav(""); console.log(settings) } }/>
            </section>

            <section className="popup_column">
                <p>Datorspelarnas spelstil</p>
                { settings.players.map(function (currentPlayer, i) {
                    return(
                        <section key={ i }>
                            <p>Spelare { currentPlayer.id }</p>
                            <select>
                                <option value="1">Normal</option>
                                <option value="2">Försiktig</option>
                                <option value="3">Aggressiv</option>
                            </select>
                        </section>
                    )
                }) }
            </section>
        </div>
    )
}
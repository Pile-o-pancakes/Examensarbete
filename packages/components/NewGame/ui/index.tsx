import { useState } from "react";

import { Button } from "@cardgame/button";
import { gameSettings } from "@cardgame/types";

import "./index.scss";

export function NewGame(props: { isRendered: React.Dispatch<React.SetStateAction<boolean>>,
        setGameSettings: React.Dispatch<React.SetStateAction<gameSettings>>,
        setRenderGameScreen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { isRendered, setGameSettings, setRenderGameScreen } = props;

    const [settings, setSettings] = useState({
        playerName: "",
        numOfRounds: 1,
        playerAttitudes: [1]
    });

    function handleClickAdd() {

        if(settings.playerAttitudes.length < 3) {

            const addPlayer = settings.playerAttitudes.length;
            const newSettings = [...settings.playerAttitudes, addPlayer];
            setSettings({ ...settings, playerAttitudes: newSettings });
        }
    }

    function handleClickRemove() {

        if(settings.playerAttitudes.length > 1) {

            let removePlayer = settings.playerAttitudes;
            removePlayer.splice(removePlayer.length - 1);
            setSettings({ ...settings, playerAttitudes: removePlayer });
        }
    }

    function handleClick() {

        isRendered(false);
        setGameSettings(settings);
        setRenderGameScreen(true);
    }

    function handleOnChangeName(value:string) {

        setSettings({ ...settings, playerName: value })
    }

    function handleOnChangeRounds(value:string) {

        const rounds = parseInt(value);
        setSettings({ ...settings, numOfRounds: rounds});
    }

    return(
        <div className="popup">
            <section className="popup_column">
                <h2>Nytt spel</h2>
                <Button text="Tillbaka" onClick={ () => isRendered(false) }/>

                <p>Ditt spelarnamn</p>
                <input type="text" onChange={ (e) => handleOnChangeName(e.target.value) }/>

                <p>Antal rundor</p>
                <select name="rounds" onChange={ (e) => handleOnChangeRounds(e.target.value) }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <p>Antal datorspelare, 1 - 3</p>
                <Button text="+" onClick={ handleClickAdd } />
                <Button text="-" onClick={ handleClickRemove } />
                <Button text="Deal!" onClick={ () => handleClick() }/>
            </section>

            <section className="popup_column">
                <p>Datorspelarnas spelstil</p>
                { settings.playerAttitudes.map(function (currentPlayer, i) {
                    if(currentPlayer != 0) {

                        return(
                            <section key={ i }>
                                <p>Spelare { i + 1 }</p>
                                <select>
                                    <option value="1">Normal</option>
                                    <option value="2">Försiktig</option>
                                    <option value="3">Aggressiv</option>
                                </select>
                            </section>
                        )
                    }
                })}
            </section>
        </div>
    )
}
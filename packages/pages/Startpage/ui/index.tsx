import { useState } from "react";

import { Button } from "@cardgame/button";
import { NewGame } from "@cardgame/newgame";
import { GameScreen } from "@cardgame/gamescreen";

import "./index.scss";

export function Startpage() {

    const [ renderNewGamePopup, setRenderNewGamePopup ] = useState(false);
    const [ renderGameScreen, setRenderGameScreen ] = useState(false);
    const [ currentGame, setCurrentGame ] = useState({
        playerName: "placeholder",
        numOfRounds: 1,
        playerAttitudes: [1]
    });

    return(
        <section className="mainmenu">
            <h1 className="menuText">Kortspel: The game!</h1>
            <Button text="Starta nytt spel" onClick={ () => setRenderNewGamePopup(true) }/>
            { renderNewGamePopup ? <NewGame isRendered={ setRenderNewGamePopup } setGameSettings={ setCurrentGame }/> : ""}
            { renderGameScreen ? <GameScreen isRendered={ setRenderGameScreen } settings={ currentGame } /> : ""}
        </section>
    )
}
import { useState } from "react";

import { NewGame } from "@cardgame/newgame";
import { Button } from "@cardgame/button";

import "./index.scss";

export function Startpage() {

    const [ newGamePopup, setNewGamePopup ] = useState(false);

    return(
        <>
            <section className="mainmenu">
                <h1 className="menuText">Kortspel: The game!</h1>
                <Button text="Starta nytt spel" class="button" onClick={ () => setNewGamePopup(true) }/>
            </section>
            { newGamePopup ? <NewGame isRendered={ setNewGamePopup }/> : ""}
        </>
    )
}
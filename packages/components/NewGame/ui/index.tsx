import { useNavigate } from "react-router-dom";

import { Button } from "@cardgame/button";

import "./index.scss";

export function NewGame(props: { isRendered: React.Dispatch<React.SetStateAction<boolean>> }) {

    const nav = useNavigate();

    return(
        <div className="popup">
            <h2>Nytt spel</h2>
            <Button text="Tillbaka" class="button" onClick={ () => props.isRendered(false) }/>

            <p>Antal rundor</p>
            <input name="rounds"/>

            <p>Antal datorspelare</p>
            <input name="players"/>

            <p>Datorspelarnas spelstil</p>
            <input name="attitude"/>

            <Button text="Deal!" class="button" onClick={ () => nav("") }/>
        </div>
    )
}
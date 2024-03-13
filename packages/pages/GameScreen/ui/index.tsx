import { gameSettings } from "@cardgame/types";

export function GameScreen(props: { isRendered: React.Dispatch<React.SetStateAction<boolean>>, gameSettings: gameSettings }) {

    const { playerName, numOfRounds, playerAttitudes } = props.gameSettings;

    return(
        <div className="game_screen">
            <p>Game screen</p>
            <p>{playerName}</p>
            <p>{numOfRounds}</p>
            <p>{playerAttitudes}</p>
        </div>
    )
}
import "./index.scss";

import { cardtype } from "@cardgame/types";

import { Handcard } from "@cardgame/handcard";

export function Hand(props: { cards: Array<cardtype>, selectedCards: number[], setSelectedCards: React.Dispatch<React.SetStateAction<number[]>> }) {

    const { cards, selectedCards, setSelectedCards } = props;

    function handleClick(index: number) {

        setSelectedCards([ ...selectedCards, index]);
    }

    return(
        <div className="card_container">
            { cards.map((card, i) => {
                return(
                    <Handcard onClick={ () => handleClick(i) } key={ i } card={ card }/>
                )
            })}
        </div>
    )
}
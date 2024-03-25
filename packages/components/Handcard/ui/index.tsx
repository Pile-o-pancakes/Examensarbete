import { motion } from "framer-motion";

import { cardtype } from "@cardgame/types";

import "./index.scss";

export function Handcard(props: { card: cardtype, onClick: React.MouseEventHandler<HTMLButtonElement> }) {

    const { card } = props;

    // const cardimage = `./../../../../src/assets/cards/${ card.suit }/${ card.value }`;//TODO: bildlänk

    return(
        <div>
            <motion.div className="handcard"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [0.9, 1.1] }}
            drag={ true }
            dragConstraints={{ top: 50, bottom: 0, left: 10, right: 10 }}
            />
        </div>
    );
}
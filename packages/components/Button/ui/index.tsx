import "./index.scss";

type buttonProps = {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    name?: string,
    type?: "button" | "submit" | "reset"
}

export function Button({
    text = "placeholder",
    onClick,
    name,
    type = "button"
}: buttonProps) {

    return(
        <>
            <button className="button" type={ type } onClick={ onClick } name={ name }>{ text }</button>
        </>
    )
}
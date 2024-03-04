import "./index.scss";

type buttonProps = {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    class: string,
    name?: string
}

export function Button({
    text = "placeholder",
    onClick,
    name
}: buttonProps) {

    return(
        <>
            <button className="button" onClick={ onClick } name={ name }>{ text }</button>
        </>
    )
}
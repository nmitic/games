import "./Button.css"
type buttonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string,
    innerRef?: React.RefObject<HTMLButtonElement>
}

const Button:React.FC<buttonProps> = ({children, onClick = () => {}, className = "", innerRef}) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            ref={innerRef}
        >
            {children}
        </button>
    )
}

export default Button
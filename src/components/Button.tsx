interface ButtonProps {
    children: string,
    color?: 'primary' | 'secondary' | 'warning',// this is for not typing correctly the name of the color
    onClick: () => void
}

const Button = ({ children, onClick, color = 'primary' }: ButtonProps) => {
    return (
        <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Button
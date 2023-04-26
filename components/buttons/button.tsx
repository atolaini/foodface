interface ButtonProps {
    children: string;
    type: 'submit' | 'reset' | 'button' | undefined ;
    onClick: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({children,type, onClick}) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}

export default Button;
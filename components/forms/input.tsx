interface InputProps {
    htmlFor: string;
    labelTxt: string;
    type: string;
    inputId: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Input: React.FC<InputProps> = ({htmlFor, labelTxt, type, inputId, onClick}) => {
    

    return (
        <div>
            <label htmlFor={htmlFor}>{labelTxt}</label>
            <input type={type} id={inputId}/>
            <button onClick={onClick}>Remove</button>
        </div>
    )
}

export default Input;
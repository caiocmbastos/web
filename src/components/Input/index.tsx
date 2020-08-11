import React, { InputHTMLAttributes } from 'react'
import './styles.css'

// O InputHTMLAttributes nos permite ter como propriedades todos os atributos que um input pode ter, assim
// não limitamos o usuário aos atributos que apenas nós queremos.
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    label: string
}

// Estamos usando o rest para atribuir todos os atributos como propriedade na variável rest, menos o name e o label
// que já estávamos utilizando
const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input
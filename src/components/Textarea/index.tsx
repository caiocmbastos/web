import React, { TextareaHTMLAttributes } from 'react'
import './styles.css'

// O TextareaHTMLAttributes nos permite ter como propriedades todos os atributos que um Textarea pode ter, assim
// não limitamos o usuário aos atributos que apenas nós queremos.
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string
    label: string
}

// Estamos usando o rest para atribuir todos os atributos como propriedade na variável rest, menos o name e o label
// que já estávamos utilizando
const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea
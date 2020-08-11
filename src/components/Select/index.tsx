import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

// O InputHTMLAttributes nos permite ter como propriedades todos os atributos que um input pode ter, assim
// não limitamos o usuário aos atributos que apenas nós queremos.
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string
    label: string
    options: Array<{
        value: string
        label: string
    }>
}

// Estamos usando o rest para atribuir todos os atributos como propriedade na variável rest, menos o name e o label
// que já estávamos utilizando
const Select: React.FC<SelectProps> = ({name, label, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select
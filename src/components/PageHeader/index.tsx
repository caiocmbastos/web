import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import './styles.css'

// A interface serve para definir o formato das tipagens de um objeto
interface PageHeaderProps {
    // Se o title não fosse obrigatório, deveria colocar: "title?"
    title: string
    description?: string
}
// Para usar as props, devemos usar a função em forma de const e passamos um parâmetro
// Usando o React.FunctionComponent, estamos dizendo que é um componente escrito no formato de função e
// abrimos uma <> com as propriedades dentro.
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Back"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {/* Fazendo condição para mostrar a description. Se não tivermos um else, podemos utilizar os &&, invés de ? : */}
                { props.description && <p>{props.description}</p> }
            {/* O props.children é uma propriedade automática do React que mostra o conteúdo que foi passado dentro
            do componente.
            */}
            {props.children}
        </div>
    </header>
    )
}

export default PageHeader
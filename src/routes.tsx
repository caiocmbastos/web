import React from 'react'
// Aparecia um erro ao importar do react-router-dom porque o typescript não reconhecia a biblioteca nos módulos. Para resolver isso, foi feito o comando
// yarn add @types/react-router-dom no projeto
import { BrowserRouter, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

// O Que são props(propriedades)? 
// São os atributos que passamos a uma tag. Por exemplo, um <button type="submit"></button>. Aqui, a propriedade é o type="submit"
function Routes(){
    return(
        <BrowserRouter>
        {/* a propriedade exact diz que tem o path tem que ser o exato que está digitadp. Se não colocássemos o exact na rota da landing, onde o path
            é só a /, ao tentar acessar as outras rotas, iria mostrar a landing e a outra página ao mesmo tempo.
        */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes
Modelos de Back-end:

1 - Full MVC: Modelo no qual o front-end fazia uma requisição, através do protocolo HTTP, para o back-end e o mesmo retornava o html completo de volta para o front.
Os problemas disso? Como o HTML inteiro era retornado, as respostas ficavam muito lentas, atrapalhando a experiência do usuário. E o outro é que a única coisa que
consegue ler e "traduzir" o HTML é o browser. Então, se tivermos um aplicativo criado em Kotlin, Swift, React Native, etc. ocorreriam problemas nesse retorno.

2 - API REST: O back-end vai retornar apenas os dados da requisição do front-end, no formato JSON. O JSON é uma linguagem que TODAS as tecnologias conseguem entender. E como não
retornamos mais o HTML, o front-end vai pegar os dados e montar a interface para visualização.

Por que Node.js?

- Fica melhor de trabalhar, pois usamos o mesmo Javascript que usamos no front-end(React e React Native). Além disso, podemos usar o conceito de assincronia. Assincronia nada mais
é do que, enquanto temos uma função sendo realizada, as outras podem começar sem esperar a primeira terminar (non-blocking IO).

Para fazer o front-end buscar os dados da API (do back-end):

- Vamos instalar a biblioteca chamad Axios. Ele nos facilitar para consumir as API's externas.
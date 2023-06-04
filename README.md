# Exemplo de aplicação da arquitetura flux

## Essa arquitetura tem os seguintes elementos

>  View
>> Action
>>> Dispatcher
>>>> Store

Antes dá explicação é nescessário apresentar conseitos que talvez não sejam ainda familiares a vocês.

# Padrão Observer

O desing pattern Observer é ultilizado quando um ou mais objetos na sua aplicação precisam estar cientes da mudança de uma mesma variavel ou objeto.

Para implementarmos esse padrão, teremos duas interfaces; **Subject** e **Observer**. O objeto que contém a a variável ou estado que precisa ser obsevado por outras partes da aplicação implementa a interface Subject. Essa inteface solicita a implemtação de três metodos. **Attach,Detach e Notify**. Os objetos ou partes da sua aplicação que precisam saber das mudanças no subject implementam a interface observer e são passados para o subject com o metodo **Attach** que via polimorfismo guarda a implementação da inteface observer feita pelo objeto que precisa estar ciente da mudaças. A inteface observer exige apenas a impelentação de apenas um metodo, **Update**. Em outras palavras o subject tera um array de callbacks **Update** e vai chamar todos eles assim que os dados observados mudarem passando como argumento em **Update** o conjunto de dados modificado. Assim todos os objetos registrados atualizam seus dados. Observe o diagrama:

![alt text](https://github.com/igor439/flux-architecture-example/blob/main/images/structureObserver.jpg)

(*Desculpem a qualidade não tive tempo de fazer o diagrama digitalemente por isso tirei foto do meu livro*)

Caso queiram saber mais, sugiro que pesquisem a parte ou nós podemos marcar um dia para implementarmos juntos de maneira mais didática. O ponto chave aqui é entender que o design pattern Observe nos dá mais que uma maneira de atualizar dados, mas também uma maneira de pensar a comunicação dos elementos da nosssa aplicação. Apeguem-se a isso!!

# Sem mais delongas, Flux

Em uma aplicação com GUI, é comum pensarmos o software em três camadas principais, a UI, lógicas internas e requisições e a resposta a essas requisições(Também conhecido como Back-end). O fluxo de dados entre essas três camadas deve ser a mais fuída possível. A flux assim como tantas outras arquiteturas tratam de organizar esse fluxo. Agora vamos ver como cada componente dito no começo se encaixam e se comunicam. Oberve o diagrama.

![images\fluxgraph.PNG](https://github.com/igor439/flux-architecture-example/blob/main/images/fluxgraph.PNG))

> View

A View, como o próprio nome sujere é a parte gráfica da nossa aplicação. No caso do React.js os componetes. Cada ação na UI ou seja interação dos usuários com os componentes pode ou não gerar uma ação( ou Action) por parte do sisitema. E nossos casos que precisam de uma ação precisar ser feita o componente dispara uma **Action**

>Action

Uma action é um objeto que ira conter dois atributos, *action* e *data*. *action* é o atributo que comtém a "descrição" da ação uma string especial para cada tipo de ação que pode ser performada. E *data* guarda os dados que podem ser nescessarios a completude do que designa a action. A action é passada para o **Dispatcher**.

>Dispatcher

O Dispatcher é a central de distruição da action para o sistema. Os dados que seram expostos na View ficam em algum lugar da aplicação certo? Uma vez que o único papel da view é expor dados nada mais que isso. Esses dados ficam na **Store**. Agora é a hora de exercitarmos os conhecimentos no padrão Observer! O Dispacher guarda os callbacks das **Store** que precisam receber ordens para atualizar ou solicitar dados (via action!) o Dispatcher recebe a action e passa a todas as store que estão registradas nele para atendela da maneira que cada uma foi programada para faze-lo.

>Store

A store guarda os dados da aplicação e lida com eles de acordo como precisa performar sobre a action ou os dados da action. Feito isso, a store notifica, assim como o Dispatcher, a toadas as views que estão registrada nela. Elas, as views por sua vez atualiza sua GI e o ciclo se repete.

Temos muitas vantagens em construirmos o sisitema usando flux, uma delas é que podemos ter multiplas views sendo atualizadas e muitiplas açoes acontecendo com apenas uma única store e um único dispatcher. Economizando tempo de expação de código. O resto é dever de casa procurar! Divirtam-se analisando o código.

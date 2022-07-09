export class TodasNegociacoes {
    constructor() {
        //O tipo é array, e é bom dizer o tipo dele. Para que só aceite um tipo de dado.
        //Essa é a ferramente 'generics'
        //Por padrão, o tipo é 'any', mas com a config 'noimplicityany' ativada, tenho que fazer isso
        //Esse array agora só aceitará itens que correspondam a classe "Negociação"
        this.Todasnegociacoes = [];
        //Métodos antigos
        //     // return this.Todasnegociacoes
        //     //Cada item da lista, vai entrar em uma nova lista
        //     //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        //     //https://www.youtube.com/watch?v=Uft_UkXtqT0&ab_channel=DevPleno
        //     // return [...this.Todasnegociacoes]
    }
    adicionaTrade(trade) {
        this.Todasnegociacoes.push(trade);
    }
    listagem() {
        //ReadonlyArray proibe qualquer modificação, inclusive chamar o '.pop'
        return this.Todasnegociacoes;
    }
}
// const Todasnegociacoes = new TodasNegociacoes();
// Todasnegociacoes.adiciona(new Negociacao())
// Todasnegociacoes.listagem().forEach(n => {
//     n.
// })

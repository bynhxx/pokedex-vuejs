/* 

-> importar o axios apenas onde será utilizado. Neste caso em App.vue

-> para fazer a requisição dos dados, deve-se fazer dentro de algum método. 

-> como no caso deste projeto os dados são necessários logo quando ele é aberto ple
usuário, fazer a requisição dentro de um método específico chamado created, que é chamado 
sempre que a página (ou componente) é recarregada. 

-> para fazer requisições com axios: 
geralmente se usa get para pegar dados. 
axios.nomeDoMétodo.('url da api + requisiçaõ').then(res => {
    /...
})

then=> o que faz com a resposta da requisição 
. res recebe a resposta com todos os dados retornados com a requisição. agora é só trabalhar
como se fosse um objeto. 

-> armazenar dados pretendidos em uma variável para ser entao trabalhada no projeto. 

-> criar componente para cada pokemon. Nele devem ter as props que serao exibidas

-> no componente pokemon, criar filtro para exibir nome com primeira letra maiúscula

-> para exibir mais informações sobre cada pokemon, dentro do componente, fazer uma nova requisição para a url que 
com ele é retornada. Como cada pokemon tem sua propria url, basta chama-la com axios e seus dados serão retornados. 
-> para isso, lembrar de importar o axios dentro do componente
-> criar o método created, onde ficará a requisição ]
-> criar no campo data() um objeto para armazenar os dados recebidos pela requisição
-> newste caso, o objeto 'pokemon' foi criado vazio e dentro do método da requisição foram adicionados 
os seus dados. 


-> Fazendo a busca: 
opção 1 - com v-model: 
- adicionar diretiva v-model ao input
- criar uma computed property, que filtrará o array de pokemons e retornará o(s) pokemons que 
correspondam ao que está no campo de busca
- retornar no template na na diretiva v-for o array com o resultado da busca. 

opçao 2 - com botao de busca: 
-criar em data() uma variavel para array de pokemons filtrados 
-este array receberá todos os pokemons quando a pagina for carregada, 
porem será atualizado sempre que a busca for solicitada
-criar método para preencher este array (buscar)
- resetar a lista de pokemons filtrados sempre que o evento ocorrer 





*/
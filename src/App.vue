<template>
  <div id="app">
    <div class="header"> 
      <img src="./assets/pode.png" alt="">
    </div>
    <input type="text" placeholder="buscar pokemon pelo nome" name="" id="" v-model="busca">
    <button @click="buscar">Buscar</button>
    <div v-for="(pokemon, index) in filteredPokemons" :key="pokemon.url"> 
      <Pokemon :name="pokemon.name" :num="index + 1" :url="pokemon.url" /> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Pokemon from './components/pokemon'



export default {
  name: 'App',
  components: {
    Pokemon
  },
  data(){
    return{
      //array onde serão armazenados os pokemons
      pokemons: [],
      busca: '',
      filteredPokemons: []
    }
  },
  created: function(){
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => {
        this.pokemons = res.data.results
        this.filteredPokemons = res.data.results
        console.log("Lista de pokemons recebida")
        console.log(this.pokemons)
      })
    },
    methods: {
      buscar: function(){
          this.filteredPokemons = this.pokemons
        if(this.busca == '' || this.busca == ' '){
          this.filteredPokemons = this.pokemons
        } else {
          this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.busca)
        }
      }
    },
  computed: {
    /* resultadoBusca: function(){
      if(this.busca == '' || this.busca == ' '){
        return this.pokemons
      } else {
        return this.pokemons.filter(pokemon => pokemon.name == this.busca)
      }
    } */
}
}

</script>

<style>
#app {
  background-color: #283746;
  display: flex;
  flex-direction: column;
  justify-content: center;
} 

.header{
  background-color: #e9f3ff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.212);
  margin-bottom: 30px;
}

.header{
  display: flex;
  justify-content: center;
  padding: 20px 0; 
}
.header img{ 
  width: 180px;
}

input {
  margin-bottom: 30px;
  border: none; 
  border-radius: 5px;
  padding: 10px 20px; 
  background-color: #e9f3ff ;
  width: 40%;
  align-self: center;
}

button{
  margin-top: 30px;
  border: none; 
  border-radius: 5px;
  padding: 10px 20px; 
  background-color: #383f50 ;
  width: 40%;
  align-self: center;
  color: white; 
  transition: all .2s ;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.384);

}

button:hover{ 
  cursor: pointer;
  background-color: #4b556e ;
}

</style>

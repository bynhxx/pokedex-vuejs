<template>
    <div class="poke-card">
        <h2> <strong>{{num}} {{name | upper}} </strong></h2>
        <p>{{pokemon.type}}</p>
        <img :src="currentImg">
        <button @click="mudarSprites">Change Sprite</button>
    </div>     
</template>
<script>
import axios from 'axios'    

export default {
    //fazendo requisição para a prórpia url retornada 
    //com cada pokemon: 
    data(){
        return{
            isFront: true, 
            currentImg: '',
            pokemon: {
                type: '', 
                front: '', 
                back: ''
            }
        }
    },
    created: function() {
        axios.get(this.url).then(res => {
            this.pokemon.type = res.data.types[0].type.name
            this.pokemon.front = res.data.sprites.front_default
            this.pokemon.back = res.data.sprites.back_default
            this.currentImg = this.pokemon.front
        })
    },
    props: {
        num: Number,
        name: String, 
        url: String
    }, 
    filters:{
        upper: function(value){
            let newName = value[0].toUpperCase() + value.slice(1)
            return newName
        }
    }, 
    methods: {
        mudarSprites: function(){
            if(this.isFront){
                this.isFront = !this.isFront
                this.currentImg = this.pokemon.back
            } else {
                this.isFront = true
                this.currentImg = this.pokemon.front
            }
        }
    }
}
</script>

<style scoped>
    .poke-card{
        background-color: #34505c; 
        max-width: 450px;
        margin: 20px auto;
        padding: 20px 15px; 
        color: whitesmoke;
        border-radius: 10px;  
        box-shadow: 3px 3px 10px #0f0f0f54;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .poke-card strong {
        color: whitesmoke;
    }

    button{
        padding: 8px 20px; 
        border-radius: 5px;
        border: none; 
        box-shadow: 2px 2px 10px #13131365;
        transition: all .3s;
    }

    img{
        transition: all .3s;
    }

    button:hover{
        cursor: pointer; 
        background-color: #13171d; 
        color: white;
        transform: scale(1.1);
    }

</style>
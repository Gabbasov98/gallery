<template>
    <div>
        <ul class="dashboard-info">
            <li class="dashboard-info__item currency" v-for="value in currencyUSD" :key="value.currencyUSD">
                <span>{{value.name}}</span>
            </li>
            <li class="dashboard-info__item currency" v-for="value in currencyEUR" :key="value.currencyEUR">
                <span>{{value.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
    name: 'Currency',
    data(){
        return{
            currencyUSD:[],
            currencyEUR:[],
            errors:[],
        }
    },
    created(){
        axios.get('https://financialmodelingprep.com/api/v3/quote/USDRUB?apikey=6c2a639deeb85ca31e40915e5ebd107e')
            .then(responce =>{
                this.currencyUSD = responce.data
                console.log(responce)
            })
            .catch(e =>{
                this.errors.push(e)
            }),
        axios.get('https://financialmodelingprep.com/api/v3/quote/EURRUB?apikey=6c2a639deeb85ca31e40915e5ebd107e')
            .then(responce =>{
                this.currencyEUR = responce.data
                console.log(responce)
            })
            .catch(e =>{
                this.errors.push(e)
            })    
    }
}
</script>

<style scoped>
    .dashboard-info .currency{
        @apply justify-between bg-blue-100
    }
    .dashboard-info .dashboard-info__item{
        @apply px-4 flex justify-center 
    }
</style>
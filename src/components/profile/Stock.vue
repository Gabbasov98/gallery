<template>
    <div class="box-stock">
        <div class="box-stock__item" v-for="value in stock" :key="value.stock">
            <div class="box-stock__title">
                <div class="box-stock__image">
                    <img  :src="value.image" :alt="value.companyName">
                </div>
                <h3>
                    <span>{{value.symbol}} </span>
                </h3>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
    name: 'Stock',
    data(){
        return{
            stock:[],
            errors:[],
        }
    },
    created(){
        axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,BA,CVX,KO,CVX,GS,IBM,JPM,MCD,MSFT,NKE,WMT,DIS,V,QCOM,EBAY,BIDU?apikey=6c2a639deeb85ca31e40915e5ebd107e')
            .then(responce =>{
                this.stock = responce.data
                console.log(responce)
            })
            .catch(e =>{
                this.errors.push(e)
            })
    }
}
</script>

<style scoped>
    .box-stock{
        @apply grid grid-cols-4 gap-4 mb-6
    }
    .box-stock__item{
        @apply bg-blue-100 rounded-md flex-1 py-4 px-8 flex items-center justify-between 
    }
    .box-stock__title{
        @apply  flex items-center  w-8/12
    }
    .box-stock__title h3{
    }
    .box-stock__title span{
        @apply  block text-sm 
    } 
    .box-stock__image{
        @apply overflow-hidden mr-4 min-w-max
    }
    .box-stock__image img{
        @apply object-contain w-8 h-8
    }
    .box-stock__price{
        @apply w-4/12 text-right
    }
</style>
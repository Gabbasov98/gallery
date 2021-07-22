<template>
    <header>
        <div class="header">
            <h1 class="logo">Галлерея картин</h1>
            <div>
                <button class="btn" @click='$toast.show("В процессе разработки")'>Уведомление</button>
            </div>
        </div>  
        <!-- <div class="box-role">
            <div>
                <router-link class="btn-role" :class="{ active:$route.name  === 'Все картины'}" to="/">All</router-link>
                <router-link class="btn-role" :class="{ active:$route.name === 'Сохранённые картины'}" to="/saved">Saved</router-link>
            </div>
        </div>   -->
    </header>
    
</template>

<script lang="ts">

export default {
    
}
</script>


<style scoped>
    .box-role{
        @apply flex justify-between items-center rounded-md mb-6  ;
    }
    .box-role__title{
        @apply px-8 py-5 font-medium;
    }
    .btn-role{
        @apply  px-8 py-4 text-sm text-gray-700 bg-gray-200;
    }
    .active{
        @apply bg-blue-600 text-white;
    }
</style>
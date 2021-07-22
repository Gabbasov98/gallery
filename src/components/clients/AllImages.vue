<template>
    <div>
        <div class="box-role">
        <div>
            <button class="btn-role" @click="toggleTab(true)" :class="{ active:all}" >All</button>
            <button class="btn-role" @click="toggleTab(false)" :class="{ active:!all}" >Saved</button>
        </div>
    </div>  
    <table class="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>About</th>
                <th></th>
            </tr>
        </thead>
    
        <tbody v-if="all">
            <tr v-for="(image,index) in galleryImages" :key="image.galleryImages" >
                <td v-if="image.image_id !=null">
                    <img class="gallery-img" :src="createSrc(image.image_id, )" alt="">
                </td>
                <td v-else>
                    <span class="gallery-empty">Изображение отстутствует</span>
                </td>
                <td >
                    <span class="gallery-title">{{image.title}}</span>
                </td>
                <td>
                    <button  @click="(saveImg(index))" class="gallery-btn">Save</button>
                </td>
            </tr>
        </tbody>
        
        <tbody v-else>
            <tr v-for="(image) in savedImg" :key="image.savedImg" >
                <td v-if="image.image_id !=null">
                    <img class="gallery-img" :src="createSrc(image.image_id, )" alt="">
                </td>
                <td v-else>
                    <span class="gallery-empty">Изображение отстутствует</span>
                </td>
                <td >
                    <span class="gallery-title">{{image.title}}</span>
                </td>
                <td>
                    <button @click="(deleteImg(index))" class="gallery-btn delete">Delete</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
    
</template>

<script lang="ts">
import axios from 'axios'

export default {
    name: 'AllImages',
    data(){
        return{
            galleryImages:[],
            errors:[],
            savedImg:[],
            savedArray: [],
            all: true,
        }
    },
    created(){
        axios.get('https://api.artic.edu/api/v1/artworks?fields=image_id,title')
            .then(responce =>{
                this.galleryImages = responce.data.data
                // console.log(responce)
                // console.log(this.galleryImages )
            })
            .catch(e =>{
                this.errors.push(e)
            }) 
    },
    methods:{
        createSrc(src:any){
            let srcTemplate = `https://www.artic.edu/iiif/2/${src}/full/1686,/0/default.jpg`
            return srcTemplate
        },
        saveImg(index:any){
            this.savedImg.push(this.galleryImages[index]);
            // console.log(this.savedImg)
            // return true
        },
        deleteImg(index):any{
            this.savedImg.splice(index,1);
        },
        toggleTab(tab:boolean){
            this.all = tab;
        },
    }
}
</script>

<style scoped>
    .dashboard-info .currency{
        @apply justify-between;
    }
    .gallery-img{
        width: 300px;
        height: 200px;
    }
    .gallery-empty{
        width: 300px;
        height: 200px;
        @apply flex items-center justify-center;
    }
    td:first-child{
        width: 330px;
    }
    .gallery-title{
        @apply text-blue-900 text-lg;
        width: 300px;
        display: block;
    }
    .gallery-btn{
        @apply px-8 py-3 text-2xl bg-green-500 text-white rounded-lg
    }
    .gallery-btn.delete{
        @apply bg-red-600
    }
    tr{
        margin: 10px 0;
    }
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
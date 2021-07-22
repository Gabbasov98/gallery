<template>
    <div>
        <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
            <div class="form-upload">
                <input type="file" 
                    multiple
                    :name="uploadFieldName" 
                    :disabled="isSaving"
                    accept="image/*"
                    @change="filesChange($event.target.name,$event.target.files); fileCount = $event.target.files.length"
                    >
                <p v-if="isInitial">Перетащите сюда файлы или нажмите на поле,чтобы найти их</p>
                <p v-if="isSaving">Загрузка файлов ...</p>
            </div>
        </form>
        <div class="form-upload success" v-if="isSuccess">
            <div>
                <h2>Файл(ы) {{uploadedFiles.length}} успешно загружен(ы) </h2>
                <a href="javascript:void(0)" @click="reset()">Загрузить ещё раз</a>
                <ul>
                    <li v-for="item in uploadedFiles" :key="item">
                        <img :src="item.url" :alt="item.originalName" >
                    </li>
                </ul>
            </div>
        </div>  
        <div class="form-upload error" v-if="isError">
            <div>
                <h2>Ошибка загрузки</h2>
                <a href="javascript:void(0)" @click="reset()">Попробовать ещё раз</a>
            </div>
        </div>  
    </div>
</template>

<script>

import {upload} from "../interfaces/fake-upload"

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_ERROR = 3

export default {
    name: 'FormUpload',
    data() {
        return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
        }
    },
    computed: {
        isInitial() {
        return this.currentStatus === STATUS_INITIAL;
        },
        isSaving() {
        return this.currentStatus === STATUS_SAVING;
        },
        isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
        },
        isError() {
        return this.currentStatus === STATUS_ERROR;
        }
    },
    methods: {
        reset() {
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        },
        save(formData) {
        this.currentStatus = STATUS_SAVING;

        upload(formData)
            .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
            })
            .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_ERROR;
            });
        },
        filesChange(fieldName, fileList) {
        const formData = new FormData();

        if (!fileList.length) return;

        Array
            .from(Array(fileList.length).keys())
            .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
            });

        this.save(formData);
        }
    },
    mounted() {
        this.reset();
    },
}


</script>

<style scoped>
    .form-upload{
        @apply bg-blue-100 text-gray-800 h-28 hover:bg-blue-200 relative flex items-center
    }
    .form-upload input{
        @apply opacity-0 h-full w-full px-8 py-4 cursor-pointer absolute
    }
    .form-upload p{
        @apply text-sm text-center w-full
    }
    .form-upload.success{
        @apply bg-green-100
    }
    .form-upload.success a{
        @apply text-green-700
    }
    .form-upload.error{
        @apply bg-red-100
    }
    .form-upload.error a{
        @apply text-red-700
    }
    .form-upload>div{
        @apply w-full text-center
    }
    .form-upload img{
        @apply max-w-2xl m-auto
    }
</style>
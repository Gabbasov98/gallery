<template>
   <div>
       <AllImages />
   </div>
</template>
<script lang="ts">
import IconUser from "../components/icons/IconUser.vue"
import IconDeal from "../components/icons/IconDeal.vue"
import IconFeedback from "../components/icons/IconFeedback.vue"
import IconActivity from "../components/icons/IconActivity.vue"
import {useTableData} from "../interfaces/useTableData"
import AllImages from "../components/clients/AllImages.vue"
export default {
    name:"All",
    components:{IconUser,IconDeal,IconFeedback,IconActivity,AllImages},
    setup() {
        const { TableData } = useTableData();
        return { TableData };
    }
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

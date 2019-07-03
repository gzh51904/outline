<template>
    <div>
        发现{{cat}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            cat:'default'
        }
    },
    created(){
        console.log(this.$route)
        if(this.$route.params.category){

            this.cat = this.$route.params.category
        }
    }
}
</script>

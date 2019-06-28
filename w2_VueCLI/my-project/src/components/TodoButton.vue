<template>
    <button><slot></slot></button>
</template>
<script>
export default {
    props:['txt'],
    mounted(){
        console.log(this.username)
    }
}
</script>

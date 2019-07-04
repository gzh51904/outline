<template>
    <div>
        购物车
    </div>
</template>
<script>
export default {
    created(){
        console.log('Cart:',this)
    },
    beforeRouteEnter(to,from,next){
        console.log('Cart: beforeRouteEnter');
        next();
    },
    beforeRouteUpdate(to,from,next){
        console.log('Cart: beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Cart: beforeRouteLeave');
        next();
    }
}
</script>

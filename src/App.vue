<template>
    <div id="app">
        <Button type="primary" @click="getUser">用户</Button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            async getUser(){
                const res = await this.$http.get(this.$api.getUserInfo);
                if(res.state){
                    this.$store.commit("setUserInfo", res.data.info);
                }
            }
        }
    }
</script>

<style lang="less">
    .size{
      width: 100%;
      height: 100%;
    }
    html,body{
        .size;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    #app {
        .size;
    }
</style>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        async created(){
            await this.getUser();
        },
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

<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div class="form-con">
                    <login-form @on-success-valid="handleSubmit"></login-form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
                <Button @click="queryHello">hello</Button>
            </Card>
        </div>
    </div>
</template>

<script>
    import LoginForm from '_c/login-form'
    import { mapActions } from 'vuex'
    import axios from '@/network/http.js';
    export default {
        components: {LoginForm},
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            async handleSubmit ({ userName, password }) {
                const res = await axios.post('/api/Login/login', {
                    userName: userName,
                    password: password
                });
                // eslint-disable-next-line no-console
                console.log(res);

                /*this.handleLogin({ userName, password }).then(() => {
                  this.getUserInfo().then(() => {
                    this.$router.push({
                      name: this.$config.homeName
                    })
                  })
                })*/
            },
            async queryHello(){
                console.log("queryHello");
                const res = await axios.get('/api/hello/?name=hao');
                console.log(res);
            }
        }
    }
</script>

<style>

</style>

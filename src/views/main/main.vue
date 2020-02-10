<template>
    <Card>
        <div slot="title">首页</div>
        <div>
            这里是项目的主页面
        </div>
        <Button type="primary" @click="goToOther">跳转</Button>
        <div>
            query中参数：{{JSON.stringify($route.query)}}
        </div>
    </Card>
</template>

<script>
    export default {
        watch: {
            '$route'(){
                console.log(this.$route.query);
            }
        },
        methods: {
            goToOther(){
                this.$router.push({
                    name: "temp1",
                    query: {
                        user: 123
                    }
                });
            }
        }
    }
</script>

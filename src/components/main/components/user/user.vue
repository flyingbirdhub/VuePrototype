<template>
    <div class="user-avatar-dropdown">
        <Dropdown @on-click="handleClick">
            <Badge :dot="!!messageUnreadCount">
                <VueAvatar :username="userName" :inline="true" :size="28"></VueAvatar>
            </Badge>
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="message">
                    消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
                </DropdownItem>
                <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    import './user.less'
    import { mapActions } from 'vuex'
    import VueAvatar from 'vue-avatar';
    export default {
        name: 'User',
        components: {VueAvatar},
        props: {
            messageUnreadCount: {
                type: Number,
                default: 0
            }
        },
        computed: {
            userName(){
                return this.$store.state.user.userName;
            }
        },
        methods: {
            ...mapActions([
                'handleLogOut'
            ]),
            logout () {
                this.handleLogOut().then(() => {
                    this.$router.push({
                        name: 'login'
                    })
                })
            },
            message () {
                this.$router.push({
                    name: 'message_page'
                })
            },
            handleClick (name) {
                switch (name) {
                    case 'logout': this.logout()
                        break
                    case 'message': this.message()
                        break
                }
            }
        }
    }
</script>

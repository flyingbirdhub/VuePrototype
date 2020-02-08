export default {
    state: {
        userName: "",
        userId: "",
        level: ""
    },
    mutations: {
        setUserInfo(state, info){
            state.userName = info.userName;
            state.userId = info.userId;
            state.level = info.level;
        }
    }
}

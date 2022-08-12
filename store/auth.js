function addUserToLocalStorage(userInfo) {
    sessionStorage.setItem('user', JSON.stringify(userInfo))
}
export const state = () => ({
    openFormAuth: false,
    token: null,
    userInfo: {}
})

export const getters = {
    AUTH_FORM(state) {
        return state.openFormAuth
    },
    USER_INFO(state) {
        return state.userInfo
    },
    isAuthenticated(state) {
        return !!state.token;
    }
}

export const mutations = {
    LOGIN_FORM(state) {
        state.openFormAuth = true
    },
    CLOSE_FORM(state) {
        state.openFormAuth = false
    },
    SET_USER(state, userInfo) {
        state.token = userInfo.token
    },
    UPDATE_USER_FROM_STORAGE(state) {
        const userInfo = sessionStorage.getItem('user')
        if (userInfo) {
            state.userInfo = JSON.parse(userInfo).user
            const test = JSON.parse(userInfo).token
            state.token = test
        }
    },
    LOGOUT_USER(state) {
        state.userInfo = {}
        sessionStorage.removeItem('user')
        state.token = null
    }
}

export const actions = {
    loginForm(ctx) {
        ctx.commit('LOGIN_FORM')
    },
    closeForm(ctx) {
        ctx.commit('CLOSE_FORM')
    },
    async SET_USER_TO_STORAGE(ctx, logedUser) {
        ctx.commit('UPDATE_USER_FROM_STORAGE', addUserToLocalStorage(logedUser))
    },
    async LOGIN_USER(ctx, userInfo) {
        try {
            const logedUser = await fetch('https://api.brillday.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data', 'accept': 'application/json' },
                body: JSON.stringify({
                    email: userInfo.email,
                    password: userInfo.password
                })
            })
                .then(res => res.json())
                .then(data => {
                    return data
                })
            ctx.dispatch('SET_USER_TO_STORAGE', await logedUser)
            ctx.commit('SET_USER', logedUser)
            ctx.commit('CLOSE_FORM')
            this.$toast.success(`Hello! ${logedUser.user.email}`)
        } catch (err) {
            console.log(err.message);
        }
    },
    async LOGOUT_USER(ctx) {
        ctx.commit('LOGOUT_USER')
        this.$toast.info("See you soon!")
    }
}


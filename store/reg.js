export const state = () => ({
    openFormReg: false
})

export const getters = {
    REG_FORM(state) {
        return state.openFormReg
    }
}

export const mutations = {
    REGISTRATION_FORM(state) {
        state.openFormReg = true
    },
    CLOSE_FORM(state) {
        state.openFormReg = false
    }
}

export const actions = {
    regForm(ctx) {
        ctx.commit('REGISTRATION_FORM')
    },
    closeForm(ctx) {
        ctx.commit('CLOSE_FORM')
    },
    async CREATE_USER(ctx, user) {
        const data = new FormData();
        data.append('email', user.email);
        data.append('password', user.password);
        data.append('role', '1');
        try {
            const regUser = await this.$axios.$post('https://api.brillday.com/auth/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then(res => {
                    this.$toast.success(`Регистрация прошла успешна, ${res.email}`)
                    return res
                })
            return regUser
        } catch (err) {
            if (err) {
                this.$toast.error(`${err.response.data.errors.email}`)
            }
        }

    }
}
export const state = () => ({
    categories: []
})

export const getters = {
    getCategories(state) {
        return state.categories
    }
}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    }
}

export const actions = {
    async fetchCategories(ctx) {
        const categories = await this.$axios.$get('https://api.brillday.com/front/main/cats')
        ctx.commit('SET_CATEGORIES', categories)
    }
}


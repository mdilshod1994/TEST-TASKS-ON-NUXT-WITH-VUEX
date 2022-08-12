<template>
    <div class="container">
        <div class="navbar">
            <nuxt-link to="/" class="logo">
                TEST PROJECT
            </nuxt-link>
            <div class="nav-btns">
                <div @click="openMenu" :class="`icon-container ${isOpen ? 'menu-open' : ''}`">
                    <div id="menuicon">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                    </div>
                </div>
                <div :class="`btns-log ${isOpen ? 'open' : ''}`">
                    <div class="btns-log-in" v-if="!isLogedUser">
                        <button @click="logIn" class="">
                            Войти
                        </button>
                        <button @click="registration">
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                    </div>
                    <div class="btns-log-in" v-if="isLogedUser">
                        <button @click="logOut">
                            Выйти
                        </button>
                        <button>
                            ЛИЧНЫЙ КАБИНЕТ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        isLogedUser() {
            return this.$store.getters['auth/isAuthenticated']
        }
    },
    methods: {
        openMenu() {
            this.isOpen = !this.isOpen
        },
        logIn() {
            this.$store.dispatch('auth/loginForm')
            this.isOpen = false
        },
        registration() {
            this.$store.dispatch('reg/regForm')
            this.isOpen = false
        },
        async logOut() {
            await this.$store.dispatch('auth/LOGOUT_USER')
            this.isOpen = false

        },
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.isOpen = false
        })
    },
}
</script>

<style>
</style>
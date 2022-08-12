<template>
    <div id="login" :class="`login ${openForm ? 'active' : ''}`" @click="closePopup">
        <div class="login-body">
            <img @click="closePopup" src="https://www.nicepng.com/png/full/52-521935_close-white-close-button-png.png"
                alt="" class="close-btn">
            <div class="login__content" @click.stop="">
                <form class="login-form" @submit.prevent="loginUser">
                    <div class="form-wrapper">
                        <h1 class="login__title">
                            Войти
                        </h1>
                        <div class="input-container">
                            <input type="text" id="email" required @blur="blurMethod" v-model="email"
                                class="get-in-touch__input" autocomplete="off">
                            <label for="email" class="get-in-touch__label">Адрес почты</label>
                        </div>
                        <div class="input-container">
                            <input type="password" id="password" required @blur="blurMethod" v-model="password"
                                class="get-in-touch__input" autocomplete="off">
                            <label for="password" class="get-in-touch__label">Пароль</label>
                        </div>
                    </div>
                    <button type="submit">
                        ДАЛЕЕ
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            email: ''
        }
    },
    computed: {
        openForm() {
            return this.$store.getters['auth/AUTH_FORM']
        }
    },
    methods: {
        closePopup() {
            this.$store.dispatch('auth/closeForm')
        },
        blurMethod() {
            let emailValue = document.getElementById('email')
            let passwordValue = document.getElementById('password')

            if (this.email !== '' || this.password !== '') {
                emailValue.nextElementSibling.classList.add('filled')
                passwordValue.nextElementSibling.classList.add('filled')
            } else {
                emailValue.nextElementSibling.classList.remove('filled')
                passwordValue.nextElementSibling.classList.remove('filled')
            }
        },
        async loginUser() {
            if (this.email !== '' || this.password !== '') {
                await this.$store.dispatch('auth/LOGIN_USER', { email: this.email, password: this.password })
                this.email = ''
                this.password = ''
                this.blurMethod()
            } else {
                return
            }
        }
    }
}
</script>
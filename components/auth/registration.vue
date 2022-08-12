<template>
    <div id="registration" :class="`login ${openForm ? 'active' : ''}`" @click="closePopup">
        <div class="login-body">
            <img src="https://www.nicepng.com/png/full/52-521935_close-white-close-button-png.png" alt=""
                class="close-btn" @click="closePopup">
            <div class="login__content" @click.stop="">
                <form class="login-form" @submit.prevent="createUser">
                    <div class="form-wrapper">
                        <h1 class="login__title">
                            Зарегистрироваться
                        </h1>
                        <div class="input-container">
                            <input type="text" id="email-reg" required @blur="blurMethod" v-model="email"
                                class="get-in-touch__input" autocomplete="off">
                            <label for="email-reg" class="get-in-touch__label">Адрес почты</label>
                        </div>
                        <div class="input-container">
                            <input type="password" id="password-reg" required @blur="blurMethod" v-model="password"
                                class="get-in-touch__input" autocomplete="off">
                            <label for="password-reg" class="get-in-touch__label">Придумайте пароль</label>
                        </div>
                        <p class="validation-text">
                            Пароль <span>должен содержать</span>:
                        </p>
                        <ul class="validation__list">
                            <li class="validation__item">
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                    style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                    <polygon
                                        points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
                                </svg> Буквы
                            </li>
                            <li class="validation__item">
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                    style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                    <polygon
                                        points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
                                </svg> По крайней мере 1 цифру
                            </li>
                            <li class="validation__item">
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490"
                                    style="enable-background:new 0 0 490 490;" xml:space="preserve">
                                    <polygon
                                        points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
                                </svg> По крайней мере 8 символов
                            </li>
                        </ul>
                        <p class="agreement"> Нажимая "Регистация" или "Продолжить", я принимаю следующее:
                            <a href="" target="_blank">Условия предоставления услуг</a>, <a href="http://"
                                target="_blank">Условия обработки платежкй</a>, <a href="http://"
                                target="_blank">Политика конфиденциальности</a> и <a href="http://"
                                target="_blank">Политика</a>
                        </p>
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
            return this.$store.getters['reg/REG_FORM']
        }
    },
    methods: {
        closePopup() {
            this.$store.dispatch('reg/closeForm')
        },
        blurMethod() {
            let emailValue = document.getElementById('email-reg')
            let passwordValue = document.getElementById('password-reg')

            if (this.email !== '' || this.password !== '') {
                emailValue.nextElementSibling.classList.add('filled')
                passwordValue.nextElementSibling.classList.add('filled')
            } else {
                emailValue.nextElementSibling.classList.remove('filled')
                passwordValue.nextElementSibling.classList.remove('filled')
            }
        },
        async createUser() {
            if (this.email !== '' || this.password !== '') {
                const successReg = await this.$store.dispatch('reg/CREATE_USER', { email: this.email, password: this.password })
                if (successReg) {
                    this.closePopup()
                    await this.$store.dispatch('auth/loginForm')
                }
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
<template>
    <div>
        <Nuxt />
        <Login />
        <Registration />
        <Greeting />
    </div>
</template>

<script>
import Login from '~/components/auth/login.vue'
import Registration from '~/components/auth/registration.vue'
import Greeting from '~/components/greeting.vue';
export default {
    components: { Login, Registration, Greeting },
    data() {
        return {

        }
    },
}
</script>
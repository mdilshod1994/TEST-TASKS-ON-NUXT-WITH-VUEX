<template>
    <div :class="`greeting ${show ? 'show' : ''}`" @click="show = false">
        <div class="greeting-body">
            <div class="greeting__content">
                <h1>
                    Здравствуйте, <br> {{ userInfo.email }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        isLogedIn() {
            return this.$store.getters['auth/isAuthenticated']
        },
        userInfo() {
            return this.$store.getters['auth/USER_INFO']
        }
    },
    watch: {
        isLogedIn(newValue) {
            if (newValue === true) {
                this.show = true
                if (this.show) {
                    setTimeout(() => {
                        this.show = false
                    }, 3000)
                }
            }
        }
    }
}
</script>
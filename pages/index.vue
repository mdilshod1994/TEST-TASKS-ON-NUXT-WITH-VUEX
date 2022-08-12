<template>
  <main class="main">
    <Navbar />
    <Banner />
    <Categories />
  </main>
</template>

<script>
import Navbar from '~/components/navbar.vue';
import Banner from '~/components/banner.vue';
import Categories from '~/components/categories.vue';
export default {
  name: "IndexPage",
  components: { Navbar, Banner, Categories },
  async mounted() {
    await this.$store.commit('auth/UPDATE_USER_FROM_STORAGE')
  },
}
</script>

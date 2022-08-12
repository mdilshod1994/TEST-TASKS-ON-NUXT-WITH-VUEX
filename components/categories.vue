<template>
    <div class="container">
        <div class="categories">
            <h1 class="categories__title">
                Выберите категорию <span>3</span>
            </h1>
            <ul class="category__list">
                <li class="category__item" v-for="categor in categories.data" :key="categor.id">
                    <img v-if="categor.files" :src="`${categor.files[0].server + '/' + categor.files[0].path}`"
                        class="category__img" alt="">
                    <img v-else src="https://icon-library.com/images/empty-icon/empty-icon-15.jpg" class="category__img"
                        alt="">
                    <h3 class="category__title">
                        {{ categor.title }}
                    </h3>
                    <p class="category__qnty">
                        {{ categor.info.user_count }} исполнителей
                    </p>
                    <p class="category__price">
                        от
                        <span v-if="categor.info.price_min === null">
                            150
                        </span>
                        <span v-else> {{
                                categor.info.price_min
                        }}
                        </span>
                        руб.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            temp: [
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Фотографы',
                    qnty: 150000,
                    price: 570
                },
                {
                    img: require('../assets/images/1.png'),
                    title: 'Видеооператоры',
                    qnty: 150000,
                    price: 570
                },
            ]
        }
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories
        }
    },
    async mounted() {
        await this.$store.dispatch('fetchCategories')
    },
}
</script>
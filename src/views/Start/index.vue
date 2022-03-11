<template>
    <div style="background-color: #000; min-height: 100vh;">
        <div class="module-card-container">
            <start-card
                v-for="popm in popmModules"
                :key="popm.id"
                :popm="popm"
                style="min-width: 300px;"
            />
        </div>
    </div>
</template>

<script>
import StartCard from '@/components/Start/Card'

export default {
    name: 'PopmStart',
    components: {
        StartCard
    },
    data() {
        return {
            popmModules: [
                {
                    id: 1,
                    heading: 'Community',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: require('@/assets/images/community.png'),
                    backgroundColor: ''
                },
                {
                    id: 2,
                    heading: 'LevelTest',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/candidate/leveltest',
                    idBackground: '#fff',
                    backgroundImage: null,
                    backgroundColor: '#D6000E'
                },
                {
                    id: 3,
                    heading: 'Product Cases',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: require('@/assets/images/productcases.png'),
                    backgroundColor: ''
                },
                {
                    id: 4,
                    heading: 'Courses',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: null,
                    backgroundColor: '#02964C'
                },
                {
                    id: 5,
                    heading: 'Community',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: require('@/assets/images/community.png'),
                    backgroundColor: ''
                },
                {
                    id: 6,
                    heading: 'LevelTest',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: null,
                    backgroundColor: '#D6000E'
                },
                {
                    id: 7,
                    heading: 'Product Cases',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: require('@/assets/images/productcases.png'),
                    backgroundColor: ''
                },
                {
                    id: 8,
                    heading: 'Courses',
                    detail: 'In the POPM App you can choose from very different free and paid courses. Online training courses, certified training courses, master classes, current product cases and much more.',
                    likes: 243,
                    comments: 510,
                    path: '/leveltest',
                    idBackground: '#D6000E',
                    backgroundImage: null,
                    backgroundColor: '#02964C'
                }
            ]
        }
    }
}
</script>

<style scoped>
.module-card-container {
    display: flex;
    overflow-x: scroll;
    width: 100%;
}
</style>
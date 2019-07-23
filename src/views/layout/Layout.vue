<template>
    <div class="app-wrapper">
        <Header></Header>
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
        <Footer></Footer>
    </div>
</template>
<script>
import { Header,Footer } from './components'
import animate from 'animate.css'
export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    },
}
</script>
<style>

</style>

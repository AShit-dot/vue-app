<template>
    <div>
        <Navbar @click="isOpen = !isOpen" v-model="isOpen"/>
        <Sidebar v-model="isOpen"/>
        <router-view/>
    </div>   
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
    name: 'main-layout',
    components: {
        Navbar,
        Sidebar
    },
    data: () => ({
        isOpen: true
    })
}
</script>
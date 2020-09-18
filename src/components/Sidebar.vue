<template>
    <nav class="sidebar" :class="{sidebar_active: value}">
        <ul class="sidebar__menu"> 
            <router-link
            v-for="link in getLinks"
            :to="link.url"
            :key="link.url"
            active-class="sidebar__item_active"
            tag="li"
            exact
            ><a href="#" class="sidebar__item">{{link.title}}</a></router-link>
        </ul>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    props: ['value'],
    computed: mapGetters(['getLinks'])
}
</script>

<style lang="scss">
    .sidebar {
    position: absolute;
    display: flex;
    min-height: 100%;
    min-width: 300px;
    border: 3px solid #87d8b8;
    transition: all 0.5s;
    transform: translateX(-100%);
    background-color: #ffffff;

    &__item {
        height: 100px;
        width: 300px;
        display: flex;
        align-items: center;
        padding: 0 0 0 10%;
        font-size: 30px;
        font-weight: 100px;
        color: #014329;
        transition: all 0.3s;
        text-decoration: none;
        &:hover {
            background-color: #d0e3db;
        }
        &_active {
           background-color: #d0e3db; 
        }
    }
        
    &_active {
        transform: translateX(0);
    }
}

</style>
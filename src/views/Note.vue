<template>
    <div class="note">
        <div v-for="todos in getTodos" :key="todos.id" class="note__item">
            <div class="note__topic">{{todos.title}}</div>
            <div class="note__topic-descr">{{todos.body}}</div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    computed: mapGetters(['getTodos']),
    methods: mapActions(['fetchTodos']),
    async mounted() {
        this.fetchTodos()
    }
}
</script>

<style lang="scss">
.note {
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    &__item {
        display: flex;
        padding: 98px 14px;
        justify-content: center;
        align-items: center;
        margin: 25px;
        width: 300px;
        height: 300px;
        border-radius: 100%;
        border: 5px solid #c1e7d6;
        background-color: #8dc7b0;
        transition: all 0.3s;
        font-size: 50px;
        font-weight: 100px;
        color: #014329;
        &:hover {
            background-color: #b9dbce;
            border: 5px solid #cedbd5;
        }
    }

    &__topic {
        text-align: center;
        &_active {
            display: none;
        }
        &-descr {
            display: none;
            font-weight: 300;
            font-size: 18px;
            text-align: center;
            &_active {
                display: flex;
            }
        }
    }

    
}
</style>
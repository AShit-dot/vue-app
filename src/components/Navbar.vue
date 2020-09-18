<template>
    <nav class="navbar">
        <div class="navbar__circle" @click.prevent="$emit('click')" :class="{navbar__circle_active: value}"></div>
    </nav>
</template>

<script>
export default {
   props: ['value'],
}
</script>

<style lang="scss">
    .navbar  {
    width: 100%;
    height: 64px;
    background-color: #acffde;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__circle {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 100%;
        transition: all 0.5s;
        &_active{
            background-color: #87d8b8;
        }
    }
}
</style>
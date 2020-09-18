import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/note',
            name: 'Note',
            meta: {layouts: 'main'},
            component: () => import('@/views/Note.vue')
        },
        {
            path: '/',
            name: 'Calendar',
            meta: {layouts: 'main'},
            component: () => import('@/views/Calendar.vue')
        }
    ]
})
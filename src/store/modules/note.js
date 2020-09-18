export default {
    actions: {
        async fetchTodos(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const todos = await res.json()
            console.log(todos)
            ctx.commit('loadTodos', todos)
        }
    },
    mutations: {
        loadTodos(state, todos) {
            state.todos = todos
        }
    },
    state: {
        todos: [],
        links: [
            {title: 'Calendar', url: '/'},
            {title: 'Note', url: '/note'}
        ]
    },
    getters: {
        getTodos(state) {
            return state.todos
        },
        getLinks(state) {
            return state.links
        }
    },
}
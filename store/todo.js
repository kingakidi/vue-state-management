import { createStore } from 'vuex'


const store = createStore({
    state(){
        return {
            allTodos: ""
        }
    }, 
    mutations: {
      getAllTodo: async ()=>{
            let todos = await fetch('http://localhost:3000/todos').then(res=>{
                // store.username = res
                res.json().then(res=>{
                   store.state.allTodos = res
                   console.log(store.state.allTodos)
                })
            })

        }
    }
})

store.commit('getAllTodo')

export default store; 

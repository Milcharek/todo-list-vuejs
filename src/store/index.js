import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : [
      {
        id: 1,
        title: "Compras do mês",
        hours: "2",
        dificult: "Fácil",
        checked: false,
      },
      {
        id: 2,
        title: "Estudar",
        hours: "3",
        dificult: "Fácil",
        checked: false,
      },
      {
        id: 3,
        title: "Responder e-mails",
        hours: "1",
        dificult: "Médio",
        checked: false,
      },
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({commit}, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({commit}, id) {
      commit("delete_todo", id);
    },
    updateTodo({commit}, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex(t => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
  },
  modules: {
  }
})

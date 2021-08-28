<template>
  <div>
    <div class="row my-3 justify-content-between todo-item">
        <div v-if="!editing" class="todo-item-left">
            <input @click="handleCheck(todo)" type="checkbox" id="checkbox" v-model="checked">
            <div v-if="this.checked" class="todo-item-content disabled">
                <h3 class="todo-title">{{todo.title}}</h3>
                <div>
                    <span class="todo-hours">{{todo.hours}}</span>
                    <span class="todo-dificult">{{todo.dificult}}</span>
                </div>
            </div>
            <div v-else class="todo-item-content">
                <h3 class="todo-title">{{todo.title}}</h3>
               <div>
                    <span class="todo-hours">{{todo.hours}}</span>
                    <span class="todo-dificult">{{todo.dificult}}</span>
                </div>
            </div>
        </div>
        <div v-else class="todo-item-edit-mode">
            <input 
                v-bind:value="todoText" 
                @change="todoTextChange" 
                type="text" 
                class="col form-control"
            />
            <input 
                v-bind:value="todoHours" 
                @change="todoHoursChange" 
                type="text" 
                class="col form-control"
            />
            <b-form-select v-model="todoDificult">
                <option disabled value="">Dificuldade</option>
                <option>Fácil</option>
                <option>Médio</option>
                <option>Difícil</option>
            </b-form-select>
        </div>
        <div>
            <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{editing ? "Atualizar" : "Editar"}}</button>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger">Deletar</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        todo: {}
    },
    data() {
        return {
            todoText: "",
            checked: false,
            editing: false
        }
    },
    methods: {
        ...mapActions(["deleteTodo", "updateTodo"]),
        handleCheck(todo) {
            console.log(!todo.checked);
            todo.checked = this.checked;
        },
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        todoHoursChange(e) {
          this.todoHours = e.target.value; 
        },
        updateTodoI(todo) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.todoText = todo.title;
                this.todoHours = todo.hours.replace(/\D/g, '');
                this.todoDificult = todo.dificult;
                this.updateTodo(todo);
            } else {
                todo.title = this.todoText;
                todo.hours = this.todoHours.replace(/\D/g, '');
                todo.dificult = this.todoDificult;
            }
        }
    }
};
</script>

<style>
    .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fdfeff;
        border-radius: 5px;
        box-shadow: -3px -3px 7px #fdfdfdb2, 3px 3px 5px rgba(171, 180, 196, 0.945);
        color: rgb(75, 104, 109);
        margin-top: 5px;
        padding: 10px 20px;
    }
    .todo-item-left {
        display: flex;
        align-items: center;
    }
    .todo-item-content {
        text-align: left;
        margin-left: 10px;
        padding: 10px;
    }
    .todo-title {
        font-size: 18px;
        font-weight: 600;
        max-width: 300px;
    }
    .todo-hours {
        margin-right: 10px;
        width: 100px;
    }
    .todo-hours::after {
        content: "h"
    }
    .todo-item-edit-mode input {
        margin-bottom: 5px;
    }
    .disabled {
        text-decoration: line-through;
        color: rgb(224, 223, 223);
    }
</style>
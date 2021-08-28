<template>
  <div class="todo-inputs">
      <div>
            <div class="todo-inputs-title">
                <h1>Lista de tarefas <b-icon-card-checklist/></h1>
            </div>
            <div class="todo-inputs-head">
                <input 
                    @change="todoTextChange" 
                    v-bind:value="todoText" 
                    class="col form-control mr-2" 
                    placeholder="Tarefa"
                    type="text" 
                />
                <input 
                    @change="todoHoursChange" 
                    v-bind:value="todoHours"
                    class="col form-control" 
                    placeholder="Duração em horas"
                    type="text" 
                />
            </div>
            <div class="todo-inputs-footer">
                <b-form-select v-model="todoDificult">
                    <option disabled value="">Dificuldade</option>
                    <option>Fácil</option>
                    <option>Médio</option>
                    <option>Difícil</option>
                </b-form-select>
                <button @click="addTodoI" class="btn btn-primary"><b-icon-plus-square/><span>Adicionar</span></button>
            </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
    data() {
        return {
            todoText: "",
            todoHours: "",
            todoDificult: "",
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        todoHoursChange(e) {
            this.todoHours = e.target.value.replace(/\D/g, '');
        },
        addTodoI() {
            if (this.todoText === "" || this.todoHours === "" || this.todoDificult === "") {
                alert("Por favor, preencha todo os dados da tarefa.");
            } else {
                this.addTodo({
                    id: v1(),
                    title: this.todoText,
                    hours: this.todoHours,
                    dificult: this.todoDificult,
                });
                this.todoText = "";
                this.todoHours = "";
                this.todoDificult = "";
            }
            
        }
    }
};
</script>

<style>
    .todo-inputs {
        max-width: 530px;
        margin: auto;
        display: flex;
        padding: 20px 0px 30px 0px;
        justify-content: center;
        align-items: center;
        background: #fdfeff;
        border-radius: 5px;
        box-shadow: -3px -3px 7px #fdfdfdb2, 3px 3px 5px rgba(171, 180, 196, 0.945);
        color: rgb(75, 104, 109);
    }
    .todo-inputs-title {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .todo-inputs-title h1 {
        margin-right: 10px;
        font-size: 32px;
    }
    .todo-inputs-footer, .todo-inputs-head {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .todo-inputs-footer button {
        margin-left: 10px;
        display: flex;
    }
    .todo-inputs-footer span {
        margin-left: 5px;
    }

</style>
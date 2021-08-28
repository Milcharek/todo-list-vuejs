<template>
<div class="todo-list">
    <div v-for="todo in allTodos" :key="todo.id">
       <TodoItem :todo="todo" />
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../components/TodoItem.vue";
export default {
    components: {
        TodoItem,
  },
  computed: {
      ...mapGetters(["allTodos"])
  }
}
</script>

<style>
    .todo-list {
        max-width: 500px;
        margin: auto;
    }
</style>
<template>
  <div>
    <form action="" class="todo-form" @submit.prevent="addTodo">
      <div>
        <input type="text" placeholder="Enter Todo" v-model="sendTodo.todo" />
      </div>
      <div>
        <select name="" id="" v-model="sendTodo.level">
          <option value="" selected disabled>Select Level</option>
          <option value="hard">Hard</option>
          <option value="intermidiate">Intermidiate</option>
          <option value="easy">Easy</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Add Todo" />
      </div>

      {{ error }}

      <div v-for="todo in getAllTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Todo",
  data() {
    return {
      sendTodo: {
        todo: "",
        level: "",
      },
      error: "",
    };
  },
  computed: {
    getAllTodos() {
      return this.$store.state.allTodos;
    },
  },
  methods: {
    clean(data) {
      return data.length;
    },
    addTodo() {
      this.error = "";
      console.log(this.sendTodo);
      if (
        this.clean(this.sendTodo.todo) > 0 &&
        this.clean(this.sendTodo.level) > 0
      ) {
        // this.error = "YOu are good to go ";
        axios.post("http://localhost:3000/todos", {
            title: this.sendTodo.todo, 
            level: this.sendTodo.level
        }
        ).then((res) => {
          console.log(res);
        });
      } else {
        this.error = "All fields required";
      }
    },
  },
  mounted() {
    // this.$store.commit("getAllTodo");
  },
};
</script>

<style>
</style>
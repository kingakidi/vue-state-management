<template>
  <div>
    <form action="" class="todo-form" id="todo" @submit.prevent="addTodo">
      <div>
        <input type="text" placeholder="Enter Todo" v-model="todo.todo" />
      </div>
      <div>
        <select name="" id="" v-model="todo.level">
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
      {{ getUsername }}
    </form>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todo: {
        todo: "",
        level: "",
      },
      error: "",
    };
  },
  computed: {
    getUsername() {
      return this.$store.state.username;
    },
  },
  methods: {
    clean(data) {
      return data.length;
    },
    addTodo() {
      this.error = "";

      if (this.clean(this.todo.todo) > 0 && this.clean(this.todo.level) > 0) {
        this.error = "YOu are good to go ";
      } else {
        this.error = "All fields required";
      }
    },

    getAllTodo() {},
  },
};
</script>

<style>
</style>
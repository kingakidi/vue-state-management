import { createApp } from 'vue'
import { createStore } from "vuex";
import store from "../store/todo.js";

import App from './App.vue'

createApp(App).use(store).mount('#app')

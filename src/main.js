import { createApp } from 'vue'
import { createStore } from "vuex";
import store from "../store/todo.js";

import App from './App.vue'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
createApp(App).use(store).use(VueAxios, axios).mount('#app')

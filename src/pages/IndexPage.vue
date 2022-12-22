<template>
  <q-page>
    <div class="container">
      <city-weather />
      <add-todo @addTodo="addNewTodo"/>
      <todo-list :newTodo="todo"/>
    </div>
  </q-page>
</template>


<script>
import AddTodo from 'src/components/AddTodo/AddTodo.vue';
import TodoList from 'src/components/TodoList/TodoList.vue';
import CityWeather from "src/components/GetWeather/CityWeather.vue";

export default{
  name: 'IndexPage',
  components:{
    TodoList,
    AddTodo,
    CityWeather
  },
  data() {
    return {
      todo:{}
    }
  },
  methods:{
    addNewTodo(newTodo){
      this.todo = newTodo;
    },
  },
}
</script>

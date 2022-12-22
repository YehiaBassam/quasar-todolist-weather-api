<template>
  <div class="q-my-lg">
    <!-- Todo List -->
    <q-list bordered padding separator>
      <q-item v-for="todo in todos" :key="todo.id" tag="label">
        <q-item-section side top>
        <q-checkbox v-model="todo.isChecked" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ todo.title }}</q-item-label>
          <q-item-label class="text-grey-6"> {{ todo.description }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div>
            <q-btn unelevated round :size="$q.screen.xs ? 'sm' : 'md'" icon="visibility" @click="showTodo(todo.id)"/>
            <q-btn unelevated round :size="$q.screen.xs ? 'sm' : 'md'" icon="edit" @click="editTodo(todo.id)"/>
            <q-btn unelevated round :size="$q.screen.xs ? 'sm' : 'md'" icon="archive"/>
            <q-btn unelevated round :size="$q.screen.xs ? 'sm' : 'md'" icon="delete" @click="deleteTodo(todo.id)"/>
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Todo Show -->
    <todo-show
      :todo="selectedTodo"
      :show="isShow"
      @close="isShow = false"
    />

    <!-- Todo edit -->
    <todo-edit
      :todo="selectedTodo"
      :show="isEdit"
      @updateTodo="updateTodo"
    />
  </div>
</template>


<script>
import TodoCollection from "src/assets/jsons/todoCollection.json";
import TodoShow from "./TodoShow.vue";
import TodoEdit from "./TodoEdit.vue";

export default {
  components:{
    TodoShow,
    TodoEdit,
  },
  props:{
    newTodo:{
      type: Object
    },
  },
  created() {
    this.todos = TodoCollection;
  },
  data(){
    return{
      todos : [],
      selectedTodo: {},
      isShow: false,
      isEdit: false,
    }
  },
  methods:{
    showTodo(id){
      this.isShow = true;
      this.selectTodo(id);
    },
    editTodo(id){
      this.isEdit = true;
      this.selectTodo(id);
    },
    updateTodo(newTodo){
      this.isEdit = false
      this.selectTodo(newTodo.id);
      this.selectedTodo.title = newTodo.title;
      this.selectedTodo.description = newTodo.description;
    },
    selectTodo(id){
      this.selectedTodo = this.todos.find(todo => todo.id === id);
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  watch: {
    newTodo(newTodo){
      this.todos.unshift({
        id: Math.random().toFixed(4),
        title: newTodo.title,
        description: newTodo.description,
        created_at: "5/6/2022",
        finished_at: "10/5/2022",
        archive_at: "22/12/2022",
        isChecked: false
      })
    }
  },
}
</script>


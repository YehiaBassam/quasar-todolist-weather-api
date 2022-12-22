<template>
  <q-dialog :model-value="show" persistent>
    <q-card style="width: 80%">
      <q-form
          @submit.prevent="editTodo"
          class="q-y-gutter-md q-pa-md"
        >
          <q-input
            filled
            dense
            v-model="selectedTodo.title"
            label="Todo Title *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type Todo Title']"
          />
          <q-input
            filled
            dense
            v-model="selectedTodo.description"
            label="Todo Description *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type Todo Description']"
          />
        <div class="text-center">
          <q-btn label="Update Todo" type="submit" color="green" padding="sm md"/>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props:{
    todo: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      selectedTodo:{},
    }
  },
  updated() {
    this.selectedTodo = {...this.todo};
  },
  methods:{
    editTodo(){
      const data = {
        id: this.selectedTodo.id,
        title: this.selectedTodo.title,
        description: this.selectedTodo.description
      }
      this.$emit("updateTodo",data);
    },
  },
}
</script>

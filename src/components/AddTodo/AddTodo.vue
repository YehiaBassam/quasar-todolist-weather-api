<template>
  <div class="q-mt-xl">
    <q-card class="q-py-md">
      <q-form
          @submit.prevent="addTodo"
          class="q-col-gutter-md row q-px-md"
        >
        <div class="col-12 col-sm-5">
          <q-input
            filled
            dense
            v-model="title"
            label="Todo Title *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type Todo Title']"
          />
        </div>
        <div class="col-12 col-sm-5">
          <q-input
            filled
            dense
            v-model="description"
            label="Todo Description *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type Todo Description']"
          />
        </div>
        <div class="col-12 col-sm-2">
          <q-btn label="Save Todo" type="submit" color="primary" padding="sm md"/>
        </div>
      </q-form>
    </q-card>
  </div>
</template>



<script>
export default {
  data(){
    return{
      title: "",
      description: "",
    }
  },
  methods:{
    addTodo(){
      const data = {
        title: this.title,
        description: this.description
      }
      this.$emit("addTodo",data);
      this.title = this.description = " ";
    },
  },
}
</script>

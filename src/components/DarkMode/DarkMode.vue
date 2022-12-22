<template>
  <q-toggle
    v-model="isDark"
    @click="setDarkMode"
    color="primary"
    keep-color
  />
</template>


<script>
export default {
  data(){
    return{
      isDark:true,
    }
  },
  methods:{
    setDarkMode(){
      this.isDark ? this.$q.dark.set(false) : this.$q.dark.set(true);
    }
  }
}
</script>

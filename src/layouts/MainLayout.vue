<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-py-xs bg-grey-2">
      <q-toolbar class="container">
        <q-toolbar-title>
          <q-img src="~assets/images/logo.webp" width="80px"/>
        </q-toolbar-title>

        <dark-mode />
        <h5 class="text-primary q-my-none q-ml-md">Todo List</h5>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DarkMode from "src/components/DarkMode/DarkMode.vue";

export default {
  components:{
    DarkMode
  },
  name: 'MainLayout',
}
</script>

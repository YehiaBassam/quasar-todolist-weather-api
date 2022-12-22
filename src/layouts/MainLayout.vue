<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-py-xs bg-white">
      <q-toolbar class="container">
        <q-toolbar-title>
          <q-img src="~assets/images/logo.webp" width="80px"/>
        </q-toolbar-title>

        <h5 class="text-primary q-my-none">Todo List</h5>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<template>
  <q-dialog :model-value="show" @hide="$emit('close')">
    <q-card style="width: 80%">
      <q-list bordered separator>
        <q-item>
          <q-item-section>
            <q-item-label>Title : </q-item-label>
            <q-item-label class="text-grey-6">{{ todo.title }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>Description : </q-item-label>
            <q-item-label class="text-grey-6">{{ todo.description }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>Created at : </q-item-label>
            <q-item-label class="text-grey-6">{{ todo.created_at }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>Finished at : </q-item-label>
            <q-item-label class="text-grey-6">{{ todo.finished_at }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>Archive at : </q-item-label>
            <q-item-label class="text-grey-6">{{ todo.archive_at }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
}
</script>

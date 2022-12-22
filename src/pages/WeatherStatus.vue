<template>
  <div class="container">
    <q-list bordered separator class="q-mt-xl">
    <q-item v-for="(day, i) in days" :key="day.dt">
      <q-item-section>
        <q-item-label>day - {{ i+1 }} : </q-item-label>
        <q-item-label class="text-grey-6">{{ day.main.temp }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <div class="text-center q-mt-lg">
    <q-btn to="/" label="go home" color="primary" />
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days:[],
    }
  },
  created(){
    this.getTemperature();
  },
  methods:{
    getTemperature() {
      const api_key = "12eec9856099bdcc1843fd36c7d34a22";
      const city = this.$store.getters.getCity;
      this.$api
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5`,
          {
            params: {
              units: "metric",
              appid: api_key,
            },
          }
        )
        .then((res) => {
          this.days = res.data.list;
        });
    },
  },
}
</script>

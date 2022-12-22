<template>
  <q-card class="q-mt-xl" flat bordered>
    <q-item to="/weather" clickable v-ripple>
      <q-card-section class="text-primary" horizontal>
        <q-card-section>
          <h6 class="q-my-none">{{ city }} temperature :</h6>
        </q-card-section>
        <q-card-section>
          <h6 class="q-my-none">{{ temp }} °C</h6>
        </q-card-section>
      </q-card-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      city: "cairo",
      temp: "",
    };
  },
  created() {
    this.getGeolocation();
  },
  methods: {
    getGeolocation() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const success = (pos) => {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        this.getTemperature(lat, lng);
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    },

    getTemperature(lat, lon) {
      const api_key = "12eec9856099bdcc1843fd36c7d34a22";
      this.$api.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=10`,
          {
            params: {
              units: "metric",
              appid: api_key,
            },
          }
        )
        .then((res) => {
          this.$store.commit('setCity', res.data.name);
          this.city = res.data.name;
          this.temp = res.data.main.temp;
        });
    },
  },
};
</script>

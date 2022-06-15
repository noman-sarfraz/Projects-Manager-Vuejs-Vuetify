<template>
  <v-app>
    <NavBar />

    <v-main class="grey lighten-4">
      <div class="mx-4 mb-4">
        <router-view></router-view>
      </div>
    </v-main>

  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>

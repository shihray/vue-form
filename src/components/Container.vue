<template>
  <div class="home">
    <nav-bar/>
    <toggle-sidebar/>
    <b-container class="mt-5">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ToggleSidebar from "@/components/ToggleSidebar";

export default {
  name: 'Container',
  data() {
    return {
    }
  },
  components: {
    ToggleSidebar,
    NavBar
  }
}
</script>

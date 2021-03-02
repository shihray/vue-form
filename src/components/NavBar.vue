<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">

      <b-navbar-brand href="/">CMD</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button v-b-toggle.sidebar-menu>選單</b-button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
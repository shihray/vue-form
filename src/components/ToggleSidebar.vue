<template>
  <div>
    <b-sidebar id="sidebar-menu"  title="Sidebar" bg-variant="light" backdrop shadow>
      <div class="mt-3 p-3 border-top">
        <router-link class="text-left btn-block mb-3" to="/create" @click=onCreate>創建使用者</router-link>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import {CREAT_PAGE_NAME} from "@/router";

export default {

  methods:{
    onCreate(){
      this.$router.push({name: CREAT_PAGE_NAME});
    }
  }
}
</script>

<style scoped>

</style>
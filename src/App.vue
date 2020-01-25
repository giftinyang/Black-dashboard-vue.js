<template>
  <div id="app">
    <div class="wrapper">
      <Sidebar/>
    <router-view/>
    </div>
  </div>
</template>

<style>

</style>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {Sidebar}
}
</script>

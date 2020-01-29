<template>
  <div id="app">
    <div class="wrapper">
      <Sidebar/>
      <div class="main-panel">
        <div class="content">
    <router-view/>
    </div>
      </div>
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

<template>
  <div id="app" class="flex flex-row">
    <!-- SideBar -->
    <SideBar />
    <!-- ActionZone -->
    <ActionZone />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/components/SideBar.vue'
import ActionZone from '@/components/ActionZone.vue'

@Component({
  components: {
    SideBar,
    ActionZone
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import 'assets/styles/tailwind.scss';

</style>

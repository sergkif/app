<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row">
        <h1>Apps Free</h1>
      </div>
      <div class="row">
        <q-input dark color="white" rounded outlined v-model="search"  type="search" placeholder="Поиск по приложениям" style="width: 100%;" clearable clear-icon="close">
          <template v-slot:append>
            <q-icon name="search" ></q-icon>
          </template>
        </q-input>
      </div>
      <div class="row" v-for="(app, i) in apps" :key="i">
        <Lot :app="app"></Lot>
      </div>
    </div>
  </q-page>
</template>

<script>
import Lot from '../components/Lot'
import apps from '../statics/out.json'
export default {
  name: 'PageIndex',
  data () {
    return {
      search: '',
      apps: apps
    }
  },
  components: {
    Lot
  }
}
</script>

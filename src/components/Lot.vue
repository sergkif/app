<template>
    <!-- <q-card-section>style="width: 100%; position: relative;" -->
      <!-- <div class="text-h6"> {{app.title}} </div>style="position: absolute; left: 40%; font-size: 20px;" -->
      <!-- <div class=""> {{app.subtitle}} </div>style="position: absolute; left: 40%; top: 30%; color: rgb(90, 90, 90);" -->
      <!-- <img src="../assets/1.png" >style="float: left;" -->
      <!-- <q-btn unelevated rounded color="primary" label="ЗАГРУЗИТЬ"></q-btn>style="position: absolute; left: 30%; top: 55%;" -->
      <!-- <div v-if='app.type==2'> СО ВСЕМИ ВСТРОЕННЫМИ ПОКУПКАМИ </div> style="position: absolute; left: 70%; top: 50%; color: rgb(90, 90, 90);" -->
      <!-- <div v-else> ОФИЦИАЛЬНАЯ ЦЕНА: {{app.price}} </div>style="position: absolute; left: 40%; top: 30%; color: rgb(90, 90, 90);" -->
    <!-- </q-card-section> -->
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-black text-white">
        <template v-slot:avatar>
          <img
            src="../assets/1.png"
            style=""
          >
        </template>
        {{app.title}}
        <br>
        {{app.subtitle}}
        <div v-if='app.type==2'> СО ВСЕМИ ВСТРОЕННЫМИ ПОКУПКАМИ </div>
        <div v-else> ОФИЦИАЛЬНАЯ ЦЕНА: {{app.price}} </div>
        <template v-slot:action>
          <q-btn
            unelevated
            rounded
            color="primary"
            label="ЗАГРУЗИТЬ"
            style=""
            :to="{ path: '/login' }"
          ></q-btn>
        </template>
      </q-banner>
    </div>
</template>

<script>
export default {
  props: ['app'],
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="q-pa-md q-gutter-sm background">
    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-red-5 text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Ошибка</div>
          </q-card-section>
          <q-card-section>
            {{errorDescription}}
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup :to='errorRedirect'></q-btn>
          </q-card-actions>
        </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: ['errorDescription', 'errorRedirect'],
  data () {
    return {
      persistent: true
    }
  }
}
</script>

<style>
  .my-card {
    position: absolute;
    z-index: 100;
    top: 40%;
    left: 40%;
    width: 20%;
    height: 20%;
    opacity: 1;
  }
</style>

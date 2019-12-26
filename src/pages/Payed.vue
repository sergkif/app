<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row" style="justify-content: center;">
        <h3>Готово</h3>
      </div>
      <div class="row" style="justify-content: center;">
        <q-icon name="check_circle" dark class="text-primary" style="font-size: 250px"/>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        <q-btn
          unelevated
          rounded
          color="dark"
          label="ПРОДОЛЖИТЬ"
          style="margin: 10px;"
          to="/"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

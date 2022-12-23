<template>
  <q-page class="flex flex-center">
    <div class="full-width text-center text-h3">
      欢迎来到米奇妙妙屋
      </div>
    <img
    v-if="result"
      alt="Quasar logo"
      src="~assets/Ush1202111010101.jpg"
      style="width: 400px; height: 400px"
    >
    <div class="full-width text-center text-h6">
    <q-btn label="my rabbit" color="primary" @click="moveRabbit">
    </q-btn>
    <q-btn class="q-ma-lg" label="testpage" color="green" to="testpage">
    </q-btn>
      </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const result = ref(false)
function moveRabbit () {
  result.value = confirm('Bingo!')
  // alert(result)
}

</script>

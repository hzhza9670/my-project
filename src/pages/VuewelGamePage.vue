<template>
  <div>
    <score-bar />
    <play-area />
  </div>
</template>

<script setup>

import ScoreBar from 'src/components/ScoreBar.vue'
import PlayArea from 'src/components/PlayArea.vue'
// import '@/main.css';

</script>

<style>
.my-element {
  animation: fadeIn;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
  /* don't forget to set a duration! */
}
</style>

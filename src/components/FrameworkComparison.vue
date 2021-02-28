<template>
  <!-- TODO - Need to get dynamic images working :( -->
  <!-- <img :src="frameworkLogoUrl(logo)" :alt="`${name} Logo`" /> -->
  <a
    class="rounded-full h-36 w-36 bg-gray-100 hover:bg-gray-300 flex flex-col justify-center"
    href="#"
  >
    <h1 class="text-center text-gray-800 font-medium">{{ name }}</h1>
  </a>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "FrameworkComparison",
  props: {
    name: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  computed: {
    frameworkLogoUrl(logoPath: String) {
      return require("../assets/logos/" + logoPath);
    },
  },
});
</script>

<style scoped></style>

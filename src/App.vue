<template>
  <div class="h-screen bg-gray-600">
    <Navbar />

    <div class="px-10 py-10 grid sm:grid-cols-3 md:grid-cols-4 gap-6">
      <FrameworkComparison v-for="framework in frameworks" v-bind="framework" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import FrameworkComparison from "./components/FrameworkComparison.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    FrameworkComparison,
  },
  data: () => {
    return {
      frameworks: [
        {
          name: "Amber",
          language: "crystal",
          website: "https://amberframework.org",
          github: "https://github.com/amberframework/amber",
          logo: "amber.jpg",
        },
        {
          name: "Kemal",
          language: "crystal",
          website: "https://kemalcr.com",
          github: "https://github.com/kemalcr/kemal",
          logo: "kemal.png",
        },
        {
          name: "Rails",
          language: "ruby",
          website: "https://rubyonrails.org",
          github: "https://github.com/rails/rails",
          logo: "rails.png",
        },
        {
          name: "Phoenix",
          language: "Elixir",
          website: "https://www.phoenixframework.org",
          github: "https://github.com/phoenixframework/phoenix",
          logo: "phoenix.png",
        },
      ],
    };
  },
});
</script>

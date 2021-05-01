<template>
  <div>
    <h1
      class="pb-12 text-center tracking-tight font-extrabold text-white sm:leading-none text-5xl xl:text-6xl"
    >
      <span class="md:block"
        >Is <span class="text-green-400">Lucky</span> better than</span
      >
      <span class="ml-2 md:ml-0 text-pink-500">{{ typedTextValue }}</span>
      <span
        class="cursor inline-block ml-1 bg-white w-0.5"
        :class="{ typing: textIsTyping }"
        >&nbsp;</span
      >
    </h1>

    <div class="flex items-center justify-center">
      <button
        type="button"
        @click="open = true"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lucky-green"
      >
        Click me to find out!
      </button>
    </div>

    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
        :open="open"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle sm:max-w-lg sm:w-full sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-2xl space-x-4 leading-6 font-medium text-white"
                  >
                    <span>🤗</span>
                    <span>Nope!</span>
                    <span>🤗</span>
                  </DialogTitle>
                  <div class="mt-6 text-gray-300 space-y-4">
                    <p>
                      Don't get us wrong. We think Lucky is pretty awesome! You
                      can read about everything that makes it great
                      <a
                        class="underline text-green-500 hover:text-green-400 cursor-pointer"
                        href="https://luckyframework.org"
                        >on the website</a
                      >!
                    </p>

                    <p>
                      However, no single framework is the perfect fit for
                      <span class="italic">every</span> problem, so don't be shy
                      about trying out some other languages, too!
                    </p>

                    <p>
                      Here are a few of our favorites!
                      <ul>
                        <li v-for="framework in frameworks">
                          <a class="text-green-500 hover:text-green-600 underline cursor-pointer" target="_blank" :href="framework.website">
                            {{framework.name}}
                          </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default defineComponent({
  name: "App",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data: () => {
    return {
      typedTextValue: "",
      textIsTyping: false,
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 2000,
      frameworksIndex: 0,
      charIndex: 0,
      open: false,
      frameworks: [
        {
          name: "Amber",
          language: "crystal",
          website: "https://amberframework.org",
          github: "https://github.com/amberframework/amber",
        },
        {
          name: "Kemal",
          language: "crystal",
          website: "https://kemalcr.com",
          github: "https://github.com/kemalcr/kemal",
        },
        {
          name: "Rails",
          language: "ruby",
          website: "https://rubyonrails.org",
          github: "https://github.com/rails/rails",
        },
        {
          name: "Phoenix",
          language: "Elixir",
          website: "https://www.phoenixframework.org",
          github: "https://github.com/phoenixframework/phoenix",
        },
      ],
    };
  },
  methods: {
    frameworkName(index: number): string {
      return this.frameworks[index].name + "?";
    },
    typeText() {
      if (this.charIndex < this.frameworkName(this.frameworksIndex).length) {
        if (!this.textIsTyping) this.textIsTyping = true;
        this.typedTextValue += this.frameworkName(this.frameworksIndex).charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.textIsTyping = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.textIsTyping) this.textIsTyping = true;
        this.typedTextValue = this.frameworks[
          this.frameworksIndex
        ].name.substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.textIsTyping = false;
        this.frameworksIndex += 1;
        if (this.frameworksIndex >= this.frameworks.length)
          this.frameworksIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
});
</script>

<style lang="scss" scoped>
h1 {
  span.cursor {
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>

<template>
  <div class="mb-6">
    <router-link
      :to="{ name: 'Home' }"
      class="bg-blue-900 text-white py-2 px-4 rounded-3xl text-sm"
    >
      Return to Home
    </router-link>
  </div>
  <div v-if="Object.keys(singlePost).length !== 0">
    <h1 class="font-semibold text-3xl mb-2">{{ singlePost.title }}</h1>
    <p class="text-md mb-6">{{ singlePost.body }}</p>
    <p>ID: {{ singlePost.id }}</p>
    <p>User ID: {{ singlePost.userId }}</p>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Posts",
  computed: {
    ...mapGetters("posts", ["singlePost"]),
  },
  methods: {
    ...mapMutations("posts", ["CLEAR_SINGLE_POST"]),
  },
  unmounted() {
    this.CLEAR_SINGLE_POST();
  },
};
</script>
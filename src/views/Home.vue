<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Posts,
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    ...mapActions("posts", ["getAllPosts"]),
  },
};
</script>

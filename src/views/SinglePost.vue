<template>
  <div class="single-post">
    <Post />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import { mapActions } from "vuex";

export default {
  name: "SinglePost",
  components: {
    Post,
  },
  created() {
    this.getPostById(this.$route.params.id);
  },
  methods: {
    ...mapActions("posts", ["getPostById"]),
  },
};
</script>
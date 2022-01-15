<template>
  <h1 class="text-2xl mb-2 font-semibold">Posts</h1>
  <div v-if="allPosts.length !== 0" class="posts">
    <PostCard
      v-for="post in allPosts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
      :id="post.id"
      :userId="post.userId"
    />
  </div>
  <p v-else class="text-xl">Loading...</p>
</template>

<script>
import PostCard from "./PostCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Posts",
  components: {
    PostCard,
  },
  computed: {
    ...mapGetters("posts", ["allPosts"]),
  },
};
</script>

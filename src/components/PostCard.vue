<template>
  <div
    class="py-3 px-6 rounded-md bg-white mb-2 md:flex items-center justify-between"
  >
    <div>
      <h2 class="font-semibold text-lg mb-2">{{ title }}</h2>
      <p>id: {{ id }}</p>
      <p>user id: {{ userId }}</p>
    </div>
    <div class="md:m-0 my-4">
      <router-link
        :to="{ name: 'SinglePost', params: { id: id } }"
        class="bg-blue-900 text-white py-2 px-4 rounded-3xl text-sm"
      >
        See Post
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    id: Number,
    userId: Number,
  },
  name: "PostCard",
};
</script>
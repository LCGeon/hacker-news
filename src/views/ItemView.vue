<template>
  <section>
    <div class="user-container">
      <div>
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="user-description">
        User :
        <router-link :to="`/user/${ask_detail.user}`">
          {{ ask_detail.user }}
        </router-link>
        <div class="time">
          {{ ask_detail.time_ago }}
        </div>
      </div>
    </div>
    <h2>
      {{ ask_detail.title }}
    </h2>
  </section>
  <section>
    <div v-html="ask_detail.content"></div>
  </section>
</template>

<script>
export default {
  computed: {
    ask_detail() {
      return this.$store.state.askDetail;
    },
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_DETAIL", askId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 1.5rem;
  padding: 1.5rem;
}
.user-description {
  padding-left: 9px;
}
.time {
  font-size: 0.7rem;
}
</style>

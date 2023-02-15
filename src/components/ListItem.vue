<template>
  <ul class="news-list">
    <li v-for="item in listItems" :key="item" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`"> {{ item.title }}</router-link>
          </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by

          <router-link
            :to="`/user/${item.user}`"
            class="news-user"
            v-if="item.user"
          >
            {{ item.user }}
          </router-link>
          <a :href="item.url" class="news-user" else>
            {{ item.domain }}
          </a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
    },
  },
};
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
.news-user {
  color: #525bff;
}
</style>

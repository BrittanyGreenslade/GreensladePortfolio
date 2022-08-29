<template>
  <div class="projectCtrMbl">
    <h2 class="projectTitle">Sustainappbility (Twitter Clone)</h2>
    <img
      class="appPicMbl"
      src="../assets/sustainappbility.jpg"
      alt="Sustainappbility landing page image"
    />
    <div class="threeLinksCtr">
      <a
        target="_blank"
        class="projectLink"
        href="https://www.sustainappbility.tk"
        >Go to site</a
      >
      <a
        target="_blank"
        class="projectLink"
        href="https://github.com/BrittanyGreenslade/TweetrProject"
        >Front-end code</a
      >
      <a
        target="_blank"
        class="projectLink"
        href="https://github.com/BrittanyGreenslade/tweetrBackEnd"
        >Back-end code</a
      >
    </div>
    <p class="projectDesc">
      Intended to be a Twitter clone, but themed to meet my interests: an app
      where users can share ideas about sustainability and environmental topics.
      Initially a simple front-end CRUD application built using Vue.js which
      used Axios to interact with a REST API. Following this, we created our own
      database and API using DBeaver, SQL, MariaDB, Flask, and Python. Hosted
      using the Google Cloud Platform and Apache.
    </p>
  </div>
</template>

<script>
export default {
  name: "sustainappbility",
};
</script>

<style scoped>
.projectDesc{
height:300px;
}</style>

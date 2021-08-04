<template>
  <div class="projectCtrMbl">
    <h2 class="projectTitle">Web Developmeet (MVP)</h2>
    <img
      class="appPicMbl"
      src="../assets/webDevelopmeet.jpg"
      alt="Web Developmeet landing page image"
    />
    <div class="threeLinksCtr">
      <a target="_blank" class="projectLink" href="https://www.developmeet.ml"
        >Go to site</a
      >
      <a
        target="_blank"
        class="projectLink"
        href="https://github.com/BrittanyGreenslade/mvpFrontEnd"
        >Front-end code</a
      >
      <a
        target="_blank"
        class="projectLink"
        href="https://github.com/BrittanyGreenslade/mvpBackEnd"
        >Back-end code</a
      >
    </div>
    <p class="projectDesc">
      A full-stack application for people in the development industry to host
      and attend events, with an emphasis on finding events within a chosen
      radius of their specified location. The front-end was created using Vue.js
      and Axios. The back-end was created using MariaDB, SQL, DBeaver, Python,
      Flask, and the Python open-source 'haversine' library for geo-location
      mapping. Hosted using the Google Cloud Platform and Apache.
    </p>
  </div>
</template>

<script>
export default {
  name: "web-developmeet",
};
</script>

<style scoped></style>

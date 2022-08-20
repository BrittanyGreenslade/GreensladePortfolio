<template>
  <div class="projectCtrMbl">
    <h2 class="projectTitle">eOceans (Web & Mobile Apps)</h2>
    <!-- <img
      class="appPicMbl"
      src="../assets/sustainappbility.jpg"
      alt="Sustainappbility landing page image"
    /> -->
    <div class="threeLinksCtr">
      <a target="_blank" class="projectLink" href="https://www.eoceans.app/"
        >Go to site</a
      >
    </div>
    <p class="projectDesc">
      In my time at eOceans, I worked on both the front and back end of mobile
      and web applications. The back-end, which was shared between the two apps, used
      MongoDB and AmazonS3 for storage, and was hosted on Amazon Web Services. Since
      the app was meant to be used offline and online, we used SQLite to store
      data offline until an internet connection could be reached. The web
      application was built using React (utilizing the MaterialUI component
      library) and the mobile app was built using React Native (utilizing Expo, as well as React
      Router for navigation). For payments, we used the Stripe API. My main
      projects at eOceans (besides general upkeep of the apps) were: 
      - editing and completing the pricing page of the web application
      - complete the "About", "Home", and "FAQs" pages based on designs from designer
      - re-design the mobile application based on new designs provided to me (entirely new colour scheme and design)
    </p>
  </div>
</template>

<script>
export default {
  name: "eoceans",
};
</script>

<style scoped></style>

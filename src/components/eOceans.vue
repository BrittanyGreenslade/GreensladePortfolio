<template>
  <div class="projectCtrMbl">
    <h2 class="projectTitle">eOceans (Web & Mobile Apps)</h2>
    <img
      class="appPicMbl"
      src="../assets/eoceans1.jpg"
      alt="eOceans App community feed image"
    />
    <div class="threeLinksCtr">
      <a target="_blank" class="projectLink" href="https://www.eoceans.app/"
        >Go to site</a
      >
    </div>
    <p class="projectDesc">
      I worked on both the front and back end of the
      mobile and web applications at eOceans. Both apps were hosted on Amazon Web Services.
      The back-end, which was shared between the two apps, used MongoDB and
      AmazonS3 for storage. Since the app was built to be used offline and
      online, we used SQLite to store data offline until an internet connection
      could be reached. The web application was built using React (utilizing the
      MaterialUI component library) and the mobile app was built using React
      Native (utilizing Expo, as well as React Router for navigation). For
      payments, we integrated the Stripe API. 
      <!-- My main projects at eOceans were: 
      
      - complete the pricing page of the web application 
      - complete the "About", "Home", and "FAQs" pages based on designs from designer 
      - re-design mobile application based on new designs provided to me (entirely new colour
      scheme and formatting) 
      - general upkeep of both apps -->
    </p>
  </div>
</template>

<script>
export default {
  name: "e-oceans",
};
</script>

<style scoped>
.projectCtrMbl {
  height: 1000px;
}
@media only screen and (min-width: 600px) {
.projectCtrMbl {
  height: 1140px;
}
.projectDesc{
height:400px;
justify-content:center;

}}
</style>

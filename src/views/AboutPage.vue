<template>
  <div id="about" class="pageContainer">
    <div class="aboutPg">
      <div id="intro">
        <img
          id="headshot"
          src="../assets/headshot2.jpg"
          alt="Brittany headshot"
        />
        <div id="introText">
          <h1>Hi there! I'm Brittany.</h1>
          <div>
            <p class="twentyTwoPt">Junior Full Stack Developer</p>
            <p class="twentyTwoPt">Edmonton, Canada</p>
            <p class="twentyTwoPt">Sustainability Advocate</p>
            <p class="twentyTwoPt">Avid Traveller</p>
            <p class="twentyTwoPt">Passionate Linguist</p>
          </div>
        </div>
      </div>
      <div id="career">
        <div id="careerText">
          <h2>Experience</h2>
          <p>
            I am a junior full-stack developer from Edmonton, Alberta. I have
            created 4 large projects and many smaller projects thus far. I am
            especially intrigued by back-end development; however, I appreciate
            the creative expression that front-end projects allow for. I've
            always had a passion for language learning: I have a degree in
            German Language & Literature, with a minor in Linguistics. I am
            eager to learn more about the tech industry, to use my
            problem-solving skills to navigate new technologies, and excited to
            cross paths with like-minded individuals along the way!
          </p>
        </div>

        <skills-list />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsList from "@/components/SkillsList.vue";
export default {
  name: "about-page",
  components: {
    SkillsList,
  },
  //mounts at the top of the page when page is first loaded
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#career {
  display: grid;
  place-items: center;
  grid-template-columns: 1.15fr 1fr;
  margin-top: 80px;
  margin-left: 25px;
}
#careerText {
  margin-bottom: 30px;
}
#intro {
  display: grid;
  grid-template-columns: 1.25fr 1.5fr;
  min-height: 400px;
}
#introText {
  align-self: center;
}
#headshot {
  border-radius: 15px;
  place-self: center;
  width: 375px;
}
h1 {
  font-size: 70px;
  font-weight: 100;
}

h2 {
  font-size: 55px;
  font-weight: 100;
  margin-bottom: 5px;
}
h2 ~ p {
  font-size: 20px;
}
h1 ~ div {
  display: grid;
  row-gap: 5px;
  margin-left: 15px;
}
</style>

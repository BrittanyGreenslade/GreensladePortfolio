<template>
  <div class="pageContainer">
    <div class="about">
      <div id="intro">
        <img
          id="headshot"
          src="https://thumbs.dreamstime.com/z/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-102768004.jpg"
          alt="Brittany headshot"
        />
        <div id="introText">
          <h1>Hi there! I'm Brittany.</h1>
          <p>Edmonton, Canada</p>
          <p>junior full stack developer</p>
          <p>avid traveller</p>
          <p>passionate linguist</p>
        </div>
      </div>
      <div id="career">
        <div id="careerText">
          <h2>Experience</h2>
          <p>
            I have a degree in German Language & Literature, with a minor in
            Linguistics, and a passion for language learning. Which led me to
            want to learn computer language! I just completed a Fulll-Stack
            Development diploma program at InnoTech College (Alberta), where I
            created 1 front-end project and 2 full-stack projects. While I am
            especially intrigued by back-end development, I find front-end works
            to be a wonderful creative outlet. I am eager to learn more about
            the tech industry, to use my problem-solving skills to navigate new
            technologies, and excited to cross paths with like-minded
            individuals.
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
  name: "About",
  components: {
    SkillsList,
  },
};
</script>

<style scoped>
#career {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
}
#intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
#introText {
  align-self: center;
}
#headshot {
  border-radius: 10px;
  margin-left: 8%;
  width: 350px;
}
h1 {
  font-size: 70px;
  font-weight: 100;
}
h1 ~ p {
  font-size: 30px;
}
h2 {
  font-size: 55px;
  font-weight: 100;
}
h2 ~ p {
  font-size: 20px;
}
</style>

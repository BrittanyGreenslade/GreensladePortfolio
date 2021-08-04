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
    <div class="aboutPgTablet">
      <div id="introTablet">
        <img
          id="headshotTablet"
          src="../assets/headshot2.jpg"
          alt="Brittany headshot"
        />
        <div id="introTextTablet">
          <div id="nameCtr">
            <h1 class="name">Hi there!</h1>
            <h1 class="name">I'm Brittany.</h1>
          </div>
          <div id="descCtr">
            <p>Junior Full Stack Developer</p>
            <p>Edmonton, Canada</p>
            <p>Sustainability Advocate</p>
            <p>Avid Traveller</p>
            <p>Passionate Linguist</p>
          </div>
        </div>
      </div>
      <div id="career">
        <div>
          <h2>Experience</h2>
          <p id="personalDesc">
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
.aboutPgTablet {
  display: block;
}
.aboutPg {
  display: none;
}
#headshotTablet {
  border-radius: 15px;
  place-self: center;
  width: 250px;
  margin-top: 80px;
}

#introTablet,
#aboutPgTablet {
  width: 100%;
}
#nameCtr {
  display: grid;
}
.name {
  font-size: 45px;
}
#career {
  display: grid;
  margin-top: 30px;
}
#descCtr {
  margin-left: 10px;
}
h2 {
  margin-bottom: 5px;
}
@media only screen and (min-width: 600px) {
  #headshotTablet {
    width: 250px;
    margin-top: 0;
    width: 300px;
  }
  #nameCtr {
    display: grid;
  }
  .name {
    font-size: 60px;
    font-weight: 80;
  }
  #introTablet {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    margin-top: 80px;
  }
  #descCtr {
    margin-left: 10px;
  }
  #personalDesc {
    font-size: 16px;
    margin-top: 20px;
  }
}
@media only screen and (min-width: 1050px) {
  .aboutPg {
    display: block;
  }
  .aboutPgTablet {
    display: none;
  }
  #career {
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
    margin-top: 50px;
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
    font-size: 60px;
    font-weight: 100;
  }

  h2 {
    font-size: 55px;
    font-weight: 100;
  }
  h2 ~ p {
    font-size: 20px;
  }
  h1 ~ div {
    display: grid;
    row-gap: 5px;
    margin-left: 15px;
  }
}
</style>

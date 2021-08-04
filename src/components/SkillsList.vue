<template>
  <div id="pageContainer">
    <div class="skillsGroup">
      <p class="skill">Figma</p>
      <p class="skill">HTML 5</p>
      <p class="skill">CSS 3</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Sass</p>
      <p class="skill">JavaScript</p>
      <p class="skill">Vue.js</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Python</p>
      <p class="skill">Flask</p>
      <p class="skill">SQL</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Visual Studio Code</p>
      <p class="skill">DBeaver</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">AJAX</p>
      <p class="skill">Maria DB</p>
      <p class="skill">API</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">NPM</p>
      <p class="skill">JSON</p>
      <p class="skill">GitHub</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Bash CLI</p>
      <p class="skill">Linux</p>
      <p class="skill">Apache</p>
    </div>
    <div class="skillsGroup">
      <p class="skill" id="skill1Mbl">Google Cloud Platform</p>
      <p class="skill" id="skill2Mbl">Responsive Web Design</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-list",
};
</script>

<style scoped>
.skillsGroup {
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  margin-bottom: 5px;
}
.skill {
  border: 1px solid #ced1df;
  border-radius: 10px;
  display: grid;
  place-items: center;
  height: 30px;
  text-align: center;
}
#pageContainer {
  width: 85%;
  margin-top: 20px;
  place-self: center;
}
#skill1Mbl,
#skill2Mbl {
  height: 50px;
  text-align: center;
}
@media only screen and (min-width: 600px) {
  .skill {
    min-width: 110px;
  }
}

@media only screen and (min-width: 1000px) {
  #pageContainer {
    margin-top: none;
  }
}
</style>

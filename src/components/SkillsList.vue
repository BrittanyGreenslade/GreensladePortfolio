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
      <p class="skill">Vue</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Apache</p>
      <p class="skill">Maria DB</p>
      <p class="skill">SQL</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">DBeaver</p>
      <p class="skill">Flask</p>
      <p class="skill">Python</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Google Cloud Platform</p>
    </div>
    <div class="skillsGroup">
      <p class="skill">Responsive Web Design</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-list",
};
</script>

<style scoped>
.skill {
  border: 1px solid #ced1df;
  border-radius: 10px;
  display: grid;
  place-items: center;
  height: 40px;
}
.skillsGroup {
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  margin-bottom: 5px;
}
#pageContainer {
  width: 70%;
}
</style>

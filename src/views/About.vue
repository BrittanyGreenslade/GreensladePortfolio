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
          <p>junior full stack developer</p>
          <p>avid traveller</p>
          <p>passionate linguist</p>
        </div>
      </div>
      <div id="career">
        <div id="careerText">
          <h2>Career</h2>
          <p>
            I recently completed a full-stack development diploma program at
            InnoTech College (Alberta).
          </p>
        </div>

        <div id="techSkills"><p>*insert technical skills here*</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
/* #careerText {
} */
#career {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
}
#introText,
#techSkills {
  justify-self: start;
}
#intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
#headshot {
  border-radius: 10px;
  width: 350px;
}
</style>

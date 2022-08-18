<template>
  <div class="projectCtrDsktp">
    <h2 class="projectTitle">Classic Pokémon Battle Mini-Game</h2>
    <img
      class="appPicDesktop"
      src="../assets/pokeBattle.jpg"
      alt="Pokémon Battle landing page image"
    />
    <div class="twoLinksCtr">
      <a target="_blank" class="projectLink" href="https://www.battleathon.tk"
        >Go to site</a
      >
      <a
        target="_blank"
        class="projectLink"
        href="https://github.com/BrittanyGreenslade/PokemonBattle"
        >View code</a
      >
    </div>
    <p class="projectDesc">
      A basic Pokémon battle simulator. Demonstrates my ability to store state
      using the JS Cookies library. Creating during a one-class (8hr) hackathon.
      Hosted using the Google Cloud Platform and Apache.
    </p>
  </div>
</template>

<script>
export default {
  name: "pokemon-battle",
};
</script>

<style scoped>
.appPic {
  height: 291px;
}
</style>

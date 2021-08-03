<template>
  <div id="works" class="pageContainer">
    <h1>My Projects</h1>
    <div id="projectsDsktp">
      <piece-on-earth />
      <pokemon-battle />
    </div>
    <div id="projectsMbl">
      <sustainappbility />
      <web-developmeet />
    </div>
  </div>
</template>

<script>
import PieceOnEarth from "../components/PieceOnEarth.vue";
import PokemonBattle from "../components/PokemonBattle.vue";
import Sustainappbility from "../components/Sustainappbility.vue";
import WebDevelopmeet from "../components/WebDevelopmeet.vue";
export default {
  components: { PieceOnEarth, PokemonBattle, Sustainappbility, WebDevelopmeet },
  name: "works-page",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#projectsDsktp,
#projectsMbl {
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  width: 80%;
  min-height: 500px;
  column-gap: 20px;
}
#projectsMbl {
  width: 90%;
  margin-top: 50px;
}
h1 {
  margin-bottom: 35px;
  font-size: 60px;
  font-weight: lighter;
}
</style>

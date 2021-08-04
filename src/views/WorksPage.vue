<template>
  <div id="works" class="pageContainer">
    <h1>My Projects</h1>
    <div id="tabletProjects">
      <div id="projectsDsktp">
        <piece-on-earth />
        <pokemon-battle />
      </div>
      <div id="projectsMbl">
        <sustainappbility />
        <web-developmeet />
      </div>
    </div>
    <div id="desktopProjects">
      <div id="projectsDsktp">
        <piece-on-earth />
        <pokemon-battle />
      </div>
      <div id="projectsMbl">
        <sustainappbility />
        <web-developmeet />
      </div>
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
  place-items: center;
}
#projectsDsktp {
  width: 90%;
  place-self: center;
  row-gap: 20px;
}
#projectsMbl {
  width: 90%;
  place-self: center;
  row-gap: 20px;
  margin-top: 20px;
}
#projectsMbl:last-child {
  margin-bottom: 20px;
}
h1 {
  font-size: 40px;
  margin-top: 80px;
  margin-bottom: 10px;
}
#tabletProjects {
  display: grid;
}
#desktopProjects {
  display: none;
}
@media only screen and (min-width: 600px) {
  #projectsDsktp {
    width: 90%;
  }
}
@media only screen and (min-width: 1050px) {
  #tabletProjects {
    display: none;
  }
  #desktopProjects {
    display: grid;
  }
  #projectsDsktp,
  #projectsMbl {
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    column-gap: 80px;
  }
  h1 {
    margin-bottom: 35px;
    font-size: 80px;
    font-weight: lighter;
  }
}
</style>

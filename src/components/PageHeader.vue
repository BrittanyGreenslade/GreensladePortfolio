<template>
  <div>
    <div id="headerContainerDesktop">
      <div id="nameAndLogo">
        <img class="logo" src="../assets/bLogo.png" alt="b logo" />
        <h2 id="name">Brittany Greenslade</h2>
      </div>
      <div id="nav">
        <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
        <router-link to="/works">Works</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/brittany-greenslade/"
          >LinkedIn</a
        >
      </div>
    </div>
    <div id="headerContainerTablet">
      <div id="nameAndLogo">
        <img class="logo" src="../assets/bLogo.png" alt="b logo" />
        <h2 id="name">Brittany Greenslade</h2>
      </div>
      <!--<div id="navTablet">
        <img
          v-if="showMenu === false"
          @click="toggleMenu"
          class="hamMenuIcon"
          src="../assets/plus.png"
          alt="plus sign - click for menu"
        />
        <div class="hamMenu">
          <img
            @click="toggleMenu"
            v-if="showMenu === true"
            class="closeIcon"
            src="../assets/close.svg"
            alt="x sign - click to close menu"
          />
          <div id="nav">
            <router-link :to="{ path: '/', hash: '#about' }">About</router-link> -->
      <router-link id="worksLink" v-if="routePath !== `/works`" to="/works"
        >Works</router-link
      >
      <router-link id="worksLink" v-if="routePath === `/works`" to="/"
        >Home</router-link
      >
      <!-- <router-link :to="{ path: '/', hash: '#contact' }"
              >Contact</router-link
            >
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
  methods: {
    toggleMenu() {
      if (this.showMenu === false) {
        this.showMenu = true;
        document.querySelector(".hamMenu").classList.add("showMenu");
      } else {
        this.showMenu = false;
        document.querySelector(".hamMenu").classList.remove("showMenu");
      }
    },
  },
};
</script>

<style scoped>
#nameAndLogo {
  display: grid;
  height: 100px;
  width: 200px;
  grid-template-columns: 1fr 5fr;
  margin-left: 10px;
  margin-top: 10px;
}
#name {
  align-self: center;
  justify-self: start;
  margin-bottom: 10px;
  font-size: 16px;
}
.logo {
  width: 80px;
}
#headerContainerDesktop {
  display: none;
}
#headerContainerTablet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: fixed;
  width: 100%;
  background: white;
}
#worksLink {
  text-align: center;
  background: lightgray;
  text-decoration: none;
  color: black;
  font-size: 18px;
  border-radius: 10px;
  justify-self: end;
  width: 75px;
  margin-right: 20px;
  margin-bottom: 10px;
}

@media only screen and (min-width: 600px) {
  #headerContainerTablet {
    grid-template-columns: 7fr 1fr;
    align-items: center;
    width: 100%;
    max-height: 15vh;
    position: fixed;
    background: white;
    z-index: 100;
  }
  #headerContainerDesktop {
    display: none;
  }
  #worksLink {
    margin-right: 50px;
    margin-bottom: 0;
    margin-top: 10px;
  }
  #nameAndLogo {
    width: 450px;
  }
}

@media only screen and (min-width: 1050px) {
  #headerContainerTablet {
    display: none;
  }
  #headerContainerDesktop {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    max-height: 15vh;
    position: fixed;
    background: white;
  }
  #nav {
    justify-self: end;
    align-self: center;
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    margin-right: 30px;
  }
  #nav a {
    font-size: 20px;
    text-decoration: none;
    color: black;
  }
  #nav a:hover {
    color: #735290;
    font-weight: bold;
  }
}

/* .logo,
  .closeIcon {
    width: 80px;
  } */
/* .hamMenuIcon {
    width: 55px;
  }
  .hamMenu {
    position: fixed;
    moves the ham menu 100% off the page vertically
    transform: translateY(-100%);
    this happens when value of 'transform' changes
    transition: transform 0.2s;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    display: grid;
    justify-items: center;
    grid-template-rows: 2fr 8fr;
  }
  #nav {
    display: grid;
    height: 20%;
  }
  #nav > a {
    color: black;
    text-decoration: none;
    font-size: 70px;
  }
  #nav > a:hover {
    font-weight: bold;
    color: #735290;
  }
  .closeIcon {
    justify-self: end;
    margin-right: 20px;
    margin-top: 20px;
  }
  this class is toggled on with js
  .showMenu {
    transform: translateY(0);
  } */
</style>

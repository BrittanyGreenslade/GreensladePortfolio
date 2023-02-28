<template>
  <div id="contact">
    <h1>Want to get in touch?</h1>
    <div id="infoCtr">
      <p class="thirtyPt">Brittany Greenslade</p>
      <a class="thirtyPt" href="mailto:bgreensl@ualberta.ca"
        >brittany.l.greenslade@gmail.com</a
      >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/brittany-greenslade/"
        class="thirtyPt"
        >LinkedIn</a
      >
      <a
        class="thirtyPt"
        target="_blank"
        href="https://docs.google.com/document/d/1Qg_BXamlF8IDSdLKd2iGrLO2fbMTb08b/edit?usp=sharing&ouid=113226337062373520452&rtpof=true&sd=true"
        >Resume</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-page",
};
</script>

<style scoped>
h1 {
  font-size: 35px;
  width: 80%;
  justify-self: start;
}

#contact {
  margin-top: 50px;
  margin-bottom: 20px;
  display: grid;
  place-self: center;
  width: 90%;
  border-top: 1px solid black;
}
#infoCtr {
  display: grid;
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
a:active {
  color: #735290;
  font-weight: bold;
}
p,
a {
  font-size: 16px;
}
@media only screen and (min-width: 600px) {
  h1 {
    font-size: 55px;
    width: 80%;
    place-self: center;
  }
  #infoCtr {
    display: grid;
    place-self: center;
  }
  #contact {
    margin-top: 50px;
    margin-bottom: 20px;
    display: grid;
    place-self: center;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    min-height: 500px;
    /* width: 90%; */
    border: 1px solid black;
    border-radius: 10px;
  }
  p,
  a {
    letter-spacing: 3px;
    font-size: 20px;
  }
}
@media only screen and (min-width: 1050px) {
  h1 {
    justify-self: center;
    font-size: 45px;
    width: 80%;
  }
  a:hover {
    color: #735290;
    font-weight: bold;
  }
  p,
  a {
    font-size: 30px;
  }
}
</style>

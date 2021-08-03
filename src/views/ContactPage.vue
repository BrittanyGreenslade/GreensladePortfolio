<template>
  <div id="contact">
    <h1>Want to get in touch?</h1>
    <div id="infoCtr">
      <p class="thirtyPt">Brittany Greenslade</p>
      <a target="_blank" class="thirtyPt" href="mailto:bgreensl@ualberta.ca"
        >bgreensl@ualberta.ca</a
      >
      <a
        target="_blank"
        href="https://www.linkedin.com/in/brittany-greenslade/"
        class="thirtyPt"
        >LinkedIn</a
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
  font-size: 55px;
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
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
}
p,
a {
  letter-spacing: 3px;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: #735290;
  font-weight: bold;
}
</style>

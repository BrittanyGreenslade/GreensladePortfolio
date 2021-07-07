<template>
  <div id="contactContainer">
    <h1>Want to get in touch?</h1>
    <form action="javascript:void(0)">
      <p>Name</p>
      <input type="text" placeholder="Enter your name" required />
      <p>Email Address</p>
      <input type="text" placeholder="Enter your email" required />
      <p>Message</p>
      <input type="text" placeholder="Enter your message" required />
      <br />
      <input type="submit" placeholder="Submit" required />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
#contactContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
}
</style>

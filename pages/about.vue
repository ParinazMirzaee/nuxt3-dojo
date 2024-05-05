<script setup>

const {data} = await useFetch("/api/currency/EUR")

</script>

<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis debitis earum facilis iure laborum
      porro, sed similique sunt vitae!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis debitis earum facilis iure laborum
      porro,
      sed similique sunt vitae!</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
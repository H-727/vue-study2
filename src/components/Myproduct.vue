<template>
  <div class="my-product">
    <h3>{{ title }}</h3>
    <p>价格:{{ price }}</p>
    <p>{{ dsce }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "dsce"],
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>

<template>
  <div>
    <span>我是子组件</span><br />
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style></style>

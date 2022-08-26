<template>
  <div>
    <my-product
      v-for="item in list"
      :key="item.id"
      :title="item.proname"
      :price="item.proprice"
      :dsce="item.info"
    >
    </my-product>
  </div>
</template>

<script>
import MyProduct from "@/components/Myproduct.vue";
export default {
  components: {
    MyProduct,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

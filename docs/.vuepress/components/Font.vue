<template>
  <div>
    <button @click="handle">测试加+1</button>
  </div>
</template>

<script>
export default {
  name: 'Font',
  data() { 
    return {
    }
  },
  methods:{
    handle(){
      console.log(1);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
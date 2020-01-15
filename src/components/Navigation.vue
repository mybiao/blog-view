<template>
  <div>

  </div>
</template>

<script>
export default {
    created:function(){
        this.$nextTick(function(){
            let arr=this.$refs.leftbody.querySelectorAll(":header");
            arr.forEach(ele => {
                window.console.log(ele.innerHTML);
            });
        })
    }
}
</script>

<style>

</style>
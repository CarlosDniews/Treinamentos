<script>
  import ChatBox from '@/components/ChatBox.vue';
  
  export default {
    components: {
      ChatBox
    }
  };
  </script>

<template>
  <div class="chatBox">
    <h1>Chat: </h1>
    <chatBox></chatBox>
  </div>
</template>
  
<style scoped>

.chatBox {
  color: #b0062b;

}
</style>
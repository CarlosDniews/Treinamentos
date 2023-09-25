<template>
  <div class="chatBox">
    <div class="chat-dialog">
      <div class="chat-message" v-for="(message, index) in messages" :key="index">
        {{ message }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Digite sua mensagem..." />
      <button @click="sendMessage">Send</button>
      <button @click="clearMessage">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return;

      this.messages.push(this.newMessage);
      this.newMessage = '';
    },
    clearMessage() {
      this.messages.pop(this.newMessage);
      this.newMessage = '';
    }
  }  
};
</script>

<style scoped>
.chatBox {
  width: auto;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 1px solid #2196F3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-dialog {
  padding: 10px;
  background-color: #d4d4d4;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  min-height: 400px;
  max-height: 800px;
  overflow-y: auto;
}

.chat-message {
  margin: 5px 0;
  padding: 8px;
  background-color: #2196F3;
  color: #fff;
  border-radius: 16px;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 16px;
  outline: none;
}

button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}
</style>
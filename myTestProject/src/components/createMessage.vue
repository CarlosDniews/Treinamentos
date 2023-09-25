<template>
  <div>
    <button @click="createMessage">Gerar Mensagem</button>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      conversation: [
        'Olá!',
        'Como você está?',
        'Esta é uma mensagem aleatória.',
        'Tenha um ótimo dia!',
        'Número 4!'
      ]
    };
  },
  methods: {
    createMessage() {
      const randomIndex = Math.floor(Math.random() * this.conversation.length);
      this.msg = this.conversation[randomIndex];
    }
  }
};
</script>
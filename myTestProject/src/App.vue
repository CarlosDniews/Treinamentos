<script setup>

</script>

<template>

  <header>
    <div class="container">
      <h1>Cabeçalho: </h1>
      <div class="component">
        <div class="buttons">
          <router-link to="/">
            <button>Ir para a home</button>
          </router-link>

          <router-link to="/chat">
            <button>Ir para o chat</button>
          </router-link>          
        </div>        
      </div>
    </div>
  </header>

  <body>
    <div class="component">
      <router-view></router-view>
    </div>
  </body>

</template>


<style scoped>
header {
  align-items: left;
  line-height: 1.5;
  max-height: 100vh;  
}

body {
  align-items: left;
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  margin: 10px;
  padding: 8px 16px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}

.component {
  width: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

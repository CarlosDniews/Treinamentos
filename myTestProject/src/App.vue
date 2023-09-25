<script setup>

</script>

<template>
  <div class="page">
    <header>
      <div class="container">
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
  </div>
</template>


<style scoped>

.page {
  flex-direction: column;
}
header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #424242;
}

body {
  width: 100%;
}

.container {
  width: 100%;
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
  background-color: #166fb8;
  color: #fff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
}

.component {
  width: auto;
  margin: 10px;
  display: flex;
  flex-direction: center;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }
}
</style>

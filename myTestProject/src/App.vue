<template>
  <div class="page">
    <header>
      <div class="container">
        <div class="component">
          <img onclick="" class="image" src="@/assets/dass_logo.png" alt="Dass Logo" />

          <div class="buttons">
            <router-link to="/">
              <button
                class="custom-button"
                :class="{ 'custom-button-hovered': isButton1Hovered, 'custom-button-clicked': isButton1Clicked }"
                @mouseover="isButton1Hovered = true"
                @mouseleave="isButton1Hovered = false"
                @click="isButton1Clicked = !isButton1Clicked">
                    Home
                </button>
            </router-link>
  
            <router-link to="/chat">
              <button
                class="custom-button"
                :class="{ 'custom-button-hovered': isButton2Hovered, 'custom-button-clicked': isButton2Clicked }"
                @mouseover="isButton2Hovered = true"
                @mouseleave="isButton2Hovered = false"
                @click="isButton2Clicked = !isButton2Clicked">
                Chat
              </button>
            </router-link>  

          </div>        
        </div>
      </div>
    </header>
    <div class="section">
      <router-view></router-view>
    </div> 
  </div>
</template>


<script>
export default {
  data() {
    return {
      isButton1Hovered: false,
      isButton1Clicked: false,
      isButton2Hovered: false,
      isButton2Clicked: false
    };
  },
  methods: {
    textStyle(buttonNumber) {
      const isHovered = this[`isButton${buttonNumber}Hovered`];
      const isClicked = this[`isButton${buttonNumber}Clicked`];

      return {
        color: isHovered || isClicked ? "#b0062b" : "initial"
      };
    }
  }
};
</script>


<style scoped>
.page {
  flex-direction: column;
  display: flex;
}
header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  Border-bottom: 1px solid #dddddd;
  padding-left: 12.3%;
  padding-right: 12.3%;
}

.container {
  flex-direction: row;
  height: 100px;
}

.component {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
}

.buttons {
  display: flex;
  gap: 10px;
  box-sizing: border-box;
}

.section {
  width: 100%;
  align-items: center;
  height: inherit;
}

.image {
  height: auto;
  max-width: 14.8%;
}

.custom-button {
  background-color: transparent;
  color: #666666;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button-hovered {
  background-color: transparent;
  color: #b0062b;
}

.custom-button-clicked {
  background-color: transparent;
  color: #b0062b;
}

button {
  margin: 10px;
  border-radius: 24px;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  font-weight: 400;
  height: auto;
  line-height: 50px;
}
</style>

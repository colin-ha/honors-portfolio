<script setup lang="ts">
import ArrowRight from '@/icons/ArrowRight.vue'
</script>

<template>
  <div class="experience-container">
    <div>
      <h1 class="hello">Experiences</h1>
    </div>
    <br />
    <div class="features">
      <RouterLink to="/experience/1stopconed">
        <div class="feature onestop">
          <div class="overlay">
            <h2>1StopConEd</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/experience/keysteptutorials">
        <div class="feature keystep">
          <div class="overlay">
            <h2>KeyStep Tutorials</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/experience/commercialce">
        <div class="feature commercialce">
          <div class="overlay">
            <h2>123 Commercial CE</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/experience/drivegame">
        <div class="feature drivegame">
          <div class="overlay">
            <h2>DCC Drive Game</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/experience/scoreboard">
        <div class="feature scoreboard">
          <div class="overlay">
            <h2>Scoreboard Software</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/experience/frc">
        <div class="feature frc">
          <div class="overlay">
            <h2>FRC Team Captain</h2>
            <button>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hello {
  line-height: 1;
  font-size: 6rem;
  background: linear-gradient(
    45deg,
    var(--color-gradient-start),
    var(--color-gradient-end),
    var(--color-gradient-hover-start),
    var(--color-gradient-hover-end)
  );
  background-size: 200% 200%;
  background-position: left center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 15px;
  transition:
    background-position 1.5s ease,
    font-weight 0.5s ease;
  font-weight: 300;
}

.hello:hover {
  line-height: 1;
  background-position: right center;
  font-weight: 600;
  backface-visibility: hidden;
  transform: translateZ(0);
}

@media (max-width: 1040px) {
  .experience-container {
    margin-top: 100px;
  }
}

.features {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to the next line */
  gap: 20px;
  justify-content: center; /* Center the features */
  padding: 20px;
  width: 95vw;
}

.feature {
  position: relative;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  overflow: hidden;
  transition:
    backdrop-filter 0.3s ease,
    box-shadow 0.3s ease;
}

.feature.onestop {
  background: url('@/assets/screenshot-onestop.png') no-repeat center center;
  background-size: cover;
}

.feature.keystep {
  background: url('@/assets/screenshot-keystep.png') no-repeat center center;
  background-size: cover;
}

.feature.scoreboard {
  background: url('@/assets/screenshot-scoreboard.png') no-repeat center center;
  background-size: cover;
}

.feature.commercialce {
  background: url('@/assets/screenshot-123commercialce.png') no-repeat center center;
  background-size: cover;
}

.feature.drivegame {
  background: url('@/assets/screenshot-drivegame.png') no-repeat center center;
  background-size: cover;
}

.feature.frc {
  background: url('@/assets/screenshot-frc.png') no-repeat center center;
  background-size: cover;
}

.feature:hover {
  box-shadow: 0 0 15px 10px rgba(9, 132, 227, 0.4);
}

.feature:hover .overlay {
  backdrop-filter: blur(2px);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: white;
  transition: backdrop-filter 0.3s ease;
}

.overlay h2 {
  font-size: 3rem;
  margin: 0;
  transition: transform 0.3s ease;
  line-height: 1.2;
}

.feature:hover .overlay h2 {
  transform: scale(1.25) translate(60px, 0%);
}

.overlay button {
  align-self: flex-end;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;
}

.overlay button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.overlay button svg {
  transition: transform 0.3s ease;
}

.feature:hover .overlay button svg {
  transform: translateX(10px);
}

a {
  text-decoration: none;
  color: inherit; /* Optional: to inherit the color from the parent element */
}
</style>

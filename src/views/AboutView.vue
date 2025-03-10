<script setup lang="ts">
import { RouterLink } from 'vue-router'
import YouTubeIcon from '@/icons/YouTubeIcon.vue'
import OneStopIcon from '@/icons/OneStopIcon.vue'
</script>
<template>
  <div class="about-container">
    <div class="about-row">
      <div class="about-col">
        <h1 class="hello">About Me</h1>
        <p class="about-me-text">
          I grew up in Dearborn, Michigan, later lived in Farmington Hills, and now I live in Ann Arbor for school,
          where I’m pursuing a degree in Computer Science. I’ve always been passionate about creating and designing,
          with no greater joy than turning ideas into reality. My dedication to careful design is driven by the belief
          that well-designed products can improve the lives of many, and I focus on user experience and the human aspect
          of technology. Beyond my major, I’m involved in the Wolverine Sports Analytics club, working on projects like
          AI models to predict Wide Receiver performance, which fuels my love for learning and applying data analysis. I
          value selflessness and strive to contribute positively to the world, embodying a "man for others" mindset. My
          strengths include being a fast learner and embracing challenges, consistently pushing myself to grow and
          deliver meaningful solutions that make a difference.
        </p>
      </div>
      <div class="about-col">
        <div class="about-col quals">
          <h1>Qualifications</h1>
          <h2>Education</h2>
          <p class="description">
            <b>The University of Michigan - Ann Arbor</b>
            &nbsp;3.94/4.0 GPA
            <br />
            <em>College of Engineering & Honors Program</em>
            <br />
            Major in Computer Science Engineering, Minor in User Experience Design
          </p>
          <br />
          <h2>Activites</h2>
          <p class="description">
            <b>Wolverine Sports Analytics</b>
            <br />
            <em>Project Hermes - Team Member</em>
            <br />
            Working to develop a machine learning model to predict Wide Receiver performance.
          </p>
          <br />
          <h2>
            Projects and Experiences
            <RouterLink to="/experiences">
              <em><span class="see-more">(see more!)</span></em>
            </RouterLink>
          </h2>
          <p class="description">
            <YouTubeIcon class="icon" />
            <b>Keystep Tutorials YouTube Channel</b>
            &nbsp;
            <a target="_blank" href="https://www.youtube.com/@keysteptutorials">
              <em><span class="see-more">(check it out!)</span></em>
            </a>
            <br />
            <em>Farmington Hills, MI | Nov 2021 - Present</em>
            <br />
            Automated Piano Tutorial videos covering a variety of songs. I wrote this platform using Java and SQLite. My
            goal was to create tutorials for little-known songs, so that everyone can learn piano with the songs they
            love, regardless of popularity.
          </p>
          <p class="description">
            <OneStopIcon class="icon" />
            <b>1StopConEd LLC Website</b>
            &nbsp;
            <a target="_blank" href="https://www.1stopconed.com">
              <em><span class="see-more">(check it out!)</span></em>
            </a>
            <br />
            <em>Farmington, MI | Aug 2021 - Jun 2023</em>
            <br />
            Online Real Estate Education platform. Includes e-commerce, a (private) admin console, server configuration,
            and much more. I wrote this from the ground up with Java, MySQL, Ubuntu, JavaScript, HTML, and CSS. My goal
            was to make a seamless experience for their clients, and to provide an easy transition from their old
            website.
          </p>
        </div>
      </div>
      <div class="about-container">
        <h1>Pictures</h1>
        <div class="about-row">
          <div class="about-col">
            <img
              class="about-pic"
              id="aboutpic1"
              src="../assets/aboutpic1.jpg"
              alt="Colin Harris at a Michigan Volleyball game"
            />
            <div class="about-caption-box">
              <p class="about-caption">Me at a Michigan Volleyball Game. Go Blue!</p>
            </div>
          </div>
          <div class="about-col">
            <img class="about-pic" id="aboutpic2" src="../assets/aboutpic2.png" alt="Colin Harris outside in Italy" />
            <div class="about-caption-box">
              <p class="about-caption">Me visting my family in Italy. I love to travel!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
}

@media (max-width: 1040px) {
  .about-container {
    margin-top: 100px;
  }
}

.about-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.about-col {
  flex: 1;
  min-width: 450px; /* Adjust based on your needs */
  padding: 10px;
}

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
  will-change: background-position, font-weight;
  backface-visibility: hidden;
  transform: translateZ(0);
}

p.about-me-text {
  width: 100%;
  padding: 0 20px;
  font-size: larger;
  text-align: left;
}

.see-more {
  font-weight: normal;
  background: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: initial;
  transition:
    background 0.5s ease,
    font-weight 0.5s ease;
  text-decoration: underline;
}

.see-more:hover {
  font-weight: bolder;
  background: linear-gradient(45deg, var(--color-gradient-start), var(--color-gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
  text-decoration: none;
}

.icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
}

.quals {
  padding-left: 30px;
}

.description {
  margin-bottom: 10px;
}

.about-pic {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-caption {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  color: black;
}

.about-caption-box {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(255, 255, 255, 0.59);
  transform: translateY(-150px);
  width: 80%;
  margin: auto;
  padding: 10px;
}
</style>

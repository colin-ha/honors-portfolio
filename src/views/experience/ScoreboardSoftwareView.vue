<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowLeft from '@/icons/ArrowLeft.vue'
import BoxArrowRight from '@/icons/BoxArrowRight.vue'
</script>

<template>
  <div class="keystep-container">
    <RouterLink to="/experiences" class="back-button">
      <ArrowLeft />
      <span>Back to Experiences</span>
    </RouterLink>
    <h1>DCC Scoreboard Software Developer</h1>
    <p class="details">Novi, MI &nbsp; | &nbsp;Aug 2023 - Sep 2023</p>
    <p class="main-content">
      I created integrated software to display football scores on livestreams and a scoreboard.
    </p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=ntC5Hw-cwao&list=PLycZhErHa1DbiKdPdrr7rdcgQguiwOakP&index=10"
        >
          <img
            alt="Screenshot of my scoreboard software on a live broadcast"
            src="../../assets/article-scoreboard-1.png"
          />
          <div class="overlay">
            Watch A Broadcast
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        In August of 2023, the Detroit Catholic Central Athletic Deparment reached out to me and asked if I could
        develop a special scoreboard software for use at their games. They had just purchased a very large video display
        at the Fr. Richard Elmer Stadium, and wanted some custom software to display the scores of the games. I realized
        this potential and how it could work with the media team who broadcasts games at home, and created this special
        software to enable them to display both simultaneously.
      </p>
      <h2>My Part</h2>
      <p>
        I began developing the software independently from scratch, and decided to engineer a special system that would
        allow a theoretically infinite number of scoreboards or broadcasts to connect, each displaying unique graphics.
        I further recognized the potential for this system to connect directly with the existing scoreboard control
        panel that the announcers had been familiar with and using for years, and I was able to link this into the
        program. I worked with the media directors to develop graphics, and added colorful and fun animations to bring
        the scoreboard to life.
      </p>
      <p>
        The software is still in use today years later, and has been continuing to work perfectly. I've received several
        complements from the media team and the athletic department on how well the software has worked, as well as from
        fans and viewers at home who say that the technology greatly helps them to connect to the events. I'm very proud
        of the work I did on this project, and I'm excited to continue to see it when I tune in to broadcasts or attend
        the games.
      </p>
      <br />
      <p>Read this article to see more about how my scoreboard software was integral to the media team:</p>
      <a
        href="https://www.catholiccentral.net/news/latest-news/~board/news/post/faculty-spotlight-jennifer-teed-mentors-media-students"
      >
        Read Article
      </a>
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with
        <b>systems thinking</b>
        as I was required to design this software from the ground up. I had to make several critical decisions about how
        this software would integrate into the existing workflow that the media team had been used to, and I had to
        engineer it such that it would be easy to work with for years to come. Working on this gave me so much practical
        experience with making tools that other users will interact with, and helped me to understand how to work within
        client constraints and goals.
      </p>
      <h2>The Result</h2>
      <p>
        At the opening game of the season, my scoreboard technology was debuted to thousands of excited fans, with great
        success. The software worked great,
      </p>
    </div>
  </div>
</template>

<style scoped>
.keystep-container {
  position: relative;
  padding: 20px;
  width: 90vw;
}

@media (max-width: 1040px) {
  .keystep-container {
    margin-top: 100px;
  }
}

.back-button {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: var(--color-gradient-start);
}

.back-button svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.back-button:hover svg {
  transform: translateX(-5px);
}

h1 {
  font-size: 3rem;
}

p.details {
  font-size: x-large !important;
}

p {
  font-size: larger;
}

.article-left {
  position: relative;
  width: 500px;
  float: left;
  margin: 10px;
}

.article-right {
  position: relative;
  width: 500px;
  margin-left: 20px;
  float: right;
  cursor: pointer;
}

.article-right img {
  width: 100%;
  transition: filter 0.3s ease;
}

.article-right .overlay {
  position: absolute;
  font-weight: 600;
  font-size: 4rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-right:hover img {
  filter: blur(5px);
}

.article-right:hover .overlay {
  opacity: 1;
}

.overlay-icon {
  width: 50px;
  height: 50px;
}

h2 {
  margin-top: 15px;
}
</style>

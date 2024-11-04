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
    <h1>KeyStep Tutorials YouTube Channel</h1>
    <p class="details">Farmington Hills, MI &nbsp; | &nbsp; Nov 2021 - Present</p>
    <p class="main-content">I created an automated platform and YouTube channel for piano tutorial videos.</p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a target="_blank" href="https://www.youtube.com/@keysteptutorials">
          <img alt="Screenshot of the KeyStep Tutorials YouTube Channel" src="../../assets/article-keystep-1.png" />
          <div class="overlay">
            Visit Channel&nbsp;
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        KeyStep Tutorials is a YouTube channel I've created, now with over 2,000 subscribers. The channel has almost
        5,000 videos and covers a wide variety of songs. I've written a Java program that automates the creation of
        these videos, and I've integrated a system to help me manage the channel and its content.
      </p>
      <h2>My Part</h2>
      <p>
        I came up with this idea from two main inspirations. First, I wanted to create tutorials for songs that were
        less well-known, so that everyone could learn piano with the songs they love, regardless of popularity. I play
        the piano myself, and have found these videos to be a great way to learn new songs. Second, I had already
        attempted an automated channel, which made slowed down remixes of popular songs. I noticed that every upload on
        this other channel was ineligible to monetize, since I was using copyrighted material. I decided to pivot
        towards transformative content, which I could monetize, and that's how KeyStep Tutorials was born.
      </p>
      <p>
        I had several pieces of this project which I needed to tie together. First, I had to find an available source of
        data for the songs. I found some websites which made their music available for download, and that would apply as
        transformative content for copyright purposes. I wrote technology to gather the information from these websites,
        and put them into a database I maintained. I then worked to develop a Java program that would take this data and
        create a video for each song. I also had to write a system to manage the channel, and to upload the videos
        automatically. To tie these together, I wrote a user interface that would allow me to control the system.
      </p>
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with having an
        <b>entreprenurial mindset</b>
        . In June of 2022, I received reached the goal of 1,000 subscribers, and shortly after applying, I received word
        that I was approved into the YouTube Partner Program. I then began to focus on expanding the channel so that I
        could continue to profit from my work. I worked on developing the community, upgrading the quality of the
        content, and I have now expanded my plans to include future opportunities for new types of music. I've done data
        analysis and research into the analytics I receive from YouTube, and I've used this information to continue to
        develop my business and grow its reach.
      </p>
      <img
        alt="A screenshot of some nice notifications"
        src="../../assets/article-keystep-2.png"
        class="article-left"
      />
      <h2>The Result</h2>
      <p>
        Since the channel launched, I've seen tremendous success. I have over 20,000 hours of watch time, and several
        long time viewers. Every day, I receive many wonderful comments like the ones shown here. These are from people
        who have learned to play the piano from my videos, and who are very appreciative of the tutorials I've created.
        I have also received many requests for songs, and I've been able to fulfill many of these requests. It makes me
        so happy to see how much people enjoy my work, and I'm excited to continue to grow the channel and expand it to
        new levels.
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

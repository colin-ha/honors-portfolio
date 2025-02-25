<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowLeft from '@/icons/ArrowLeft.vue'
import BoxArrowRight from '@/icons/BoxArrowRight.vue'
</script>

<template>
  <div class="onestop-container">
    <RouterLink to="/experiences" class="back-button">
      <ArrowLeft />
      <span>Back to Experiences</span>
    </RouterLink>
    <h1>123CommercialCE Website</h1>
    <p class="details">Farmington, MI &nbsp; | &nbsp; Dec 2024 - Feb 2025</p>
    <p class="main-content">I refactored an online real estate education platform for a new purpose.</p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a target="_blank" href="https://www.123commercialce.com">
          <img alt="Screenshot of the 123 Commercial CE Website" src="../../assets/screenshot-123commercialce.png" />
          <div class="overlay">
            Visit Site&nbsp;
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        123 Commercial CE is a platform for real estate agents in Michigan to complete their continuing education
        requirements, but specifically tailored to commercial real estate. To keep their license, realtors must complete
        a certain amount of coursework every year. This website allows the agents to purchase video-based courses, take
        a quiz, and be certified with the state.
      </p>
      <h2>My Part</h2>
      <p>
        The owners of this company already had an existing platform developed for them years prior, named 123 Con Ed.
        They had just entered into a new business opportunity in which they wanted to produce commercial-focused real
        estate content in partnership with a leading video educator. They decided that they wanted to brand this
        differently from their existing website and would require new features and content accordingly.
      </p>
      <p>
        I inherited this old codebase and began to learn and understand it. I realized that the existing website was
        built on a stack that I wasn't very familiar with, so I began researching and learning about the technologies
        that I would need to use. Once I was very well-versed in the codebase, I began making the graphical changes they
        had requested, and further added support for videos in the courses, and behind-the-scenes payment splitting for
        royalties to the course creators. This entire process was a very iterative design cycle where I was constantly
        incorporating feedback from the client and making changes as needed.
      </p>
      <p>The website is soon to launch officially, but is still visible now in its test state.</p>
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with
        <b>systems thinking</b>
        . It took a lot of effort to understand this existing codebase and how I would be able to work with it going
        forward, but I learned a lot about working with code that others had produced, and how to make changes to it.
        <b>Creativity</b>
        was also a must, as I had to come up with new ways to display the content and make the website more
        user-friendly and engaging for this new form of content.
      </p>
      <h2>The Result</h2>
      <p>
        I'm incredibly happy with my work so far, but unfortunately the website has not officially launched as the terms
        of the deal are being negotiated. I'm excited to see the website go live and to see how the users interact with
        the new content and features that I've added, and I'll keep you posted as the website goes live.
      </p>
    </div>
  </div>
</template>

<style scoped>
.onestop-container {
  position: relative;
  padding: 20px;
  width: 90vw;
}

@media (max-width: 1040px) {
  .onestop-container {
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

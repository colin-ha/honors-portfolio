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
    <h1>1StopConEd Website</h1>
    <p class="details">Farmington, MI &nbsp; | &nbsp; Aug 2021 - Jun 2023</p>
    <p class="main-content">
      I designed an online real estate education platform from the ground up for 1StopConEd LLC.
    </p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a target="_blank" href="https://www.1stopconed.com">
          <img alt="Screenshot of the 1Stop Website" src="../../assets/article-onestop-1.png" />
          <div class="overlay">
            Visit Site&nbsp;
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        1StopConEd is a platform for real estate agents in Michigan to complete their continuing education requirements.
        To keep their license, realtors must complete a certain amount of coursework every year. This website allows the
        agents to purchase courses, take a quiz, and be certified with the state.
      </p>
      <h2>My Part</h2>
      <p>
        The owners of this company reached out to me, and asked if I could develop a new website for them. Originally,
        they had used Weebly, and found it to be unreliable and dated. I worked to build a new website from the ground
        up, with all of their design constraints in mind. Additionally, they had a very large existing customer base.
        This meant that I had to ensure that the transition from the old website to the new one was seamless, and
        consistent.
      </p>
      <p>
        Throughout my work on this website, I was constantly iterating the development. I was able to establish the
        following development cycle:
      </p>
      <ol>
        <li>The client asked for features and pages of content.</li>
        <li>I would respond in turn by clarifying extra details and making suggestions.</li>
        <li>I developed this set of content, testing thoroughly as I went.</li>
        <li>I sent test environments to the client, they responded with more feedback, and the cycle continued.</li>
      </ol>
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with
        <b>systems thinking</b>
        . Since the existing website needed to be essentially completely scrapped, I had to design a new system from
        nothing. I spent quite some time researching the technologies and frameworks that I felt would be best for this
        project. Sometimes, this would change as the project went on and the requirements shifted.
        <b>Communicating</b>
        with the client during this process was crucial, and I learned a lot about how to manage client expectations, as
        well as to suggest features for the client that would benefit them greatly.
      </p>
      <h2>The Result</h2>
      <p>
        After many months of work, the project was finally completed. After lots of preparation, the transition process
        went very smoothly, and I was able to get the website up and running with minimal downtime. The client was very
        happy with the result, and I was able to provide them with a website that was far more reliable and
        user-friendly than their previous one. Additionally, we were able to launch several new features that the old
        website did not have, including an online quiz taking option, a full administrative console for direct control,
        and some technology to allow the client to edit the website themselves when needed. Looking back, I'm incredibly
        proud of the work I did on this project, and I'm glad that I was able to provide a great service to the client.
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

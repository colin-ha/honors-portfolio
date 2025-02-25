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
    <h1>2022 Detroit Catholic Central Drive Game</h1>
    <p class="details">Novi, MI &nbsp; | &nbsp;Jan 2022</p>
    <p class="main-content">I was the lead developer for the 2022 DCC Drive Video Game.</p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a
          target="_blank"
          href="https://www.catholiccentral.net/news/latest-news/~board/news/post/whats-up-gamers-colin-harris-22-takes-drive-to-new-dimension"
        >
          <img
            alt="Colin Harris addressing the entire school during the DRIVE assembly"
            src="../../assets/article-drivegame-2.jpg"
          />
          <div class="overlay">
            Read My Article
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        As a member of Student Activities, I took the initiative to lead and develop the 2022 Detroit Catholic Central
        Drive Game. This was a video game that was played by the entire school, and was used to promote the school's
        annual fundraising event, DRIVE. The game was a huge success, and was played by over 1,000 students and faculty
        members. It was a great way to get everyone excited about the event, and to raise awareness for the cause.
      </p>
      <h2>My Part</h2>
      <p>
        I was the lead developer for the game, and I worked with a team of students to design and build the game from
        scratch. I wanted to make this game stand out, so we made the first ever three-dimensional game in the history
        of the fundraiser. Not only that, but we created four unique games to be played each day, all with different
        themes and challenges. I was responsible for the overall design of the game, as well as the coding and testing.
        I recruited the help of some friends for artwork design and sound/audio lines.
      </p>
      <p>
        This also was the first game to use a secure server for the high scores, and we were able to track the top
        players each day. In the past, players were told to submit screenshots of their highscores to an email, but this
        had fraud concerns and was very difficult for many students. To combat this, I set up a secure server that would
        keep track of everyone's scores automatically. Players could see the current score leader live at any time, and
        the overall high score would automatically sync to the cloud after every game.
      </p>
      <p>
        Additionally, every day during the all-school assembly, I would make an address to the crowd (pictured) and
        discuss the latest happenings in the game, as well as display a trailer for the next game I was about to
        release. Everyone was very excited, and loved to hear my signature line "What's up gamers?" at the beginning of
        each speech. As scary as it was speaking to over a thousand people at once, I was able to get through and give
        some very powerful and exciting speeches.
      </p>
      <br />
      <p>Read the news article about my experience in this!</p>
      <a
        href="https://www.catholiccentral.net/news/latest-news/~board/news/post/whats-up-gamers-colin-harris-22-takes-drive-to-new-dimension"
      >
        Article Link
      </a>
      <br />
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with
        <b>Grit, Resilience, and Perseverance</b>
        as I struggled against a very serious time crunch. Development fell far behind schedule towards the end, and I
        had to make serious choices about what features would be able to stay, and which I had to keep. I worked
        tireless hours towards the end of the development to make sure the game was ready and perfected for the launch,
        and I was fortunately able to get it out on time. I also learned a lot about working with a team, and how to
        delegate tasks and responsibilities to others. I was able to encourage everyone to contribute in their own way,
        and to make sure that everyone was able to do their best work.
      </p>
      <h2>The Result</h2>
      <p>
        The game was a huge success, and was played by over 400 of the students. The server held up great under peak
        load of over 200 students at once. It was a great way to get everyone excited and to add to the enthusiasm that
        already surrounded the fundraiser. To this day, former classmates still come up to me and tell me how much they
        enjoyed the game and my speeches. It was a great experience, and I am so proud of the work that we did together.
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

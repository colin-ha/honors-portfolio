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
    <h1>FRC #5907 Team Captain</h1>
    <p class="details">Novi, MI &nbsp; | &nbsp;Aug 2018 - Apr 2022 (Captain starting Aug 2021)</p>
    <p class="main-content">I was the team captain for First Robotics Team #5907.</p>
    <hr />
    <div class="content">
      <div class="article-right">
        <a
          target="_blank"
          href="https://catholiccentral.myschoolapp.com/page/news-detail?pk=1353218&fromId=215409&siteId=1178&ssl=1"
        >
          <img alt="Team 5907 Official Team Photo in front of the school crest" src="../../assets/screenshot-frc.png" />
          <div class="overlay">
            Read About the Team
            <BoxArrowRight class="overlay-icon" />
          </div>
        </a>
      </div>
      <br />
      <h2>Overview</h2>
      <p>
        Throughout my high school years I had been a member of the First Robotics Team #5907, the CC Shambots. In my
        senior year, I had the unique privilege of being the overall team captain, leading over fifty members throughout
        our design, strategy, building, and competing. This was a very challenging and rewarding experience, and I
        learned so much about leadership, teamwork, and engineering.
      </p>
      <h2>My Part</h2>
      <p>
        I had joined the CC Shambots in the first week of my freshman year, and was so excited to get started. I used
        most of my freshman year developing special software for our team scouts to use at competitions to track other
        teams' performance. This software was used to help us make strategic decisions about who to ally with in
        matches, and how to best play the game. From there, I was named the captain of Drivetrain and Autonomous in the
        programming division in my sophomore year, and we had just begun to implement our team's first ever path-spliced
        autonomous scoring. Regrettably, the season was cut short due to the COVID-19 pandemic, and we had to cancel our
        season just days before our first competition.
      </p>
      <p>
        After a very slow year in 2021, our team had begun to recover, and I was named the overall team captain for the
        2022 season. I was so excited to lead the team, and we started off strong. Using our robot that we had intended
        to compete in 2019, we competed at the 2022 Kettering Kickoff practice competition, where our alliance won the
        entire event. This was such a huge moment for our team, and I was so proud of everyone's contributions to get so
        far.
      </p>
      <p>
        That January, we watched the game reveal video for First RAPID REACT, and we immediately got to work. I set up a
        big meeting with the entire team where we began to brainstorm ideas and figure out what we would be able to do
        in the short amount of time we had until our first competition. I then turned things over to our CAD team who
        began designing our robot digitally. This was the first year ever in team history in which we decided to pivot
        to a full, proper design cycle. The CAD team would design the entire robot first digitally, and no parts would
        be fabricated until detailed drawings were produced. It was difficult to keep the team on schedule, so I
        introduced a Kanban board to our team. This helped us to keep track of what needed to be done, and who was
        responsible for each task. This was a huge success, and we were able to keep on track and finish our robot in
        time for our first competition.
      </p>
      <br />
      <h2>Engineering Competencies</h2>
      <p>
        This project gave me great experience with
        <b>leadership</b>
        , and was arguably the first major leadership position I had been in. I learned so much about how to lead a
        team, how to keep everyone on track, and how to make sure that everyone is contributing to the best of their
        ability. Managing so many students was incredibly difficult, and was a very stressful time. However, I do
        believe that pressure makes diamonds, and I was able to rise to the occasion and lead the team to success.
      </p>
      <h2>The Result</h2>
      <p>
        While our team did not qualify for the state championship that year, we still had an incredible season and one
        of the best robots we had produced to date. Next year, the team would go on to place top three at the state
        championship and compete in the world championship in Houston. I am confident that my leadership helped to set
        the team up for success in the future, and I am so proud of the work that we did together.
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

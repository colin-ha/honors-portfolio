<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="hello">Hi! I'm Colin.</h1>
    <p class="below-hello">
      My name is Colin Harris. I'm a junior studying Computer Science at the University of Michigan. I'm in the College
      of Engineering, and the Honors Program. I've been passionate about making things since a very young age, and
      picked up software development in the seventh grade. I'm honored to show you what I've been working on, and what
      drives my love for technology!
    </p>
    <RouterLink to="/about" class="about-button">About Me</RouterLink>
    <img class="profile-picture" src="../assets/picture.png" alt="Colin Harris" />
    <p class="additional-text">
      I made this website with
      <a class="vue-link" href="https://vuejs.org">VueJS</a>
      . The source code is available on
      <a class="github-link" href="https://github.com/colin-ha">my GitHub</a>
      ! &copy;2024 Colin Harris
    </p>
  </div>
</template>

<style scoped>
.profile-picture {
  position: absolute;
  top: 100px;
  right: 0;
  max-width: 50%;
  height: auto;
}

.hello {
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
  background-position: right center;
  font-weight: 600;
}

.below-hello {
  font-size: 20px;
  font-weight: 550;
  color: var(--color-text);
  line-height: 1.5;
  text-justify: inter-word;
  transition: font-weight 0.5s;
}

.about-button {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
  background: linear-gradient(
    45deg,
    var(--color-gradient-start),
    var(--color-gradient-end),
    var(--color-gradient-hover-start),
    var(--color-gradient-hover-end)
  );
  background-size: 200% 200%;
  background-position: left center;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition:
    background-position 0.5s ease,
    transform 0.3s ease,
    font-weight 0.5s ease;
  display: flex;
  margin: 15px 200px 0px 100px;
  flex-direction: column;
  align-items: center;
}
.about-button:hover {
  background-position: right center;
  transform: scale(1.1);
  color: #2d3436;
  font-weight: 1000;
}
.additional-text {
  font-size: 16px;
  color: var(--color-text);
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--color-background);
}

.vue-link {
  color: #42b883;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.5s ease;
}
.vue-link:hover {
  color: #2c815b;
}
.github-link {
  color: #0984e3;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.5s ease;
}
.github-link:hover {
  color: #0764ad;
}
@media (max-width: 1200px) {
  .container {
    padding-top: 100px;
    padding-left: 10px;
  }

  .hello {
    font-size: 4rem;
  }

  .profile-picture {
    max-width: 50%;
    top: 120px;
    position: absolute;
  }

  .below-hello {
    font-size: 18px;
    margin-top: 10px;
    max-width: 400px;
  }

  .about-button {
    font-size: 16px;
    margin-top: 10px;
    margin-right: 0;
    max-width: 200px;
  }

  .additional-text {
    font-size: 14px;
    padding: 10px;
  }
}

@media (max-width: 700px) {
  .container {
    padding-top: 100px;
    padding-left: 10px;
  }

  .hello {
    font-size: 4rem;
  }

  .profile-picture {
    max-width: 80%;
    top: 550px;
  }

  .below-hello {
    font-size: 18px;
    max-width: 100%;
    margin-top: 10px;
  }

  .about-button {
    font-size: 16px;
    margin-top: 10px;
    margin-right: 100px;
    max-width: 400px;
  }

  .additional-text {
    font-size: 14px;
    padding: 10px;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div class="honorsplan-container">
    <div>
      <h1 class="hello">Philosophy Statement</h1>
    </div>
    <br />
    <div id="philosophyText">
      <p>
        I’ve been developing my personal philosophy throughout my entire life, and every situation leading up to now has
        led me to the same conclusions. Above all else, I have chosen to devote my life to helping others. When I was
        very young, my parents would call me the “fun maker” because I was always doing something to create fun times
        for others around me. I recall distinctly making an entire carnival in my living room with things I printed from
        PowerPoint and inviting all the neighborhood kids over to come play. Our tiny house in Dearborn barely held it
        all, but everybody loved it. As I’d clean it up, my mind would fill with ideas for what I could make next. I’ve
        always found that I experience so much joy and wonder in making these great experiences, and the happiness that
        others feel transfers directly to myself.
      </p>
      <p>
        Later in life, this would continue in a more professional sense. I’ve always found myself to be a good teacher,
        and in most every class I’ve taken, I would find ways to help others who needed assistance. I remember making
        and distributing study guides or notes, hosting my own review sessions, and directly answering questions over
        FaceTime to many of my friends. Again, I found much satisfaction and peace in helping the people close to me to
        succeed.
      </p>
      <p>
        I can clearly see this path continuing as I grow older. In my professional opportunities, I hope to be the
        person my colleagues can turn to for anything. I always try to learn a little bit each day about all sorts of
        topics, and I feel that I can use this to help others, no matter the circumstance. I always try to empathize
        with others and connect with them on a personal level, such that I can then more deeply help them through
        whatever is troubling them. I think of myself as a very extroverted person, and I tend to gain energy from
        social interactions with others. These opportunities help me to feel happy and complete in my days, and I always
        strive to make them happen more often.
      </p>
      <p>
        I understand that many people choose to go through life in a very closed off and focused manner. They may choose
        to worry only about themselves and the things laid out in front of them. I’ve decided that this isn’t the life I
        want. I always want to be a man for others, living my life to make the most positive contributions I possibly
        can. I often make time for others in ways that may stretch myself too thin, and wear me out, but I never regret
        it. I love what I do, and I find a way to do it in everything that I do.
      </p>
      <p>
        I also remind myself that everything always works out in the end. Many people I’ve worked with have been very
        down at times and worry that things are collapsing around them. Maybe they feel like they did poorly on a test,
        or some major opportunity passed them by, and they feel as though things will not get better. I calmly remind
        them that there isn’t a time in their life that hasn’t ended up just fine, they may just need to broaden their
        timeframe. I carry this same mentality over to everything I go through, even in my hardest times. I look forward
        to the light at the end of the tunnel which I always know to be there. Things really do always work out in the
        end.
      </p>
      <p>
        Respect is always earned. I always want to be respected by others, as it reflects how I respect them. I see
        every action I take as a step towards respect, or a large step away from it. Respect is hard to earn, but easy
        to lose, so I treat every decision as very important. By making this a consistent theme in my life, I’ve found
        it to become much easier to live by. I leave you with a very impactful quote in my life, funnily enough from the
        show Bojack Horseman.
      </p>
      <q>Every day it gets a little easier. But you gotta do it every day - that's the hard part.</q>
    </div>
  </div>
</template>

<style scoped>
.honorsplan-container {
  width: 90vw;
}

.hello {
  font-size: 5.7rem;
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

@media (max-width: 1040px) {
  .honorsplan-container {
    margin-top: 100px;
  }
}

#philosophyText p {
  margin-bottom: 8px;
}

#philosophyText q {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 20px;
  display: block;
  margin-left: 20px;
  margin-bottom: 50px;
}
</style>

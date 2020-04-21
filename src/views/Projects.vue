<template>
  <div class="projects">
    <h2>Projects</h2>
    <br />

    <p>
      I do lots of programming for fun. Here's a semi-random selection of those
      programs. For more, check out
      <a href="https://github.com/lsankar4033/">my Github</a>.
    </p>

    <v-container>
      <v-row v-for="project of projects" v-bind:key="project.name">
        <v-col :cols="2">
          <img class="project-img" v-bind:src="project.img" width="100px" />
        </v-col>

        <v-col :cols="10">
          <h4 v-if="project.url">
            <a :href="project.url">
              {{ project.name }}
            </a>
          </h4>
          <h4 v-else>
            {{ project.name }}
          </h4>

          <p>
            {{ project.description }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      projects: [
        {
          name: "surrogeth",
          description:
            "Tricking Ethereum tx frontrunners to do work for you. I was lucky to receive an Ethereum Foundation Grant to build this idea out.",
          url: "https://github.com/lsankar4033/surrogeth",
          img: require("../assets/github.png")
        },
        {
          name: "manabank",
          description:
            "Adding fungibility to CheezeWizards, a NFT game on Ethereum. Proud member of the CheezyVerse and a prototype for ideas I'm likely to explore further in the future.",
          url: "https://themanabank.com",
          img: require("../assets/manabank.png")
        },
        {
          name: "microverse",
          description:
            "An Ethereum land ownership game exploring some of the properties of Harberger taxes. Ran for a couple simulations with ~50 players before an Ethereum whale bought up most of the land. There are the seeds of some pretty interesting ideas here that I'll explore again in the future.",
          url: "https://www.microversegame.com",
          img: require("../assets/microverse.png")
        },
        {
          name: "pycc",
          description:
            "A tiny compiler-compiler built in Python. Done as an exercise in clear thinking and to reminisce over Michael Sipser's excellent Theory of Computation course @ MIT.",
          url: "https://github.com/lsankar4033/pycc",
          img: require("../assets/github.png")
        },
        {
          name: "truffle-watch",
          description:
            "A truffle plugin for running commands based on configurable file watchers. I originally built as an entry to the TruffleCon 2019 hackathon, but it's now become a crucial part of my workflow.",
          url: "https://github.com/lsankar4033/truffle-watch",
          img: require("../assets/truffle.svg")
        },
        {
          name: "pepedapp",
          description:
            "A meme marketplace on Ethereum. Using a simple, absurdist template (Pepe the Frog), we created a small economy of cryptocurrnecy-oriented memes. And might've annoyed some (easily-triggered) people in the process.",
          url: "https://www.pepedapp.com",
          img: require("../assets/pepedapp.jpg")
        },
        {
          name: "traffic-sim",
          description:
            "On a long road trip with my brother through the Pacific Southwest, we puzzled over the fact that traffic patterns seemed to 'oscillate' like a longitudinal wave running along the road. Could this oscillation pattern be explained just by human error in maintaining a certain distance from other cars? This project was an attempt at simulating this pattern with very simple assumptions.",
          url: "https://github.com/lsankar4033/traffic-sim",
          img: require("../assets/traffic.png")
        },
        {
          name: "whaleparty",
          description:
            "A dice-rolling game built on Ethereum using random.org as its oracle. I'm including this project here because of a fun lesson we learned in building it. Within an hour or two of launching on reddit, we found a sequence of erroneous-looking random numbers from random.org that immediately drained the ~$10k we had bankrolled the smart contract with. A semi-costly way to learn how quickly unstructured information propagates through the internet!",
          url: "https://www.whaleparty.life",
          img: require("../assets/whale.png")
        },
        {
          name: "rexpy",
          description:
            "The 'companion' project to pycc, a tiny regex parser built in python. Built as an exploration of finite automata.",
          url: "https://github.com/lsankar4033/rexpy",
          img: require("../assets/github.png")
        },
        {
          name: "tenderfeud",
          description:
            "One of my earliest 'blockchain' projects, a token-incentivized polling system that uses Tendermint for conensus.",
          url: "https://github.com/lsankar4033/tenderfeud",
          img: require("../assets/tendermint.png")
        },
        {
          name: "etherdate",
          description:
            "Another early 'blockchain' project. Cryptocollectibles issued for each day of the year. Not the most novel idea, but a great first introduction to interacting with Ethereum.",
          url: "http://etherdate.co/",
          img: require("../assets/calendar.png")
        }
      ]
    };
  }
};
</script>

<style>
@media (max-width: 768px) {
  .project-img {
    width: 50px;
  }
}
</style>

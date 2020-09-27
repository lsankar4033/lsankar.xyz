<template>
  <div id="post">
    <br />
    <h2 id="title">Unrolling Rollups: Fast pipes and smart VMs</h2>
    <br />
    <p>
    Optimism's <a href="https://medium.com/@optimismPBC/light-at-the-end-of-the-tunnel-c390a05bbcb8">recent testnet plan announcement</a>
      has a lot of people talking about L2 and rollups. For those who want to
      stay on Ethereum, L2 rollups seem like the best place to go in the
      mid-term to deal with the current congestion and scalability challenges.
      And in the long-term they may become the execution contexts that <a href="https://www.lakshmansankar.com/#/shards-as-data-availability-layers">use Eth 2 shards as data availability engines</a>.
    </p>
    <br />
    <p>
      Clearly, it's important to understand how they'll be used.
    </p>
    <br />
    <p>
      Much of the news and marketing around rollups focuses on things like
      upcoming partnerships, new TPS measurements and gas savings, or security
      properties. This information, undoubtedly, decides how the market will
      eventually consolidate, but I'm going to stay more high level in this
      piece.
    </p>
    <br />
    <p>
      Specifically, I'd like to discuss one mental model for understanding how
      different rollup projects compare in their offering.
    </p>
    <br />
    <br />

    <h3 id="title">Fast pipes and smart VMs</h3>
    <br />
    <p>
      If you step back and squint, the Ethereum network is a massive network of
      users and contracts, connected by transactions. Zooming in on a tiny part
      of that network:
    </p>
    <br />
    <img src="https://i.imgur.com/EInbFnG.png">
    <br />
    <p>
      Users (Alice and Bob) transact with each other directly, but also transact
      with contracts, which in turn 'transact' (internal transactions in
      Ethereum speak) with each other. The application ecosystem has matured as
      rapidly as it has because of a continuous new addition of users, smart
      contracts, and transactions to this network. The arrows are also the
      source of congestion. Each arrow represents additional economic overhead
      on the Ethereum network, meaning more gas usage.
    </p>
    <br />
    <p>
      The core idea of L2 is to pull subsets of this network out, to be executed
      somewhere faster and less trafficked. Each subset that is pulled out can
      then be represented as a batch of many fewer transactions on the main
      network:
    </p>
    <br />
    <img src="https://i.imgur.com/dwF5Ucn.png">
    <br />
    <p>
      Among rollup companies, there are two different mentalities for building a
      rollup ecosystem: fast pipes and smart VMs.
    </p>
    <br />
    <p>
      Fast pipe companies identify a specific type of transaction activity
      that's very high congestion today. They then build technology to pull that
      specific transaction type into their rollup. Here's what a fast pipe
      focused on user transfers might look like:
    </p>
    <br />
    <img src="https://i.imgur.com/Oh78LDx.png">
    <br />
    <p>
      This approach is particularly common among early zk-SNARK based rollups.
      <a href="https://loopring.org/#/protocol">Loopring v3</a> does this with exchange
      transactions and <a href="https://zksync.io/">Matter Labs' zkSync</a> does this with
      <a href="https://twitter.com/gitcoin/status/1305913383804305409?s=20">Gitcoin Grant payments</a>. In
      both cases, these are simple, easy-to-describe, repetitive transactions.
      No infinitely composable flash-loan mayhem is showing up on these systems
      today.
    </p>
    <br />
    <p>
      The smart VM approach, on the other hand, builds an entirely general
      computer in L2. This computer can execute *any* kind of network activity
      and can even be a place where entirely new, yet undiscovered types of
      network activity can be born:
    </p>
    <br />
    <img src="https://i.imgur.com/KjgVBqW.png">
    <br />
    <p>
      This is the approach of many of the optimistic rollup companies. Both
      <a href="https://offchainlabs.com/">Offchain Labs' Arbitrum</a> and
      <a href="https://optimism.io/">Optimism</a> are building general purpose 'VMs' in L2
      (the <a href="https://developer.offchainlabs.com/docs/AVM_Design/">AVM</a> and
      <a href="https://medium.com/ethereum-optimism/ovm-deep-dive-a300d1085f52">OVM</a>,
      respectively). Similarly, <a href="https://medium.com/starkware/hello-cairo-3cb43b13b209">Starkware's recently announced Cairo</a> puts an
      entire von-Neumann-style computer into a single zk-STARK.
    </p>
    <br />
    <p>
      Smart VMs are a bet that the best is yet to come for smart contract
      systems. That the crazy interactions we're seeing today are the tip of the
      iceberg. They want to be the place where many more of these interactions
      are born. Fast pipes, on the other hand, are focused on addressing the
      congestion problems of *today*. They want to pull the things that we know
      are high volume, like token transfers and exchange interactions, into L2
      now.
    </p>
    <br />
    <br />

    <h3 id="title">Fast pipe today, smart VM tomorrow</h3>
    <br />
    <p>
      Of course, projects don't have to choose one forever. Part of the reason
      I'm calling fast pipes 'fast' is that they're quicker to implement: some
      projects are taking the approach of building a pipe today that they hope
      to turn into a VM over time.
    </p>
    <br />
    <p>
      One example is Fuel. They're focused on high performance UTXO-based
      transfers today, but their <a href="https://docs.fuel.sh/v1.0.0/Future%20Roadmap/Planned%20Features.html">plan for Fuel v2</a>
      reveals that they'll eventually be trying to build more general
      programming primitives.
    </p>
    <br />
    <p>
      ZkSync also seem to be heading down this path. Although plans to build a
      general VM haven't been announced publicly, they've opted to use ZKP
      techniques that allow for recursion (PLONK and Redshift). This strongly
      suggests that they're deliberately keeping the VM option open.
    </p>
    <br />
    <br />

    <h3 id="title">What to follow</h3>
    <br />
    <p>
      My goal in writing these posts is to give readers more mental models for
      predicting the future of crypto. I've touched on strategy and what sorts
      of activity we may see in rollups, but I haven't really talked about how
      rollups will interact.
    </p>
    <br />
    <p>
      Will rollups be similar to shards? Economically isolated hubs of
      composable activity? Or will they look more like the existing smart
      contract network: fully composable themselves?
    </p>
    <br />
    <p>
      This question might be too early to answer satisfactorily, but there's
      already some notable work happening:
      <ul>
        <li>
          Barry Whitehat's <a href="https://ethresear.ch/t/mass-migration-to-prevent-user-lockin-in-rollup/7701">research</a> into mass migrations
        </li>

        <li>
          Connext's <a href="https://medium.com/connext/introducing-spacefold-d1c227a29d3">work</a> on inter-rollup state channels
        </li>
      </ul>
    </p>
    <br />
    <p>
      I also haven't really touched on timing and consolidation. Which projects
      are likely to be in which rollups? And as a result, which parts of the
      ecosystem can we expect to consolidate within which rollups?
    </p>
    <br />
    <p>
      This is one of the most interesting parts of the ecosystem; I expect that
      I'll touch on all of that in future posts.
    </p>
    <br />

    <em>
      Thanks to <a href="https://twitter.com/aliatiia_">Ali Atiia</a>, <a href="https://twitter.com/vaibhavchellani">Vaibhav Chellani</a>, and <a href="https://twitter.com/ObadiaAlex">Alex Obadia</a> for comments/review
    </em>
  </div>
</template>

<script>
export default {
  name: "FastPipesSmartVMs"
};
</script>

<style>
#title {
  text-align: center;
  color: #313131;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>

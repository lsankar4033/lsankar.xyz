<template>
  <div id="post">
    <br />
    <h2 id="title">Simplifying Eth 2.0: Shards as data availability layers</h2>

    <br />
    <br />

    <p>
      Whenever something changes suddenly, people start wondering what's next
      for the systems that we've put in place.
    </p>
    <br />
    <p>
      The rise of DeFi on Ethereum has brought that sort of questioning into the
      smart contract platform space. Ethereum
      <a href="https://etherscan.io/chart/gasprice">gas prices</a> are as high
      as they've ever been. All of this congestion has users and application
      developers asking the obvious question: is Ethereum the place to be?
    </p>
    <br />
    <p>
      It turns out that that's an incredibly nuanced question with a number of
      variables to take into consideration:
      <ul>
        <li>
          impending mainnet launch of a number of new L2 solutions
        </li>

        <li>
          Eth 2.0+sharding progress
        </li>

        <li>
          new, well-funded layer 1 chains like Solana/Near
        </li>

        <li>
          community/tooling inertia in Ethereum
        </li>

        <li>
          app-chain + interoperability technology like Cosmos/Polkadot
        </li>

        <li>
          the tradeoff b/w interoperability with DeFi primitives and low fees for new applications
        </li>
      </ul>
    </p>
    <br />
    <p>
      It's a lot to keep track of! It doesn't help that many of the narratives in the ecosystem are
      driven by the economic incentives of the narrators.
    </p>
    <br />
    <p>
      I want to discuss one possible future that I'm really excited about. Using Eth 2.0 shards as a data availability
      layer for L2s.
    </p>
    <br />
    <p>
      That's an incredibly jargon-y, technical phrase and that's why I think it
      hasn't gotten the love in general internet writing that
      <a href="https://haseebq.com/defi-in-eth2-cities-suburbs-and-farms/"
        >other ideas</a
      >
      have.
    </p>
    <br />
    <p>
      My hope is that this is one more mental model of the future that you'll be
      able to reference as we all navigate the next 5-10 years.
    </p>
    <br />
    <br />

    <h3 id='title'>
      What's the deal with data availability?
    </h3>
    <br />
    <p>
      'Data availability' is high on the list of important concepts that aren't
      widely understood. It's commonly used in conversation among researchers
      but I rarely see it discussed outside of that.
    </p>
    <br />
    <p>
      Rather than explain the how, I'll discuss the what of data availability.
      For more on the technical specifics (the how), there are
      <a
        href="https://github.com/ethereum/research/wiki/A-note-on-data-availability-and-erasure-coding"
        >other</a
      >
      <a
        href="https://dankradfeist.de/ethereum/2019/12/20/data-availability-checks.html"
        >excellent</a
      >
      <a href="https://arxiv.org/abs/1809.09044">resources</a>.
    </p>
    <br />
    <p>
      Data availability is a property a blockchain might have. It's helpful to
      understand what it's not in addition to what it is.
    </p>
    <br />
    <p>
      It's not any guarantee around the integrity of data on the chain. For
      example, knowing that the transactions in a block are being sent from
      senders who can afford it asks for *more* than data availability.
    </p>
    <br />
    <p>
      It *is* a guarantee that any user (including a light client) can find all
      the data in the blockchain.
    </p>
    <br />
    <p>
      Here's a visual representation of what a data availability blockchain
      gives us
    </p>
    <br />
    <img src="https://i.imgur.com/O8OnjiO.png">
    <br />
    <p>
      Just an ordered sequence of data elements without any notion of what they
      represent. It's perhaps easy to think about as an ordered, permissionless,
      append-only database.
    </p>
    <br />
    <p>
      We'd need more for a blockchain like Bitcoin or Ethereum; we need a way to
      know which transactions are valid and which aren't.
    </p>
    <br />
    <p>
      Rather than handle this *in* the blockchain, we could interpret the data
      availability blockchain within some 'execution context' that tells us
      which chunks are valid and which aren't:
    </p>
    <br />
    <img src="https://i.imgur.com/1hCj1eB.png">
    <br />
    <p>
      If we're interpreting our blockchain with 'Execution context 1', chunk 1
      represents valid data and chunk 2 represents invalid data. This execution
      context can live somewhere else, like layer 2.
    </p>
    <br />
    <p>
      The beauty of this approach to blockchains is that it completely separates
      data from execution. We can construct one chain that's really fast at
      ordering data and handle execution. We can then interpret that data
      through a layer 2 execution context, like
      <a
        href="https://medium.com/plasma-group/ethereum-smart-contracts-in-l2-optimistic-rollup-2c1cef2ec537"
        >Optimistic rollup</a
      >.
    </p>
    <br />
    <br />
    <h3 id='title'>
      Eth 2.0 shards as a data availability layer
    </h3>
    <br />
    <p>
      One possible future of Eth 2.0 sees all but one of the shards becoming
      high-throughput data availability blockchains for L2s. The exception shard
      is the same shard that eth1 will
      <a
        href="https://ethresear.ch/t/alternative-proposal-for-early-eth1-eth2-merge/6666"
        >transition into</a
      >
      and thus is the only shard that actually has an 'opinion' of what data
      represents at the consensus level.
    </p>
    <br />
    <p>
      Here's what that might look like:
    </p>
    <br />
    <img v-bind:src='require("../../assets/shards.png")' />
    <br />
    <p>
      Any worries that cross-shard transactions won't be possible are allayed in
      this future. Layer 2 can make use of *all* shards in its transactions.
      Ultimately what economic separation exists between shards is completely up
      to the L2s.
    </p>
    <br />
    <p>
      And we won't have to wait for
      <a
        href="https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-phases/"
        >Phase 2 of Eth 2.0</a
      >
      to get there. I'm hesitant to give time estimates, but this makes the
      scalable, executable Ethereum dream much more imminent.
    </p>
    <br />
    <p>
      This is, of course, just one vision. It's entirely possible that this
      world doesn't materialize, but it'll be a big deal if it does.
    </p>
    <br />
    <br />
    <h3 id='title'>
      The new protocol wars are afoot!
    </h3>
    <br />
    <p>
      We're about to enter a world of unknown unknowns as blockchains and
      scaling technologies try to self-actualize in this new high congestion
      DeFi regime.
    </p>
    <br />
    <p>
      The savvy person will consider many possibilities on a distribution and
      follow the space closely to understand what's going on as it develops. I
      hope this brief exploration of one possible future adds to the portfolio
      of futures that you're considering.
    </p>
    <br />
    <p>
      In future posts, I'll dig into a few more.
    </p>
    <br />

    <em>
      Thanks to <a href="https://twitter.com/Flynnjamm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Brian Flynn</a> and <a href="https://www.adiasg.me/">Aditya Asgaonkar</a> for comments/review.
    </em>
  </div>
</template>

<script>
export default {
  name: "ShardsAsDataAvailabilityLayers"
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

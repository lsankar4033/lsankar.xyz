export default `
<br />
<h2 id="title">The tradeoffs of cross-chain communication
</h2>
<br />
<br />
<p>
If there's one thing I've learned over the past couple years, it's that one synchronous blockspace will not be sufficient for all of the applications we'll eventually see on chain.
    </p>
  <br />
<p>
This wasn't as obvious in 2018, when the possibilities weren't as fleshed out. Last year's DeFi summer and this year's NFT summer have cemented the fact that there's a <em>lot</em> of application design space to play with. And the rise of non-Ethereum <a href="https://polygon.technology/">Layer</a> <a href="https://solana.com/">1s</a> this year has further drilled in that blockspace is in very high demand.
  </p>
<br />
<p>
Given that we're likely to live in a 'multi-chain' world and applications on different chains will want to communicate with one another, it's valuable to understand how the connective tissue between chains will work.  I want to explore one angle of this in an abstract sense, without necessarily picking on a single project.
  </p>
<br />
<p>
In this post, I want to examine a specific tradeoff inherent in these systems. It's a tradeoff that's kinda obvious when you reflect on it.
  </p>
<br />
<p>
I'm also standing on the shoulders of giants in presenting it; it's spelled out in <a href="https://iohk.io/en/research/library/papers/sokcommunication-across-distributed-ledgers/">excellent paper</a> by Zamyatin et al. I aim to just put some more color behind the core statement of that paper.
    </p>
  <br />
  <p>
  The tradeoff, in the words of the paper's authors, is that cross-chain communication is impossible without either:
    </p>
  <p>
  1. a trusted third party (TTP)
  </p>
  <p>
  2. OR a synchrony assumption beyond asynchrony
  </p>
  <br />
  <p>
  The relationship between these is fundamental and quite intuitive, but requires digging through a little bit of jargon. I hope to make the intuition clear here.
    </p>
  <br />
  <br />
  <h3 id="title">Making sense of the theory
  </h3>
  <br />
  <p>
  Let's talk a bit about synchrony assumptions. They're a common framework for thinking about communication in distributed systems and are criminally not well-understood.
    </p>
  <br />
  <p>
  Think of a distributed system as a message-passing protocol that needs to work in spite of failures or adversaries in the communication infrastructure. We can then define how bad those failures can get before the system stops working. This is exactly what these synchrony assumptions aim to do.
    </p>
  <br />
  <p>
  A system that functions under the 'synchronous' assumption assumes that messages can only be delayed by the network/adversaries by some known fixed upper bound.
    </p>
  <br />
  <p>
  A system that functions under the 'asynchronous' assumption, on the other hand, assumes that the network/adversaries can delay messages by <em>any</em> finite amount of time.
    </p>
  <br />
  <p>
  The latter is more robust. It says that a system is better with dealing with the uncertainties introduced by the environment. There are also 'middle ground' assumptions that are usually called 'partial synchrony', but that's not necessary to define here.
    </p>
  <br />
  <p>
  How does this relate to cross-chain communication? Well, the aforementioned paper shows that if you have a system that implements asynchronous cross-chain communication, you could use it to solve an older problem called <a href="https://en.wikipedia.org/wiki/Multi-party_fair_exchange_protocol">'fair exchange'</a>. And we know from a <a href="https://www.cs.utexas.edu/~shmat/courses/cs395t_fall04/pagnia.pdf">much older paper</a> that <em>asynchronous fair exchange is impossible without a trusted third party (TTP)</em>.
    </p>
  <br />
  <p>
  Therefore, asynchronous cross-chain communication is impossible without a TTP. And we can only give up this requirement on a TTP by having a more stringent synchrony assumption on the system.
    </p>
  <br />
  <br />
  <h3 id="title">Theory -> reality
  </h3>
  <br />
  <p>
  This has all been very theoretical so far. Let's talk about real systems.
    </p>
  <br />
  <p>
  From the previous section, we know that to communicate a message between two chains, we either:
    </p>
  <p>
  1. can't assume a completely asynchronous system
  </p>
  <p>
  2. OR need a TTP
  </p>
  <br />
  <p>
  What <em>really</em> are the tradeoffs here? It might be helpful to compare systems that require a TTP with those that require a stronger synchrony assumption.
    </p>
  <br />
  <p>
  TTPs seem well understood. A TTP is just a 'lower security/decentralization' middleman that exists between the two chains. Cross-chain systems that rely on a validator set separate from the two chains they're bridging are an example of this.
    </p>
  <br />
  <p>
  A stronger synchrony assumption manifests as something like retry logic or a timeout. Hash time locked contracts (HTLCs) are an illustrative example. A few years ago, hash time locked contracts were considered <em>the</em> important primitive for cross-chain communication. In HTLCs, the stronger synchrony assumption manifests as necessary retry logic or a <a href="http://diyhpl.us/wiki/transcripts/stanford-blockchain-conference/2019/htlcs-considered-harmful/">free option problem</a>.
      </p>
    <br />
    <p>
    In the previous section, I stated that systems with minimal synchrony assumptions were better at dealing with uncertainties in the environment. In the case of something like a HTLC, the communication can fail if there's a strong financial incentive to make the communication fail. Like a market maker who wants to block or delay the value transfer because they hold certain assets in both venues.
      </p>
    <br />
    <p>
    A strong enough financial incentive in the environment can make the communication fail.
      </p>
    <br />
    <p>
    This last point is sorta true of systems that require a TTP though! In that case, the TTP needs to be trusted to have a financial incentive to maintain the integrity of the bridge. The difference is in how the financial incentive to block a communication is expressed.
      </p>
    <br />
    <p>
    I believe there's a natural duality here. Either you have to trust a lower security 'middleman' or you need to trust that the communication won't be disrupted.
      </p>
    <br />
    <p>
    If the cross-chain communication introduces juicy enough <a href="https://hackmd.io/ivUzk3piQEG8ALzCGbxlag">MEV</a>, the communication might fail in either case! Either because the TTP goes corrupt or because a big enough market maker makes it fail.
      </p>
    <br />
    <br />
    <h3 id="title">Examples in the wild
    </h3>
    <br />
    <p>
    How do modern cross-chain communication systems distribute across this tradeoff? There are <a href="https://medium.com/1kxnetwork/blockchain-bridges-5db6afac44f8">more comprehensive articles</a> out there that categorize all systems; I'll juts look at a few illustrative examples here.
        </p>
      <br />
      <p>
      <a href="https://github.com/connext/nxtp">Connext's nxtp</a> is a classic example of a cross-chain system that adds a stronger synchrony assumption. Once users have finished their negotiation with routers, there's a two phase prepare/fulfill mechanism for completing the appropriate transactions on both sides of the bridge. If the communication doesn't happen within a timeout, it doesn't happen.
        </p>
      <br />
      <p>
      On the other hand, the <a href="https://wormholenetwork.com/en/">Wormhole bridge</a> between Solana and Ethereum introduces a TTP. The 'guardian' validator set that exists between the two chains is required to make a 2/3 majority attestation about a transfer for it to be carried through. If this set is corrupted or (collectively) doesn't want a transfer to go through, it won't.
        </p>
      <br />
      <p>
      One thing that needs stressing is that neither approach is universally better. Marketing material from systems on either side of this tradeoff will claim that they're making the 'right' tradeoff, but as stated before, both tradeoffs present a way in which these systems can fail.
        </p>
      <br />
      <p>
      There are also some systems that make one of these tradeoffs less obviously. My favorite example is the <a href="https://hackmd.io/ivUzk3piQEG8ALzCGbxlag">Optimism DAI bridge for fast withdrawals</a>. The TTP here is the Maker DAO itself! Users require the DAO to provide DAI liquidity and thus integrity to the proposed fDAI asset.
        </p>
      <br />
      <p>
      It's kinda odd to think of a DAO as a TTP, but if we consider that anything with <em>less</em> robust security than the chains communicating is 'trusted' relative to them, a DAO can serve this purpose! I'm personally excited to see more DAOs taking on the role of TTP for facilitating cross-chain communications.
          </p>
        <br />
      <br />
      <h3 id="title">Onwards
      </h3>
      <br />
      <p>
      The future looks multi-chain and facilitating communication between chains will present real opportunity for those ready for it. It's important for those of us using these new systems to understand the tradeoffs they're making.
        </p>
      <br />
      <p>
      In this post, I examined one fundamental tradeoff, between strong synchrony assumptions and trusted third parties (TTPs). The boundaries between chains are very interesting to me, so I'll dive into other facets in future ones.
        </p>
      <br />
      <p>
      As is true in everything I write, if this stuff is interesting to you, feel free to get in touch! I love pushing deeper into the unknown.
        </p>
      <br />

<em>
      Thanks to <a href="https://twitter.com/vaibhavchellani">Vaibhav Chellani</a>, and <a href="https://twitter.com/ObadiaAlex">Alex Obadia</a> for the discussions leading to this piece and their helpful editorial review.
    </em>
`;

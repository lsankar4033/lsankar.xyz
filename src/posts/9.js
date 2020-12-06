export default `
<br />
<h2 id="title">On decentralized Eth2 staking pools
</h2>
<br />
<br />
<p>
Eth2 genesis has <a href="https://beaconcha.in/block/0">happened</a>.
</p>
<br />
<p>
The birth of a new chain is an exciting thing. So early in its life, it's hard to know what the eventual relevance of a chain will be, but there's plenty of reason to think that Eth2 could house a great deal of what we call the Ethereum ecosystem one day.
</p>
<br />
<p>
Participating in Eth2 as a staker now is high risk/high reward. The inflation rewards are high while the total stake is low, but you're locking up an asset that has real use (ETH) for one that currently doesn't (bETH) and won't until a number of technical advances are made over the next year or so (please, don't quote me on that).
</p>
<br />
<p>
And you can only participate in 32 ETH increments, which at the time of writing is ~$19000. Not money that everyone can afford to play around with.
</p>
<br />
<p>
Decentralized staking pools have been popping up to make it possible for smaller users to get involved. I'd like to examine how these pools work.
</p>
<br />
<br />

<h3 id='title'>
How do they work?
</h3>
<br />
<p>
Feature sets and specifics in design vary, but the 10,000 foot view of decentralized staking pools is something like this:
</p>
<br />


<img src="https://i.imgur.com/bljGe83.png">
<br />
<p>
Users deposit ETH into a pool contract that keeps track of who deposited how much. They're awarded an ERC20 token based on how much they've deposited.
</p>
<br />
<p>
Node providers register their Eth2 pubkey in the pool contract. Once enough user ETH is pooled, the pool contract makes a deposit in the Eth2 deposit contract specifying a node provider's Eth2 pubkey for validation. The node provider can now run a validator staking that deposit.
</p>
<br />
<p>
The pool contract keeps track of who is ultimately rewarded which ETH once/if Eth1 and Eth2 merge. This can be partially done via the ERC20 token; holding <em>X</em> of the ERC20 token corresponds to <em>Y</em> ETH at the time of merge.
</p>
<br />
<p>
Users get yields that aren't quite what they would've received had they staked their ETH themselves; some of this is taken as a fee for node providers. Users ultimately participate because they can participate with much lower stake sizes. And node providers are able to collect fees for running validator infrastructure *without* having to put up the ETH. It's a win-win.
</p>
<br />
<p>
Unfortunately, any pools that are live on mainnet today have a point of massive centralization due to the way withdrawals work.
</p>
<br />
<br />

<h3 id='title'>
Why withdrawals to Eth1 are important
</h3>
<br />
<p>
How do you know, as a node provider or user of a staking pool, that you'll be awarded the consolidated asset when Eth1 and Eth2 merge? After all, the merge hasn't happened yet and the technicals aren't completely set in stone.
</p>
<br />
<p>
The reality lies in an important piece of data that is stored with any deposit made to the Eth2 deposit contract: the <a href="https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/deposit-contract.md#withdrawal-credentials">withdrawal credentials</a>. This piece of data serves as a commitment that Eth2 validators are expected to follow in deciding who is ultimately given access to all ETH accrued by its deposit.
</p>
<br />
<p>
As of this post's writing, the withdrawal credentials can *only* correspond to Eth2 pubkeys (BLS pubkeys). Of course, when Eth1 and Eth2 merge, operations between Eth1 and Eth2 pubkeys can happen on-chain, but there's no way for Eth1 contracts or accounts to be specified as the withdrawer today.
</p>
<br />
<p>
Thus, the withdraw flow from the staking pool will look like this:
</p>
<br />

<img src="https://i.imgur.com/pxFA4v7.png">
<br />
<p>
This creates a point of centralization at the withdrawal of staking pool ETH. Someone needs to operate those withdrawal validators and custody funds before users and node providers are compensated. Furthermore, those users and node providers are implicitly trusting that the entity controlling those validators will repay them properly!
</p>
<br />
<p>
This is a massive risk and I'd be really suspicious of any staking pool that's live on mainnet today for that reason. Whether they like it or not, they're implicitly promising to properly pay users back at some point in the future.
</p>
<br />
<p>
Now, what if you could specify an Eth1 address to withdraw to? Now the staking pool can specify a smart contract to withdraw to rather than an Eth2 validator:
</p>
<br />

<img src="https://i.imgur.com/sRi4emm.png">
<br />
<p>
Because this withdrawal contract can be written *today*, users can understand its logic and know that they will be paid out properly if the merge happens properly. They don't have to rely on good behavior of the company that wrote the pool contract. Furthermore, no one has to custody the funds at withdraw time, reducing some centralization/regulatory risk.
</p>
<br />
<p>
Fortunately, making Eth1 addresses specifiable at deposit time is actively <a href="https://ethresear.ch/t/simple-eth1-withdrawals-beacon-chain-centric/8256">being worked on</a>. Note that this is more of a social consensus than technical problem right now. It amounts to getting enough agreement around how to set Eth1 withdrawal addresses today (i.e. via an <a href="https://eips.ethereum.org/">EIP</a> that the community trust the future merge implementers to adhere to it.
</p>
<br />
<p>
Many of the more prudent staking pool projects are delaying launch for this reason. It's the smart decision for users.
</p>
<br />
<br />

<h3 id='title'>
The Eth2 staking ecosystem is coming
</h3>
<br />
<p>
Phase 0 is officially under way and with it will come a new ecosystem of products, tools, and businesses. Just as is true in the rest of crypto, DYOR! Be cautiously optimistic when playing with new technology.
</p>
<br />
<p>
Decentralized staking pools make it possible for users with <32ETH to participate in Eth2, but beware that any that are live on mainnet today are not as decentralized as they seem. Until the community agrees on how to do Eth1 withdrawals, any others that show up won't be either.
</p>
<br />
<p>
And I'd be remiss if I didn't mention that the EF is looking to support people building for the staking community. If you're interested, apply <a href="https://ethereum.org/en/eth2/get-involved/staking-community-grants/">here</a> or reach <a href="https://twitter.com/lakshmansankar">out to me directly</a>.
</p>
<br />
`;

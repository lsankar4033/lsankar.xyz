<template>
  <div id="post">
    <br />
    <h2 id="title">Changing one thing at a time</h2>

    <br />
    <br />

    <p>
      "[What's it take to be a good programmer?]"
    </p>
    <br />
    <p>
      Thinking like a scientist; changing one thing at a time.
    </p>

    <br />

    <p>
      That's according to
      <a href="https://en.wikipedia.org/wiki/Brad_Fitzpatrick"
        >Brad Fitzpatrick</a
      >
      in
      <a href="https://en.wikipedia.org/wiki/Coders_at_work">Coders at Work</a>.
      Arguably one of the best programmers around. It's one of those statements
      that's profound because of its simplicity. To build complex systems, you
      must make incremental changes serially that get you where you need to go.
    </p>

    <br />

    <p>
      It wasn't obvious to me before I became someone who programs a lot that
      you couldn't parallelize this. Fitzpatrick's approach is inherently
      serial; change one thing, then change another thing, then change another
      thing. That loop should become as fast as possible, but parallelization of
      changes is extremely risky when you're dealing with something complex. Any
      program worth your time is too complex to hold in your head all at once.
      The amount of the program you need to hold in your head at a time when
      trying to solve problems A and B in parallel is more than the sum of the
      amounts needed for each of A and B alone. In fact, it's probably
      super-linear; all kinds of pair-wise complexity starts showing up with big
      programs.
    </p>

    <br />

    <p>
      I know people who say they work in a multi-threaded manner. When each
      thread is lightweight, this is probably possible. It's unlikely that any
      of them are programming all day (or at least, not well).
    </p>

    <br />

    <p>
      One more skill implied with this framing: turning a desired 'direction'
      into a series of small changes. To be honest, I still struggle with this.
      Especially when I feel distracted. On days where I've programmed, I doubt
      that all of the time spent at the keyboard was moving me in the direction
      I intended to head in at the beginning of the day.
    </p>

    <br />

    <p>
      The way this usually manifests is spending all day fixing or refactoring
      random things that seem catch my eye. It's easy to find problems to solve
      without a direction, but important work only happens when there's a
      direction.
    </p>

    <br />

    <p>
      I'm not quite ready to make the obvious generalization that relates the
      memory-intensiveness of work to its parallelizability, but the case seems
      clear with programming.
    </p>

    <br />

    <p>
      Thanks Brad.
    </p>
  </div>
</template>

<script>
export default {
  name: "ChangingOneThingAtATime"
};
</script>

<style>
#title {
  text-align: center;
  color: #313131;
}
</style>

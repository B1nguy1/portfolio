<script>
  import Timeline from "$lib/components/Timeline.svelte";
  // @ts-ignore
  import { educations } from "$lib/data/educations.ts";
  import RoundMarker from "$lib/icons/RoundMarker.svelte";
  import scrollToElement from "$lib/utils/scrollElement.js";
</script>

<main>
  <div class="hero">
    <h1>Ben Huy Van Nguyen</h1>
    <div>
      <p>Frontendutvikler</p>
    </div>
    <button
      class="scroll-button"
      onclick={() => scrollToElement("timeline-section")}
      aria-label="Scroll til tidslinje"
    >
      <RoundMarker />
    </button>
  </div>

  <section class="timeline-section">
    <h2>Utdanninger</h2>
    <Timeline items={educations} />
  </section>
</main>

<style>
  .hero {
    text-align: center;
    margin-bottom: 4rem;
  }

  .hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    letter-spacing: -1px;
  }

  .hero p {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .timeline-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .timeline-section h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
    color: #333;
  }
</style>

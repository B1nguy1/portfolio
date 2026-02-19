<script>
  import Timeline from "$lib/components/Timeline.svelte";
  import Card from "$lib/components/Card.svelte";
  import { TypeWriter } from "svelte-typewrite";

  let { data } = $props();
</script>

<main>
  <div class="hero">
    <TypeWriter
      texts={[
        `Hei og 
        velkommen til min nettside!
         Jeg er Ben og jobber som frontendutvikler.
         Liker å bruke fritiden på reising, spille padel eller løpe.
        Det var alt for nå.`,
      ]}
    />
  </div>

  <section id="educations-section" class="section">
    <h2>Utdanninger</h2>
    <Timeline items={data.educations} />
  </section>

  <section id="projects-section" class="section">
    <h2>Prosjekter</h2>
    <div class="projects-grid">
      {#each data.projects as project}
        <Card title={project.title} description={project.description} />
      {/each}
    </div>
  </section>
</main>

<style>
  main {
    max-width: 1400px;
    margin: 0 1rem;
    padding: 0 1rem;
  }

  .hero {
    text-align: center;
    margin: 6rem 0 8rem 0;
    padding: 0 1rem;
  }

  .section {
    max-width: 1200px;
    margin: 0 auto 6rem auto;
    padding: 2rem 1rem;
  }

  .section h2 {
    text-align: center;
    margin: 0 0 2rem 0;
    color: #333;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .hero {
      margin: 4rem 0 6rem 0;
    }

    .section {
      padding: 3rem 1rem;
      margin-bottom: 4rem;
    }
  }
</style>

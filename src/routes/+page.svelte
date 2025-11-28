<script>
  import Timeline from "$lib/components/Timeline.svelte";
  import Card from "$lib/components/Card.svelte";
  // @ts-ignore
  import { educations } from "$lib/data/educations.ts";
  // @ts-ignore
  import { projects } from "$lib/data/projects.ts";
  import { TypeWriter } from "svelte-typewrite";
</script>

<main>
  <div class="hero">
    <h1>Ben Huy Van Nguyen</h1>
    <p class="subtitle">Frontendutvikler</p>
    <TypeWriter
      texts={[
        `Yoo!
        Velkommen til min nettside!
         Jeg er Ben og jobber som frontendutvikler.
         Liker å bruke fritiden på reising, spille padel eller løpe.
        Denne nettsiden ble laget av kjedsomhet, men også fordi jeg ville teste
        ut Cursor.
        Det var alt for nå.`,
      ]}
    />
  </div>

  <section id="timeline-section" class="section">
    <h2>Utdanninger</h2>
    <Timeline items={educations} />
  </section>

  <section class="section">
    <h2>Prosjekter</h2>
    <div class="projects-grid">
      {#each projects as project}
        <Card title={project.name} description={project.description} />
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

  .hero h1 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    margin: 0 0 1rem 0;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #333 0%, #666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 500;
    color: #666;
    margin: 0 0 2rem 0;
    letter-spacing: 0.5px;
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
    letter-spacing: -1px;
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

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>

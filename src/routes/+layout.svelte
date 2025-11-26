<script>
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Ben Huy Van Nguyen - Frontendutvikler</title>
</svelte:head>

<div class="layout">
  <main>
    {@render children()}
  </main>
</div>

<footer>
  <p>&copy; 2025. Laget i SvelteKit.</p>
</footer>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #fafafa;
  }
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  footer {
    display: flex;
    justify-content: center;
    padding: 2rem;
    color: #666;
    background: #fff;
    margin-top: 4rem;
  }
</style>

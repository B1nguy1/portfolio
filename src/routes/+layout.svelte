<script>
  import "../app.css";

  let { children } = $props();
</script>

<div class="layout">
  <main>
    {@render children()}
  </main>
</div>

<footer>
  <p>
    Ben Huy Van Nguyen &copy; 2025. <a
      href="https://no.linkedin.com/in/ben-huy-van-nguyen-6281b2199"
      style="text-decoration:underline;">LinkedIn</a
    >
  </p>
</footer>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    margin: 0;
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

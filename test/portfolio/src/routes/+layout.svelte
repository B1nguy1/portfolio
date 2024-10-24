<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte"
    import "../app.postcss";
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />
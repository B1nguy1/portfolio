<script lang="ts">
    import Link from "./Link.svelte";
    import { navigationLinks } from "$lib/utils/links";

    
</script>

<nav class="header">
    <Link href={"/"}>
        <span class="title">{"B1nguy1".toUpperCase()}</span>
    </Link>
    <div class="nav-container">
        <div class="nav-items">
            {#each navigationLinks as link}
                {#if link.link !== undefined}
                <Link href={link.link}>
                    {link.title}
                </Link>
                {:else}
                    {link.title}
                {/if}
                
            {/each}
        </div>
    </div>
</nav>

<style>
    .header {
        display:flex;
        width:100%;
        color:white;
        background-color: black;
        padding-bottom: 20px;
        padding-top: 10px;
        margin-right: 20px;
    }
    .nav-container {
        width: 100%;
    }
    .nav-items {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        margin-right: 20px;
    }
    .title {
        padding-left: 10px;
    }
</style>
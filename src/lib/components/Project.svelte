<script lang="ts">
    import type { Project } from "$lib/types";
    import Link from "./Link.svelte";
    export let data : Project;
   
</script>

<div class="card-container">
    <p>{data.title}</p>
    <p>{data.year}</p>
    {#if data.link !== undefined}
        <Link href={data.link.url}>{data.link.title}</Link>
    {/if}
    <div>
        <p>
            {data.description}
        </p>
    </div>

</div>

<style>
    .card-container {
        padding: 10px;
        background-color:grey;
        border: 1px black solid;
        width: 300px;
        margin-left: 20px;
    }
    p{
        color: white;
    }
</style>
<script lang="ts">
    import Project from "$lib/components/Project.svelte";
    import { projects } from "$lib/utils/projects";
    
</script>
<div class="card">
    <h2>
        Projects
    </h2>
    <div class="card-wrapper">
        {#each projects as project}
            <Project data={project}/>
        {/each}
    </div>    
</div>

<style>
    .card{
       position: relative;
       margin-top: 30px;
    }
    h2{
        text-align: center;
    }
    .card-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 0.2fr);
        justify-content: center;
        gap: 10px;
    }

</style>


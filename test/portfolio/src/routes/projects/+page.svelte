<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { client } from "$lib/sanityClient";
    import type { Project } from "$lib/types";
    
    export let projects: Project[] = [];

    client.fetch(`*[_type == "projects"]{
        title, 
        description, 
        start_date
    }`).then(data => {
        projects = data;
    })
    .catch(console.error);

</script>
<div class="card">
    <h2>
        Projects
    </h2>
    <div class="card-wrapper">
        {#each projects as project}
            <ProjectCard data={project} />
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


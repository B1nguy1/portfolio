<script lang="ts">
    import Project from "$lib/components/Project.svelte";

    const projects = [
        {
            title: "GradeCalc",
            year: "2022",
            link: {
                title: "GitHub",
                url:"https://github.com/B1nguy1/GradeCalc",
            },
            description: "A calculator application to find GPA built with JavaFX as frontend."
        },
        {
            title: "Geza",
            year: "2022",
            description: "Bachelor thesis product written in React Native with TypeScript and Firebase."
        },
        {
            title: "christmas-countdown",
            year: "2024",
            link: {
                title: "GitHub",
                url: "https://github.com/B1nguy1/christmas-countdown",
            },
            description: "Verri basic Svelte application made to learn Svelte basics."
        }
    ]
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


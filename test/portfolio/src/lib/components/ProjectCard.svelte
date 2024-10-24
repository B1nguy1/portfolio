<script lang="ts">
    import type { Project } from "$lib/types";

    export let data: Project;
   
</script>

<div class="card-container">
    <p>{data.title}</p>
    <p>{data.start_date}</p>
    <div>
        <span>
            {data.description}
        </span>
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
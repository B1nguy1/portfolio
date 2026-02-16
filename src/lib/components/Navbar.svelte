<script lang="ts">
    interface Props {
        title: string;
    }

    let { title }: Props = $props();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
</script>

<div class="container">
    <div class="wrapper">
        <h1>{title}</h1>
        <nav class="nav">
            <button
                class="scroll-btn"
                onclick={() => scrollTo("educations-section")}
                >Utdanninger</button
            >
            <button
                class="scroll-btn"
                onclick={() => scrollTo("projects-section")}>Prosjekter</button
            >
        </nav>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 30px;
    }
    .nav {
        display: flex;
        gap: 1rem;
    }
    .scroll-btn {
        padding: 0.5rem 1rem;
        background-color: inherit;
        border: none;
        gap: 1000px;
        cursor: pointer;
    }
</style>

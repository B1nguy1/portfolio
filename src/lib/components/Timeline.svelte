<script lang="ts">
    import Card from "./Card.svelte";

    interface TimelineItem {
        year: string;
        title: string;
        description?: string;
        company?: string;
    }

    interface Props {
        items: TimelineItem[];
    }

    let { items }: Props = $props();
</script>

<div class="timeline">
    {#each items as item}
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <Card
                year={item.year}
                title={item.title}
                description={item.description}
                company={item.company}
            />
        </div>
    {/each}
</div>

<style>
    .timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 0;
    }

    .timeline::before {
        content: "";
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: black;
    }
    .timeline-item {
        position: relative;
        padding-left: 4rem;
        margin-bottom: 3rem;
    }

    .timeline-item:last-child {
        margin-bottom: 0;
    }

    .timeline-marker {
        position: absolute;
        left: 12px;
        top: 0.5rem;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        border: 3px solid #333;
        z-index: 1;
    }
</style>

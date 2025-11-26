<script lang="ts">
    interface Props {
        name: string;
        description?: string;
        year?: string;
    }

    let { name, description, year } = $props();
</script>

<div class="card-container">
    <div class="card-header">
        <h3 class="card-name">
            {name}
        </h3>
        {#if year}
            <span class="card-year">
                {year}
            </span>
        {/if}
        <p>
            {description}
        </p>
    </div>
</div>

<style>
    .card-container {
        background: #fff;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 0.75rem;
        gap: 1rem;
    }

    .card-name {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
    }

    .card-year {
        font-size: 0.875rem;
        color: #666;
        font-weight: 500;
        white-space: nowrap;
    }

    .card-description {
        margin: 0;
        color: #555;
        line-height: 1.6;
    }
</style>

<script lang="ts">
    interface CardItem {
        year?: string;
        title: string;
        description?: string;
        company?: string;
    }

    let { year, title, description, company }: CardItem = $props();
</script>

<div class="card-container">
    <div class="card-year">
        <span>{year}</span>
    </div>
    <h3 class="card-title">
        {title}
    </h3>
    <div class="card-company">
        {#if company}
            <span>{company}</span>
        {/if}
    </div>
    <div class="card-description">
        {#if description}
            <span>
                {description}
            </span>
        {/if}
    </div>
</div>

<style>
    .card-container {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .card-year {
        display: inline-block;
        font-size: 0.875rem;
        font-weight: 600;
        color: #666;
        margin-bottom: 0.5rem;
        padding: 0.25rem 0.75rem;
        background: #f5f5f5;
        border-radius: 4px;
    }
    .card-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
    }
    .card-company {
        color: #666;
        margin-bottom: 0.5rem;
    }
    .card-description {
        margin: 0.75rem 0 0 0;
        color: #555;
        line-height: 1.5;
    }
</style>

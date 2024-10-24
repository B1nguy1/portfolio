<script lang="ts">
    import github from "$lib/assets/github.svg";
    import linkedin from "$lib/assets/linkedin.svg";
    import Link from "./Link.svelte";
    import { footerLinks } from "$lib/utils/links";

    
</script>

<footer>
    <div class="container">
        <div class="footer-content">
            {#each footerLinks as link}
            <Link href={link.link}> 
                {#if link.title === "Github"}
                    <img alt={link.title} src={github} width="50px"/>
                {:else if link.title === "Linkedin"}
                    <img alt={link.title} src={linkedin} width="50px"/>
                {/if}
            </Link>
            {/each}
        </div>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        margin-top: 32px;
        padding-bottom: 2.5rem;
        background-color: grey;
        position: fixed;
        bottom: 0;
        
    }
    .container {
        display:flex;
        justify-content: center;
        margin-left: 4px;
        margin-right: 4px;
      
    }
    .footer-content{
        margin-top: 1.25rem;
        flex-direction: column;
        padding-left: 10px;
    }
    a{
        margin-left: 15px;
    }
</style>
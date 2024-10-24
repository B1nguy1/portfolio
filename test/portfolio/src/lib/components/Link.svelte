<script lang="ts">
    export let href: string | undefined;
</script>


<a href={href} target="_self"><slot/></a>

<style>
    a {
    color: white;
    background-color: transparent;
    text-decoration: none;
}
</style>
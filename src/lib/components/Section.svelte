<script>
    let { children } = $props();
</script>

<div class="section">
    {@render children()}
</div>

<style>
    .section {
        min-height: 100vh;
        background: rgb(20, 20, 20);
        padding: 20px
    }
</style>
<script>
    let { style="gray", center=false, children } = $props();
</script>

<div class="section {style} {center ? "center" : ""}">
    {@render children()}
</div>

<style>
    .section {
        min-height: 100vh;
        padding: 20px;
        box-sizing: border-box;
    }

    .gray {
        background-color: rgb(180,180,180);
    }

    .black {
        background-color: rgb(10, 10, 10);
    }

    .black :global(h1), .black :global(h2){
        color: white;
    }

    .section :global(h1){
        font-family: 'BDO Grotesk', sans-serif;
        font-weight: 700;
        color: black;
        text-decoration: underline;
        text-decoration-color: blue;
        text-decoration-thickness: 7px;
        font-size: 5rem;
    }

    .center {
        display: grid;
        align-items: center;
        justify-content: center;
    }
</style>
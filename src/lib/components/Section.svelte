<script>
    let {name, style="gray", layout="flex", size="normal", children } = $props();
</script>

<div class="section {style} {layout} {size}" id="{name}">
    {@render children()}
</div>

<style>
    .section {
        min-height: 100vh;
        padding: 20px;
        box-sizing: border-box;
    }

    .gray {
        background-color: rgb(200, 200, 200);
    }

    .black {
        background-color: rgb(10, 10, 10);
    }

    .black :global(h1), .black :global(h2), .black :global(p){
        color: white;
    }

    .black :global(h3){
        color: rgb(175 175 175);
    }

    .normal {
        min-height: 75vh;
    }

    .section :global(h1){
        font-family: 'BDO Grotesk', sans-serif;
        font-weight: 700;
        color: black;
        font-size: 5rem;
    }

    .section.gray :global(.left-side) {
        background-color: rgb(200, 200, 200);
    }

    .section.black :global(.left-side) {
        background-color: rgb(10, 10, 10);

    }

    .center {
        display: grid;
        align-items: center;
        justify-content: center;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
        .section :global(h1){
            font-size: 3rem;
        }
    }
</style>
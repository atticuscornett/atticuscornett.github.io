<script>
    import {projects} from "$lib/ProjectDetails";
    import Section from "$lib/components/Section.svelte";
</script>

<a href="/"><h1>atticus cornett.</h1></a>
<h2 class="subtitle">// Projects</h2>
{#each projects as project, i (project.name)}
    <Section style="{(i % 2 === 0) ? 'black' : 'gray'}" name="project-{i}">
        <div class="left-side">
            <h3>{String(i + 1).padStart(2, '0')}</h3>
            <h2 class="underline green-underline">{project.name}</h2>
        </div>
        <div class="right-side">
            <div class="screenshot-container">
                {#each project.screenshotSrcs as screenshotSrc, j (project.name + '-img' + j)}
                    <img src={screenshotSrc} alt="{project.name} Screenshot {j + 1}" class="screenshot">
                {/each}
            </div>

            <p>{project.description}</p>
        </div>
    </Section>
{/each}

<style>
    h1 {
        padding-left: calc(1rem + 20px);
        font-family: "BDO Grotesk", sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-decoration: underline blue 7px;
    }

    a {
        color: black;
        text-decoration: none;
    }

    .subtitle {
        padding-left: calc(1rem + 20px);
        font-family: Iptex, monospace;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .screenshot {
        width: 30vh;
        min-width: 400px;
        height: auto;
        border-radius: 7px;
        margin-bottom: 1.5rem;
    }

    .screenshot-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 1.5rem;
        margin-top: 4rem;
    }
</style>
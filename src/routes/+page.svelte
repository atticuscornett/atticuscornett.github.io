<script>
import Section from "$lib/components/Section.svelte";
</script>

<Section center={true}>
    <div>
        <h2>i am</h2>
        <h1>atticus cornett.</h1>
    </div>
</Section>
<Section style="black">
    <h3>01</h3>
    <h2>About Me</h2>
</Section>
<Section>
    <h3>02</h3>
    <h2>Projects</h2>
</Section>
<Section style="black">
    <h3>03</h3>
    <h2>Contact</h2>
</Section>

<style>
    h2 {
        font-family: 'Noto Serif', serif;
        font-weight: 300;
        font-style: italic;
        margin: 0;
        font-size: 3rem;
    }

    h1 {
        margin: 0;
    }
</style>
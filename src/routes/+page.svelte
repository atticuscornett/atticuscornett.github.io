<script>
import {onMount} from "svelte";
import Section from "$lib/components/Section.svelte";
import {projects} from "$lib/ProjectDetails";

const featuredProjects = projects.filter((project) => project.featured);
let featuredProject = $state(featuredProjects[0]);

onMount(() => {
    const randomIndex = Math.floor(Math.random() * featuredProjects.length);
    featuredProject = featuredProjects[randomIndex];
});
</script>

<Section name="introduction" layout="center">
    <div class="introduction">
        <h2 class="head">i am</h2>
        <h1 class="underline">atticus cornett.</h1>
        <h3>// software developer<br>
            // student @ Troy University</h3>
    </div>
</Section>
<Section name="about-me" style="black">
    <div class="left-side">
        <h3>01</h3>
        <h2 class="underline red-underline">About Me</h2>
    </div>
    <div class="right-side">
        <p>
            I am <span class="italic">Atticus Cornett</span>,
            a software developer currently studying Computer Science at Troy University.
            I have experience with a number of programming languages & frameworks, including JavaScript, Java, Python,
            C++, Svelte, Capacitor, and more.
            I have numerous <span class="italic">open-source</span> projects that receive active maintenance and development
            (<a href="#projects" class="light-link">see below</a>) - some of which have received years of support and have been downloaded thousands of times.
            I love to learn new technologies and build things that are real, functional, and useful.
            If I sound like someone you would like to work with, <a href="#contact" class="light-link">please reach out!</a>
        </p>
    </div>
</Section>
<Section name="projects">
    <div class="left-side">
        <h3>02</h3>
        <h2 class="underline green-underline">Projects</h2>
    </div>
    <div class="right-side">
        <div class="featured-project-container">
            <div class="featured-project-header">
                <h3 class="italic">Featured Project</h3>
                <div class="featured-project-title">
                    <img src={featuredProject.iconSrc} alt="Project Icon" class="inline-icon">
                    <h2 class="inline-text">{featuredProject.name}</h2>
                </div>
                <h3>Tech Stack: {featuredProject.technologies.join(", ")}</h3>
                <br>
                {#if featuredProject.projectRepo}
                    <a class="top-margin button-style" href={featuredProject.projectRepo} rel="external" target="_blank">View Repository</a>
                {/if}
                {#if featuredProject.projectSite}
                    <a class="button-style" href={featuredProject.projectSite} rel="external" target="_blank">View {featuredProject.name} Website</a>
                {/if}
            </div>
            <img class="featured-project-image" src={featuredProject.screenshotSrcs[0]} alt="{featuredProject.name} Screenshot">
        </div>
        <p>
            {featuredProject.description}
        </p>
        <a class="button-style positive-dark bottom-margin" href="/projects">See All Projects</a>
    </div>
</Section>
<Section name="contact" style="black">
    <div class="left-side">
        <h3>03</h3>
        <h2 class="underline yellow-underline">Contact</h2>
    </div>
    <div class="right-side">
        <h2 class="contact-header">Let's get in touch!</h2>
        <p>
            You can find me on <a href="https://github.com/atticuscornett" rel="external" target="_blank" class="light-link">GitHub</a>
            and <a href="https://www.linkedin.com/in/atticus-cornett/" rel="external" target="_blank" class="light-link">LinkedIn</a>.
            If you prefer, you can also reach out to me directly using the form below. I look forward to hearing from you!
        </p>

        <form action="https://forms.un-static.com/forms/3bcb926c6f6afaf85183f7631e6ebee4df861f9b" method="POST">
            <label>
                Name<span class="red">*</span><br>
                <input type="text" name="name" required>
            </label>
            <br>

            <label>
                Organization<br>
                <input type="text" name="organization">
            </label>
            <br>

            <label>
                Email<span class="red">*</span><br>
                <input type="email" name="email" required>
            </label>
            <br>

            <label>
                Message<span class="red">*</span><br>
                <textarea name="message" required></textarea>
            </label>
            <br>
            <button class="button-style" type="submit">Send</button>

            <label class="special">
                Website<br>
                <input type="text" name="website" tabindex="-1" autocomplete="off">
            </label>
            <br>
        </form>
    </div>
</Section>

<style>
    label {
        color: white;
        font-family: Iptex, monospace;
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
    }

    button {
        cursor: pointer;
    }

    label input {
        background: black;
        border: none;
        border-bottom: gray 0.2rem solid;
        color: white;
        font-weight: 400;
        width: 50rem;
        max-width: 75vw;
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 5px;
        padding: 0 0.5rem 0 0.5rem;
        font-family: "Noto Serif", serif;
    }

    label input:focus-visible {
        outline: none;
        border-bottom: white 0.2rem solid;
    }

    .special {
        opacity: 0;
        position: absolute;
        top: -9999px;
        left: -9999px;
        height: 0;
        width: 0;
        z-index: -1;
    }

    .red {
        color: red;
    }


    .introduction {
        padding-left: 1rem;
        box-sizing: border-box;
    }

    .head {
        font-family: "Noto Serif", serif;
        font-weight: 600;
        font-style: italic;
        margin: 0;
        font-size: 3rem;
    }

    .underline {
        text-decoration: underline;
        text-decoration-color: blue;
        text-decoration-thickness: 7px;
    }

    .red-underline {
        text-decoration-color: red;
    }

    .green-underline {
        text-decoration-color: limegreen;
    }

    .yellow-underline {
        text-decoration-color: yellow;
    }

    .italic {
        font-family: "Noto Serif", serif;
        font-style: italic;
        font-weight: 400;
    }

    .light-link {
        color: rgb(160 160 160);
        font-family: "Noto Serif", serif;
        font-style: italic;
        font-weight: 400;
    }

    .inline-icon {
        display: inline;
        height: 4rem;
        width: 4rem;
    }

    .inline-text {
        display: inline;
        margin-left: 1rem;
        vertical-align: ideographic;
    }

    .featured-project-container {
        display: flex;
        padding-top: 4rem;
        flex-wrap: wrap;
        row-gap: 20px;
    }

    .featured-project-header {
        flex-basis: 60%;
        flex-grow: 1;
        width: 100%;
    }

    .featured-project-image {
        flex-basis: 40%;
        flex-grow: 1;
        width: 100%;
        min-width: 250px;
        height: auto;
        align-self: baseline;
        border-radius: 7px;
    }

    .featured-project-title {
        display: flex;
        align-items: center;
    }

    .contact-header {
        font-family: "Noto Serif", serif;
        font-style: italic;
        margin-top: 3.5rem;
    }

    .top-margin {
        margin-top: 1rem;
    }

    .bottom-margin {
        display: inline-block;
        margin-bottom: 3rem;
    }

    textarea {
        background: black;
        border: 0.2rem solid gray;
        margin-top: 1rem;
        width: 50rem;
        max-width: 75vw;
        padding: 0.5rem;
        border-radius: 5px;
        resize: none;
        color: white;
        min-height: 10rem;
        font-size: 1.1rem;
        outline: none;
        font-family: "Noto Serif", serif;
    }

    textarea:focus-visible {
        outline: none;
        border: 0.2rem solid white;
    }
</style>
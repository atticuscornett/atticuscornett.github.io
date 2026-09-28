<script>
import Section from "$lib/components/Section.svelte";
import AtmosWeather from "$lib/assets/AtmosWeather.svg";
import placeholder from "$lib/assets/placeholder.jpg";
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
                    <img src={AtmosWeather} alt="Project Icon" class="inline-icon">
                    <h2 class="inline-text">Atmos Weather</h2>
                </div>

                <h3>Tech Stack: Svelte, CapacitorJS, Java</h3>
            </div>
            <img class="featured-project-image" src={placeholder} alt="Project Screenshot">
        </div>


        <p>
            This is where I need to put a small description of the app.
            There will be some additional metrics above that show the tech stack and stuff.
            I am going to continue writing here to show what it would look like with a short description.
        </p>
    </div>
</Section>
<Section name="contact" style="black">
    <div class="left-side">
        <h3>03</h3>
        <h2 class="underline yellow-underline">Contact</h2>
    </div>
    <div class="right-side">
        <p>
            Github
            LinkedIn
        </p>
    </div>
</Section>

<style>
    h1 {
        margin: 0;
    }

    h2 {
        font-family: 'BDO Grotesk', sans-serif;
        font-weight: 500;
        font-size: 3.5rem;
        margin: 0;
    }

    h3 {
        font-family: "Iptex", monospace;
        font-weight: 400;
        font-size: 2rem;
        margin: 0;
        color: rgb(50, 50, 50);
    }

    p {
        font-size: 2.25rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
        font-family: BDO Grotesk, sans-serif;
    }


    .introduction {
        padding-left: 1rem;
        box-sizing: border-box;
    }

    .head {
        font-family: 'Noto Serif', serif;
        font-weight: 300;
        font-style: italic;
        margin: 0;
        font-size: 3rem;
    }

    .left-side {
        box-sizing: border-box;
        align-self: flex-start;
        padding-left: 1rem;
        padding-right: 1rem;
        position: sticky;
        top: 0;
        flex-basis: 30%;
        flex-grow: 1;
        padding-top: 0.5rem;
    }

    .right-side {
        box-sizing: border-box;
        flex-grow: 1;
        flex-basis: 70%;
        padding-right: 1rem;
        padding-left: 1rem;
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
        margin-top: 1rem;
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
        min-width: 350px;
    }

    .featured-project-title {
        display: flex;
    }
</style>
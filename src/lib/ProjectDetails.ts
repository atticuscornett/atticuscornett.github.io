import AtmosWeather from "$lib/assets/icons/AtmosWeather.svg";
import placeholder from "$lib/assets/placeholder.jpg"

export interface ProjectDetails {
    name: string;
    description: string;
    technologies: string[];
    iconSrc: string;
    screenshotSrcs: string[];
    projectSite: string | null;
    projectRepo: string | null;
    featured: boolean;
}

export const projects: ProjectDetails[] = [
    {
        name: "Atmos Weather",
        description: "Atmos Weather is a cross-platform mobile and desktop weather app built with Svelte, Electron, and Capacitor. " +
            "It is focused on providing total customization in ways that most weather apps don't, while also respecting user privacy. " +
            "Users can monitor multiple locations, customize the app's appearance, and control what notifications to receive. " +
            "Atmos Weather has been downloaded thousands of times, and has received continuous support since its launch in 2022.",
        technologies: ["Svelte", "JavaScript", "Electron", "Capacitor", "Java"],
        iconSrc: AtmosWeather,
        screenshotSrcs: [
            placeholder
        ],
        projectSite: "https://atticuscornett.github.io/AtmosWeather/",
        projectRepo: "https://github.com/atticuscornett/AtmosWeather",
        featured: true,
    }];
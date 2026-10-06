import AtmosWeather from "$lib/assets/icons/AtmosWeather.svg";
import mimacro from "$lib/assets/icons/mimacro.png";
import Archway from "$lib/assets/icons/Archway.svg";
import placeholder from "$lib/assets/placeholder.jpg"

import AtmosWeatherScreenshot1 from "$lib/assets/screenshots/AtmosWeatherScreenshot1.png";
import AtmosWeatherScreenshot2 from "$lib/assets/screenshots/AtmosWeatherScreenshot2.png";
import AtmosWeatherScreenshot3 from "$lib/assets/screenshots/AtmosWeatherScreenshot3.png";
import AtmosWeatherScreenshot4 from "$lib/assets/screenshots/AtmosWeatherScreenshot4.png";

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
            AtmosWeatherScreenshot1,
            AtmosWeatherScreenshot2,
            AtmosWeatherScreenshot3,
            AtmosWeatherScreenshot4
        ],
        projectSite: "https://atticuscornett.github.io/AtmosWeather/",
        projectRepo: "https://github.com/atticuscornett/AtmosWeather",
        featured: true,
    },
    {
        name: "mimacro",
        description: "mimacro is an app that enables users to turn a microcontroller into a low-cost, customizable macro pad. " +
            "Supported devices can be automatically detected and configured - no coding required, eliminating the knowledge " +
            "barrier associated with most microcontroller macro solutions. It also features a plugin system that allows users " +
            "to extend the app's core functionality and allows developers to add support for new workflows.",
        technologies: ["Svelte", "Javascript", "Electron", "ArduinoC"],
        iconSrc: mimacro,
        screenshotSrcs: [
            placeholder
        ],
        projectSite: "https://atticuscornett.github.io/mimacro/",
        projectRepo: "https://github.com/atticuscornett/mimacro",
        featured: true,
    },
    {
        name: "Archway",
        description: "Archway is a simple backup and archive tool that can automatically copy or move files to external drives. " +
            "Archway allows not only standard scheduled backups, but also archives that start when a drive is connected. " +
            "Built with customizability in mind, Archway can be configured to run multiple backup and archive tasks, each with their own settings. " +
            "Each task can run on a separate schedule or a trigger and have file filters.",
        technologies: ["Rust", "Tauri", "Svelte", "Javascript"],
        iconSrc: Archway,
        screenshotSrcs: [
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder,
            placeholder
        ],
        projectSite: "https://atticuscornett.github.io/archway/",
        projectRepo: "https://github.com/atticuscornett/archway",
        featured: true,
    }
];
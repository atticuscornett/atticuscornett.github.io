import { animate } from "motion";

export function revealTitle(parent: HTMLElement) {
    const node = parent.firstElementChild as HTMLElement | null;
    if (!node) return;

    node.style.opacity = "0";
    node.style.transform = "translateY(24px)";

    let isVisible = false;

    const observer = new IntersectionObserver(
        ([entry]) => {
            // Entrance Animation
            if (!isVisible && entry.intersectionRatio >= 0.2) {
                isVisible = true;
                animate(node, { opacity: 1, y: 0 }, { duration: 0.6, ease: "easeOut" });
            }
            // Exit Animation
            else if (isVisible && entry.intersectionRatio === 0) {
                isVisible = false;
                animate(node, { opacity: 0, y: 24 }, { duration: 0.01 });
            }
        },
        { threshold: [0, 0.2] } // Fire at 0% and 20% visibility
    );

    observer.observe(node);

    return () => observer.disconnect();
}
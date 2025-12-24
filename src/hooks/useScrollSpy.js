import { useEffect, useState } from "react";

export default function useScrollSpy({ sectionIds = [], threshold = 0.2 }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerEntries = new Map();

    const updateActiveId = () => {
      // Find the section that's most visible in the viewport
      let maxVisibility = 0;
      let mostVisibleId = "";

      observerEntries.forEach((entry, id) => {
        if (entry.isIntersecting) {
          // Calculate how much of the element is visible
          const visibility = entry.intersectionRatio;
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleId = id;
          }
        }
      });

      // If no section is intersecting, find the closest one based on scroll position
      if (!mostVisibleId) {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            mostVisibleId = id;
          }
        }
      }

      if (mostVisibleId) {
        setActiveId(mostVisibleId);
      }
    };

    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          observerEntries.set(id, entry);
          updateActiveId();
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: "-10% 0px -70% 0px",
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      observerEntries.clear();
    };
  }, [sectionIds, threshold]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeId;
}

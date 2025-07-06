import { useEffect, useState } from "react";

export default function useScrollSpy({ sectionIds = [], threshold = 0.2 }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
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

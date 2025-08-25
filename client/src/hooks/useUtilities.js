import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to elements
 * @returns {Function} scrollToElement function
 */
export const useScrollTo = () => {
  const scrollToElement = useCallback((elementId, options = {}) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        ...options,
      });
    }
  }, []);

  return scrollToElement;
};

/**
 * Custom hook for file downloads
 * @returns {Function} downloadFile function
 */
export const useFileDownload = () => {
  const downloadFile = useCallback((filePath, fileName) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.setAttribute("aria-label", `Download ${fileName}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return downloadFile;
};

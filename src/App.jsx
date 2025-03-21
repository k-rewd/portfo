import { useRef, useState, useEffect } from "react";
import "./styles.css";
import Home from "./sections/Home/Home";
import ProjectA from "./sections/Projects/ProjectA";

export default function App() {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1);
  const totalPages = 3

  // Scroll function
  const scrollToNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  const scrollToPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
  };

  const scrollToLast = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth - containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Track the current page number based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const newPage = Math.round(containerRef.current.scrollLeft / window.innerWidth) + 1;
        setPage(newPage);
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="container" ref={containerRef}>
        <Home />
        <ProjectA />
        <ProjectA />
      </div>
      <span className="button-page-indicator">
        <div className="nav-buttons">
          <button
            className='nav-button left'
            onClick={page === 1 ? scrollToLast : scrollToPrev}
            // disabled={page === 1}
          >
            &lt;
          </button>
          <button
            className={`nav-button right ${page === totalPages ? "disabled" : ""}`}
            onClick={scrollToNext}
            disabled={page === totalPages}
          >
            &gt;
          </button></div>
        <div className="page-indicator">0{page}</div>
      </span>
    </div>
  );
}


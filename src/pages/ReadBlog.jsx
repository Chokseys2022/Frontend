import React, { useEffect, useState } from "react";

function ReadBlog() {
  const [selectedSection, setSelectedSection] = useState("");
  const [showMoreContent, setShowMoreContent] = useState({
    dance: false,
    fam: false,
    thought: false,
    food: false
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setSelectedSection(hash);
      }
    }
  }, []);

  const toggleShowMoreContent = (section) => {
    setShowMoreContent(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div>
      <h1>READ BLOG</h1>
      <section id="dance-section" className={selectedSection === "#dance-section" ? "active" : ""}>
        <h2>Dance Section</h2>
        <p onClick={() => toggleShowMoreContent('dance')}>
          This is the content related to dance.
          {showMoreContent.dance && (
            <span>
              Additional details about dance...
            </span>
          )}
        </p>
      </section>
      <section id="fam-section" className={selectedSection === "#fam-section" ? "active" : ""}>
        <h2>Family Section</h2>
        <p onClick={() => toggleShowMoreContent('fam')}>
          This is the content related to family.
          {showMoreContent.fam && (
            <span>
              Additional details about family...
            </span>
          )}
        </p>
      </section>
      <section id="thought-section" className={selectedSection === "#thought-section" ? "active" : ""}>
        <h2>Thought Section</h2>
        <p onClick={() => toggleShowMoreContent('thought')}>
          This is the content related to thoughts.
          {showMoreContent.thought && (
            <span>
              Additional details about thoughts...
            </span>
          )}
        </p>
      </section>
      <section id="food-section" className={selectedSection === "#food-section" ? "active" : ""}>
        <h2>Food Section</h2>
        <p onClick={() => toggleShowMoreContent('food')}>
          This is the content related to food.
          {showMoreContent.food && (
            <span>
              Additional details about food...
            </span>
          )}
        </p>
      </section>
    </div>
  );
}

export default ReadBlog;

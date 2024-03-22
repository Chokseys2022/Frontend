import React, { useEffect, useState } from "react";

function ReadBlog() {
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(hash);
    }
    }
  }, []);

  return (
    <div>
      <h1>READ BLOG</h1>
      <section id="dance-section" className={selectedSection === "#dance-section" ? "active" : ""}>
        <h2>Dance Section</h2>
        <p>This is the content related to dance.</p>
      </section>
      <section id="fam-section" className={selectedSection === "#fam-section" ? "active" : ""}>
        <h2>Family Section</h2>
        <p>This is the content related to family.</p>
      </section>
      <section id="thought-section" className={selectedSection === "#thought-section" ? "active" : ""}>
        <h2>Thought Section</h2>
        <p>This is the content related to thoughts.</p>
      </section>
      <section id="food-section" className={selectedSection === "#food-section" ? "active" : ""}>
        <h2>Food Section</h2>
        <p>This is the content related to food.</p>
      </section>
    </div>
  );
}

export default ReadBlog;

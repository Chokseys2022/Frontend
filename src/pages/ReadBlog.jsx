import React, { useState } from "react";

function ReadBlog() {
  const [selectedSection, setSelectedSection] = useState("");

  const renderContent = () => {
    switch (selectedSection) {
      case "dance":
        return (
          <div>
            <h2 className="section-title">Dance Section</h2>
            <p className="section-content">
              This is the content related to dance.
            </p>
          </div>
        );
      case "family":
        return (
          <div>
            <h2 className="section-title">Family Section</h2>
            <p className="section-content">
              This is the content related to family.
            </p>
          </div>
        );
      case "reflection":
        return (
          <div>
            <h2 className="section-title">Reflection Section</h2>
            <p className="section-content">
              This is the content related to reflection.
            </p>
          </div>
        );
      case "food":
        return (
          <div>
            <h2 className="section-title">Food Section</h2>
            <p className="section-content">
              This is the content related to food.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="read-blog-container">
      <h1 className="blog-title">READ BLOG</h1>
      <div>
        <button onClick={() => setSelectedSection("dance")}>Dance</button>
        <button onClick={() => setSelectedSection("family")}>Family</button>
        <button onClick={() => setSelectedSection("reflection")}>Reflection</button>
        <button onClick={() => setSelectedSection("food")}>Food</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default ReadBlog;

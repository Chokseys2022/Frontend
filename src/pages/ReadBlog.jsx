import React, { useState } from "react";
import "../App.css"; // Import the CSS file for styling

const ReadBlog = () => {
  const [selectedSection, setSelectedSection] = useState("");

  const renderContent = () => {
    switch (selectedSection) {
      case "fitness":
  return (
    <div>
      <h2 className="section-title">Fitness Section</h2>
      <p>BLAH blaah blah</p>
      <div className="subsection">
        <h3>Subsection 1</h3>
        <p>Additional information about Fitness Subsection 1.</p>
      </div>
      <div className="subsection">
        <h3>Subsection 2</h3>
        <p>Additional information about Fitness Subsection 2.</p>
      </div>
      <p className="section-content">
        FITNESS euismod risus nec bibendum interdum. Suspendisse et arcu sed nisi efficitur dapibus. Cras nec placerat quam, sed gravida eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo nibh id tristique bibendum. Nulla facilisi. Nullam nec magna nec purus dictum placerat. Sed eleifend erat quis urna elementum ultricies. Nulla facilisi. Phasellus sed sapien vel purus dictum sodales ut in purus. Cras non velit sed mauris eleifend lacinia. Morbi dapibus, sem non dignissim aliquet, leo tortor laoreet turpis, vel venenatis leo nulla ut elit. Fusce placerat tincidunt nisi sed viverra. Proin pretium lorem sit amet magna dignissim, a tincidunt ipsum pharetra. In hac habitasse platea dictumst. Nam interdum vehicula nisl, at congue risus vehicula id.
      </p>
    </div>
        );
        case "family":
          return (
            <div>
              <h2 className="section-title">Family Section</h2>
              <div className="subsection">
                <h3>Subsection 1</h3>
                <p>Additional information about Family Subsection 1.</p>
              </div>
              <div className="subsection">
                <h3>Subsection 2</h3>
                <p>Additional information about Family Subsection 2.</p>
              </div>
              <p className="section-content">
                FAMILY euismod risus nec bibendum interdum. Suspendisse et arcu sed nisi efficitur dapibus. Cras nec placerat quam, sed gravida eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo nibh id tristique bibendum. Nulla facilisi. Nullam nec magna nec purus dictum placerat. Sed eleifend erat quis urna elementum ultricies. Nulla facilisi. Phasellus sed sapien vel purus dictum sodales ut in purus. Cras non velit sed mauris eleifend lacinia. Morbi dapibus, sem non dignissim aliquet, leo tortor laoreet turpis, vel venenatis leo nulla ut elit. Fusce placerat tincidunt nisi sed viverra. Proin pretium lorem sit amet magna dignissim, a tincidunt ipsum pharetra. In hac habitasse platea dictumst. Nam interdum vehicula nisl, at congue risus vehicula id.
              </p>
            </div>
        );
        case "reflection":
          return (
            <div>
              <h2 className="section-title">Reflection Section</h2>
              <div className="subsection">
                <h3>Subsection 1</h3>
                <p>Additional information about Reflection Subsection 1.</p>
              </div>
              <div className="subsection">
                <h3>Subsection 2</h3>
                <p>Additional information about Reflection Subsection 2.</p>
              </div>
              <p className="section-content">
                REFLECTION euismod risus nec bibendum interdum. Suspendisse et arcu sed nisi efficitur dapibus. Cras nec placerat quam, sed gravida eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo nibh id tristique bibendum. Nulla facilisi. Nullam nec magna nec purus dictum placerat. Sed eleifend erat quis urna elementum ultricies. Nulla facilisi. Phasellus sed sapien vel purus dictum sodales ut in purus. Cras non velit sed mauris eleifend lacinia. Morbi dapibus, sem non dignissim aliquet, leo tortor laoreet turpis, vel venenatis leo nulla ut elit. Fusce placerat tincidunt nisi sed viverra. Proin pretium lorem sit amet magna dignissim, a tincidunt ipsum pharetra. In hac habitasse platea dictumst. Nam interdum vehicula nisl, at congue risus vehicula id.
              </p>
            </div>
        );
        case "food":
          return (
            <div>
              <h2 className="section-title">Food Section</h2>
              <div className="subsection">
                <h3>Subsection 1</h3>
                <p>Additional information about Food Subsection 1.</p>
              </div>
              <div className="subsection">
                <h3>Subsection 2</h3>
                <p>Additional information about Food Subsection 2.</p>
              </div>
              <p className="section-content">
                FOOD euismod risus nec bibendum interdum. Suspendisse et arcu sed nisi efficitur dapibus. Cras nec placerat quam, sed gravida eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent commodo nibh id tristique bibendum. Nulla facilisi. Nullam nec magna nec purus dictum placerat. Sed eleifend erat quis urna elementum ultricies. Nulla facilisi. Phasellus sed sapien vel purus dictum sodales ut in purus. Cras non velit sed mauris eleifend lacinia. Morbi dapibus, sem non dignissim aliquet, leo tortor laoreet turpis, vel venenatis leo nulla ut elit. Fusce placerat tincidunt nisi sed viverra. Proin pretium lorem sit amet magna dignissim, a tincidunt ipsum pharetra. In hac habitasse platea dictumst. Nam interdum vehicula nisl, at congue risus vehicula id.
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
      <div className="section-buttons">
        <button onClick={() => setSelectedSection("fitness")} className={selectedSection === "fitness" ? "active" : ""}>Fitness</button>
        <button onClick={() => setSelectedSection("family")} className={selectedSection === "family" ? "active" : ""}>Family</button>
        <button onClick={() => setSelectedSection("reflection")} className={selectedSection === "reflection" ? "active" : ""}>Reflection</button>
        <button onClick={() => setSelectedSection("food")} className={selectedSection === "food" ? "active" : ""}>Food</button>
      </div>
      <div className="section-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default ReadBlog;

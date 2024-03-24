import React, { useState } from "react";
import "../App.css"; 

const ReadBlog = () => {
  const [selectedSection, setSelectedSection] = useState("");

  const renderContent = () => {
    switch (selectedSection) {
      case "fitness":
  return (
    <div>
      <h2 className="section-title">Fitness Section</h2>
      <h3>Exploring Fitness: Journey to a Healthier You</h3>
      <p>Dive into the world of fitness with articles covering various workout routines, from cardio to strength training. Explore tips for staying motivated, advice on proper form, and insights into nutrition for optimal performance. Whether you're a seasoned athlete or just starting your fitness journey, there's something here to help you break a sweat and reach your goals.</p>
      <div className="subsection">
        <h3>Why Fitness Matters</h3>
        <p>Engaging in fitness isn't just about sculpting your body; it's a journey toward holistic well-being. It's about embracing movement that invigorates your spirit, strengthens your body, and nourishes your mind. From the exhilaration of a morning run to the serenity of a yoga session, fitness offers a pathway to self-discovery and empowerment. It's a commitment to prioritizing your health, setting goals, and overcoming challenges with resilience and determination. Whether you're a seasoned athlete pushing your limits or a beginner taking your first steps, the journey of fitness is a deeply personal one, filled with triumphs, setbacks, and moments of profound growth.</p>
      </div>
      <div className="subsection">
        <h3>Fitness and Well Being</h3>
        <p>Prioritizing fitness in our lives is paramount to achieving overall well-being and vitality. It's not merely about physical appearance but about cultivating resilience, discipline, and a positive mindset. Regular exercise not only strengthens our bodies but also boosts our mood, sharpens our focus, and enhances our quality of life. By investing in our health and fitness, we empower ourselves to lead more fulfilling lives, capable of tackling life's challenges with vigor and grace. Fitness isn't just a routine; it's a lifestyle that fosters longevity, vitality, and a profound sense of self-confidence.</p>
      </div>
      <p className="section-content">
        
      </p>
    </div>
        );
        case "family":
          return (
            <div>
              <h2 className="section-title">Family Section</h2>
              <div className="subsection">
                <h3>Importance of Family</h3>
                <p>Family is the cornerstone of our lives, providing us with a sense of belonging, support, and unconditional love. It's within the embrace of family that we learn the values of empathy, compassion, and resilience. From the laughter shared around the dinner table to the quiet moments of bonding over shared experiences, family nurtures our souls and shapes our identities. It's a source of strength during times of adversity and a wellspring of joy during moments of celebration. Whether bound by blood or chosen through kinship, the bonds of family are a testament to the enduring power of love and connection.</p>
              </div>
              <div className="subsection">
                <h3>Fostering Family Ties</h3>
                <p>Family is the bedrock upon which our lives are built, providing us with a sense of belonging, security, and identity. It's within the embrace of family that we learn the values of love, respect, and resilience, shaping us into the individuals we become. Nurturing familial bonds enriches our lives, offering a support network during times of adversity and a source of joy during moments of celebration. Cultivating strong family ties strengthens our emotional well-being, fosters a sense of community, and instills in us a deep appreciation for the bonds of kinship. In a fast-paced world, the importance of family cannot be overstated; it's where we find solace, understanding, and unconditional love.</p>
              </div>
              <p className="section-content">
              <h3>Celebrating Family: The Heart of Our Lives</h3>
              Family is the cornerstone of our lives, and this hashtag celebrates the bonds that tie us together. From heartwarming anecdotes to practical advice on navigating the complexities of family dynamics, discover stories that resonate with the joys and challenges of kinship. Whether it's tales of sibling rivalry, parental wisdom, or cherished family traditions, there's a wealth of experiences waiting to be shared under this hashtag.
              </p>
            </div>
        );
        case "reflection":
          return (
            <div>
              <h2 className="section-title">Reflection Section</h2>
              <div className="subsection">
                <h3>The Art of Reflection</h3>
                <p>In the hustle and bustle of daily life, taking time for introspection is a nourishing act of self-care. Reflection allows us to pause, breathe, and delve into the depths of our thoughts and emotions. It's a journey inward, where we confront our fears, acknowledge our vulnerabilities, and celebrate our strengths. Through reflection, we gain clarity, perspective, and a deeper understanding of ourselves and the world around us. It's a practice of mindfulness that fosters growth, resilience, and compassion. Whether journaling our thoughts, meditating in quiet contemplation, or engaging in meaningful conversations, reflection is a sacred space for self-discovery and personal transformation.</p>
              </div>
              <div className="subsection">
                <h3>Finding Meaning in Reflection</h3>
                <p>In the midst of life's busyness and noise, the practice of reflection offers a vital pause for self-discovery and personal growth. Taking time to reflect allows us to gain clarity, perspective, and insight into our thoughts, feelings, and motivations. It's a journey of introspection that fosters self-awareness, emotional resilience, and empathy towards others. By carving out space for reflection, we cultivate a deeper understanding of ourselves and our place in the world, empowering us to make intentional choices and live more purposefully. In a society that often values productivity over presence, the importance of reflection cannot be understated; it's where we find meaning, authenticity, and inner peace amidst life's complexities.</p>
              </div>
              <p className="section-content">
                <h3>Contemplating Life: Navigating the Depths of Reflection</h3>
              Take a moment to ponder life's big questions and engage in deep introspection with the #reflection hashtag. Explore personal essays that delve into the human experience, philosophical musings on the nature of existence, and poignant reflections on moments of triumph and adversity. From profound insights to moments of vulnerability, this hashtag invites you to contemplate the richness and complexity of the human condition.
              </p>
            </div>
        );
        case "food":
          return (
            <div>
              <h2 className="section-title">Food Section</h2>
              <div className="subsection">
                <h3>Cooking as Therapeutic:</h3>
                <p>Cooking has a unique ability to soothe the mind and nourish the soul. Engaging in the rhythmic motions of chopping, stirring, and seasoning can be incredibly therapeutic, providing a welcome respite from the stresses of daily life. For many, the act of creating something delicious from scratch offers a sense of accomplishment and empowerment. Moreover, the sensory experience of working with ingredients – the aroma of herbs, the texture of dough beneath your fingers, the sizzle of ingredients in a pan – can be grounding and centering. In the kitchen, one can find solace in the simplicity of the task at hand, losing oneself in the creative process and finding joy in the act of nurturing oneself and others. Whether it's kneading dough, simmering a hearty stew, or baking a batch of cookies, cooking offers a form of self-care that nourishes both body and spirit.</p>
              </div>
              <div className="subsection">
                <h3>Cooking with Kids as Fun:</h3>
                <p>Cooking with kids is not only a delightful bonding experience but also a joyful journey of discovery and learning. From the moment they don tiny aprons and wield miniature spatulas, children are captivated by the magic of the kitchen. Cooking together fosters creativity, encourages experimentation, and instills in them valuable life skills from an early age. Whether they're measuring ingredients, mixing batter, or decorating cupcakes with colorful sprinkles, every moment spent in the kitchen is filled with laughter, curiosity, and a sense of wonder. Moreover, cooking with kids provides countless opportunities for meaningful conversations, as they ask questions, share stories, and eagerly await the delicious results of their culinary endeavors. Through cooking, children not only develop a love for good food but also cultivate a deeper appreciation for the joys of teamwork, imagination, and shared experiences.</p>
              </div>
              <p className="section-content">
                <h3>Culinary Delights: Exploring the World of Food</h3>
              Food is more than sustenance; it's a language of love, culture, and creativity that transcends borders and generations. It's the aroma of spices wafting from a bustling kitchen, the sizzle of ingredients dancing in a pan, and the symphony of flavors that ignite our senses. From the comfort of a home-cooked meal to the excitement of exploring exotic cuisines, food nourishes not only our bodies but also our souls. It's a form of expression that reflects our heritage, values, and personal tastes. Whether indulging in familiar favorites or embarking on culinary adventures, food invites us to savor the richness of life and celebrate the bonds that unite us.
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

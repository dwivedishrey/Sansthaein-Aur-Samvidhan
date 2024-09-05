import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample article content
const articleContent = {
  1: {
    title: "Meet the President",
    content: "Who is the President? The President is the leader of the country, just like a school principal is the leader of the school! Imagine the President as the head teacher of the whole nation. They make sure the laws are followed, keep everyone safe, and work with other leaders to keep things running smoothly.\n\nWhat does the President do? The President has a lot of important jobs! They sign new laws to make them official. But they don't create laws by themselves – that's the job of Parliament, which is like a big meeting of people chosen by citizens to discuss and make decisions.\n\nThe President also makes sure the country’s military, like soldiers and air forces, are ready to protect the nation. The President is the boss of the military, but they must listen to others before making big decisions, like starting a war or signing a peace deal.\n\nCan the President do everything alone? No! The President works with a team, called the government. The government is full of ministers, like teachers with different jobs, who help make decisions. There's also the Prime Minister, who leads the team of ministers. Think of the Prime Minister as the class captain, helping the President lead the country.\n\nHow is the President chosen? The President is chosen by a special election, but not everyone votes. Instead, leaders from different parts of the government vote to choose the President. The President usually serves for five years, just like how school principals have a term for a certain number of years.\n\nWhy does the President matter to you? The President’s job is to make sure our country stays safe, happy, and fair. They help make sure your rights, like the right to go to school or be treated fairly, are protected. That’s why the President is such an important figure for everyone in the country – including you!",
    image: "/president.jpg"
  },
  2: {
    title: 'How a Law is Made',
    content: 'Every law starts as an idea...',
    image: "/law.jpg"
  },
  3: {
    title: 'The Court System',
    content: 'Courts help solve problems between people...',
    image: '/court.webp'
  },
};

// Supported languages
const languages = {
  en: "English",
  hi: "Hindi",
  ur: "Urdu",
  es: "Spanish", // Example
  fr: "French",  // Example
};

// Function to translate text using Microsoft Translator API
const translateText = async (text, targetLanguage) => {
  const url = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=${targetLanguage}`;
  
  const body = JSON.stringify([{ Text: text }]);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '4f2eb25ee7msh2ec4ac25a3002d7p1e8fcejsneb4b99f2e304',  // Replace with your actual API key
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: body
    });
    
    const data = await response.json();
    return data[0].translations[0].text;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Fallback to original content if translation fails
  }
};

// Function to handle text-to-speech
const speakText = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1; // Adjust speech rate here if needed
  synth.speak(utterance);
};

// Function to stop speech
const stopSpeech = () => {
  const synth = window.speechSynthesis;
  synth.cancel(); // Stops the current speech
};

const ArticlePage = () => {
  const { id } = useParams();
  const article = articleContent[id];

  const [translatedContent, setTranslatedContent] = useState(article?.content || "");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Handle translation based on the selected language
  useEffect(() => {
    const translateArticle = async () => {
      if (selectedLanguage !== "en") {
        const translated = await translateText(article.content, selectedLanguage);
        setTranslatedContent(translated);
      } else {
        setTranslatedContent(article.content); // Default to English content
      }
    };
    translateArticle();
  }, [selectedLanguage, article.content]);

  if (!article) {
    return <h1>Article Not Found</h1>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} className="article-image-large" />

      {/* Language Selection Dropdown */}
      <label 
  htmlFor="language-select" 
  style={{ 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginRight: '10px', 
    color: '#333', 
   
  }}
>
  Choose a language:
</label>

<select
  id="language-select"
  value={selectedLanguage}
  onChange={(e) => setSelectedLanguage(e.target.value)}
  style={{
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    ':hover': {
      borderColor: '#888',
    }
  }}
>
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>

      {/* Display the translated content */}
      <p className="article-content">{translatedContent}</p>

      {/* Voice Assistant Buttons */}
      <button onClick={() => speakText(translatedContent)} className="speak-button">
        🔊 Listen to Article
      </button>
      <button onClick={stopSpeech} className="stop-button">
        🛑 Stop Listening
      </button>
    </div>
  );
};

export default ArticlePage;

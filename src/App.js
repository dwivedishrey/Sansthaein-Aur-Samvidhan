import {React,useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main/Main.js';
import KidsSection from './Main/Components/kids.js';
import TeensSection from './Main/Components/Teens.js';
import ElderlySection from './Main/Components/oldage.js';
import VideosPage from './Main/Components/kids_videos.js';
import GamesPage from './Main/Components/kids_games.js';
import ArticlesPage from './Main/Components/Kids_articles.js';
import ElderlyVideoSection from './Main/Components/Elderly_videos.js';
import TeenVideoSection from './Main/Components/Teens_videos.js';
import QuizPage from './Main/Components/Kids_Quiz.js';
import QASection from './Main/Components/Webinars/Question_answer.js';
import WebinarDetailScreen from './Main/Components/Webinars/webinar_details.js';
import WebinarListScreen from './Main/Components/Webinars/webinar_list.js';
import TeensArticlesPage from './Main/Components/teens_articles.js';
import ArticleDetailScreen from './Main/Components/article_details.js';
import InformativeArticlesPage from './Main/Components/elderly_artcles.js';
import SpinWheelGame from './Main/Components/spin_wheel.js';
import FlashcardGame from './Main/Components/flashcard.js';
import Crossword from './Main/Components/crossword.js';
import ArticleList from './Main/Components/articles/articles_list.js';
import ArticlePage from './Main/Components/articles/article-page.js';


function App() {
 
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/kids' element={<KidsSection />} />
          <Route path='/teens' element={<TeensSection />} />
          <Route path='/elderly' element={<ElderlySection />} />
          <Route path="/kids/videos" element={<VideosPage />} />
        <Route path="/kids/games" element={<GamesPage />} />
        <Route path="/games/spin-wheel" element={<SpinWheelGame />} />
        <Route path="/games/flashcards" element={<FlashcardGame />} />
        <Route path="/games/crossword" element={<Crossword />} />
        <Route path="/kids/articles" element={<ArticleList />} />
        <Route path="/articles/:id" element={<ArticlePage/>} />
        <Route path="/elderly/videos" element={<ElderlyVideoSection />} />
        <Route path="/elderly/games" element={<GamesPage />} />
        <Route path="/elderly/articles" element={<InformativeArticlesPage />} />
        <Route path="/teens/videos" element={<TeenVideoSection />} />
        <Route path="/teens/games" element={<GamesPage />} />
       
        <Route path="/teens/quizzes" element={<QuizPage />} />
        <Route path="/teens/webinars" element={<WebinarListScreen/>} />
        <Route path="/qa/:id" element={<QASection/>} />
        <Route path="/webinar/:id" element={<WebinarDetailScreen/>} />
        <Route path="/teens/articles" element={<TeensArticlesPage />} />
        <Route path="/article/:id" element={<ArticleDetailScreen />} />

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;

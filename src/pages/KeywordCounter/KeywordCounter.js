import Jumbotron from '../../components/Jumbotron/Jumbotron';
import React, { useState, useEffect } from 'react';
import './seo-style.css';
import { Helmet } from 'react-helmet';
import {MetaData} from '../../MetaData/MetaData';
import { KeywordContent } from './KeywordContent';
import PageConclusion from '../../components/PageConclusion/PageConclusion';
import ContactFormRender from "../../components/ContactForm/ContactFormRender";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function KeywordCounter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState([]);
  const [userCopy, setUserCopy] = useState('');
  const [termStyles, setTermStyles] = useState({});
  const [termCounts, setTermCounts] = useState({});

  useEffect(() => {
    displaySearchTerms();
    displayCopy();
  }, );

  useEffect(() => {
    checkOccurrences();
  }, );

  
  const styleFound = {
    backgroundColor: 'rgba(0, 255, 0, 0.25)',
    transitionDuration: '1s',
  };

  const styleNotFound = {
    backgroundColor: 'rgba(255, 0, 0, 0.25)',
    transitionDuration: '1s',
  };

  const displaySearchTerms = () => {
    if (!localStorage.getItem('searchTerms')) {
      setSearchTerms([]);

    } else {
        const parsedSearches = JSON.parse(localStorage.getItem('searchTerms'));
        setSearchTerms(parsedSearches);
        setTermStyles(parsedSearches.reduce((acc, term) => {
          acc[term] = styleNotFound;
          return acc;
        }, {}));
      }
  };

  const displayCopy = () => {
    if (!localStorage.getItem('userContent')) {
      setUserCopy('');

    } else {
      const parsedContent = JSON.parse(localStorage.getItem('userContent'));
      setUserCopy(parsedContent);

    }
  };

  const addSearchTerm = (e) => {
    e.preventDefault();

    if (!searchTerm) {
        alert('Enter a search term or keyword');
        return;

    } else if (searchTerms.includes(searchTerm)) {
        alert(`You've already added: "${searchTerm}"`);
        setSearchTerm('');
        return;

    } else {
        const newSearchTerms = [...searchTerms, searchTerm];
        setSearchTerms(newSearchTerms);
        setTermStyles({ ...termStyles, [searchTerm]: styleNotFound });
        setTermCounts({ ...termCounts, [searchTerm]: 0 });
        localStorage.setItem('searchTerms', JSON.stringify(newSearchTerms));
        setSearchTerm('');

    }
  };

  const removeAllKeywords = (e) => {
    e.preventDefault();
    localStorage.removeItem('searchTerms');
    setSearchTerms([]);
    setTermStyles({});
    setTermCounts({});

  };

  const addUserCopy = (content) => {
    localStorage.setItem('userContent', JSON.stringify(content));
    setUserCopy(content);

  };

  const checkOccurrences = () => {
    if (!userCopy) return;

    let updatedStyles = { ...termStyles };
    let updatedCounts = { ...termCounts };
    let changes = false;

    searchTerms.forEach((userKeyword) => {
      const regex = new RegExp(`\\b${userKeyword}\\b`, 'gi');
      const matches = userCopy.match(regex);
      const newStyle = matches && matches.length > 0 ? styleFound : styleNotFound;
      const matchCount = matches ? matches.length : 0;

      if (updatedStyles[userKeyword] !== newStyle || updatedCounts[userKeyword] !== matchCount) {
        updatedStyles[userKeyword] = newStyle;
        updatedCounts[userKeyword] = matchCount;
        changes = true;

      }
    });

    if (changes) {
      setTermStyles(updatedStyles);
      setTermCounts(updatedCounts);

    };
  };

  const handleRemoveTerm = (term) => {
    const updatedTerms = searchTerms.filter((t) => t !== term);
    setSearchTerms(updatedTerms);
    localStorage.setItem('searchTerms', JSON.stringify(updatedTerms));
    const updatedStyles = { ...termStyles };
    delete updatedStyles[term];
    setTermStyles(updatedStyles);    
    const updatedCounts = { ...termCounts };
    delete updatedCounts[term];
    setTermCounts(updatedCounts);

  };

  const meta = MetaData.keyword_counter;

  const input = {
    color: 'black !important'
  }

  return (
    <main>
      <Helmet>
        <title>{meta.page_title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.meta_description} />
      </Helmet>

      <Jumbotron 
        h1={KeywordContent.h1}
        p={KeywordContent.jumboP}
      />

      <section id="userInput" className="container mt-5 d-flex flex-column">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div id="keywordEntry" className="text-left text-lg-start">
              <form id="keywordForm" className="p-3 border rounded-1 bg-light" >
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="searchTermEntry"
                    name="search"
                    style={input}
                    placeholder="Enter Keyword" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                <button 
                  id="addData" className="w-100 btn seo-btn-primary btn-md"
                  onClick={(e) => addSearchTerm(e)}>
                  Add Keyword
                </button>
                <hr className="my-4" />
                <button id="clearStorage" className="btn btn-warning btn-sm" onClick={(e) => removeAllKeywords(e)}>
                  Clear Keywords
                  <i id="recycle" className="bi bi-recycle"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-8 col-xs-12">
            <form id="keywordForm" className="p-3 border rounded-1">
              <div className="form-floating mb-3">
              <label for="userCopy"></label>
                <textarea
                  className="form-control-md"
                  type="text"
                  rows="10"
                  placeholder='Enter your copy here'
                  id="userData"
                  value={userCopy}
                  onChange={(e) => addUserCopy(e.target.value)}
                />
              </div>
              <div id="searchTermList" className="list-group-horizontal list-group flex-wrap gap-2">

                  {searchTerms.length === 0 ? (
                    <h3>Your keywords will show here</h3>
                  ) : (
                    searchTerms.map((term) => (
                      <div 
                        className='flex-fill' 
                        id={`${term}Style`} 
                      style={termStyles[term]}
                        >

                      <li
                        key={term}
                        className="seo-li searchTerm d-flex gap-2 justify-content-between align-items-center"
                      >

                        <h6 id={term}>
                          "{term.toUpperCase()}" is used: {isPlural(termCounts[term])}
                        </h6>
                        
                        <h6 className="remove" onClick={() => handleRemoveTerm(term)}>
                          <i className="bi bi-trash3"></i>
                        </h6>

                      </li>
                    </div>
                    ))
                  )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section id="about" className="container d-flex flex-column">
        <div className="row">
          <div className="col">
            <h2>Using the keyword counter tool</h2>
            <p>
              Using the search-term counter couldn't be easier. You choose where to start; either by adding your keywords one
              at a time (for now) or simply start writing your search-engine optimised content and add your keywords later.
              Don't worry about losing your content as it is automatically saved to your browser's memory as you type. As long
              as you don't delete your browser or clear its history, your copy should stay there as long as you need it.
              <br />
              When you add a keyword before entering any content, you'll notice the background colour of the keywords's
              container is red. This indicates no matches have been found in your content. The background will turn green when a
              match is found, and the number of occurrences will be updated.
            </p>
            <ol>
              <li>Enter your keyword or search term into the keyword box and press enter or hit the 'Add Keyword' button (one at a time for now)</li>
              <li>Each search term will appear under the large text entry area</li>
              <li>Click 'Clear Keywords' to remove all of the keywords you added (note this removes them from memory too)</li>
              <li>Each individual search-term you add can be deleted by clicking the little dustbin icon</li>
              <li>Now you can either start writing your content directly into the text box, or do it my way and simply paste a load of content into it for an instant analysis. Then modify as you see fit</li>
            </ol>
            <h2>About the Keyword Counter tool</h2>
            <p>
              This keyword counting has been created to give SEOs and content-writers the ability to instantly visualise how
              many times they have used specific keywords and keyphrases. As an SEO myself, I often found myself quickly
              forgetting what content I have written and getting extremely frustrated with re-reading what I'd written over and
              over again, desperately trying to keep track of which keywords I have already used and how often. <br />
              So this tool aims to take away that frustration. I built it to solve my problem so hopefully, it will help you
              too.
            </p>
          </div>
        </div>
      </section>

      <section className="contactWrapper">
        <ContactFormRender 
          title="Can I help you with a new affordable website?"
          source="Keyword Counter"
        />
      </section>

      <PageConclusion
        h2={KeywordContent.concludingH2}
        p = {KeywordContent.concludingPara}
        button = {KeywordContent.concludingButton}
      />
    </main>
  );
};
const isPlural = (data) => {
  return data === 0 || data > 1 ? `${data} times` : `${data} time`;
};
export default KeywordCounter;
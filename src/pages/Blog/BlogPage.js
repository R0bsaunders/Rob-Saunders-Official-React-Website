import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import './BlogStyles.css'
import {BlogPosts} from './BlogPosts.js'

console.log(BlogPosts);

export default function BlogPage(props) {

    return (
        <>
            <Jumbotron 
                h1={props.blog.postTitle}
                p={props.blog.postDescription}
            />  

            <main className='blog-body'>
                <div className='blog-container'>
                    <div className="content">
                        
                        <div id="section1" className="post-content">
                            <p>{props.blog.postIntro}</p>
                        </div>
                        
                        <img src={props.blog.introImage} alt="Rob hiking" className="post-image" />
                        
                        {props.blog.postContent.map(content => {
                            return (
                                <>
                                    <div id="section2" className="post-content">
                                        <h2>{content.sectionTitle}</h2>
                                        <p>{content.paragraph}</p>
                                        {!content.quote ? null : <div className="quote"><i class="fas fa-quote-left"></i>{content.quote}<i class="fas fa-quote-right"></i></div>}
                                    </div>

                                    {!content.image ? null : <img src={content.image} alt="Another Description of Image" className="post-image" />}
                                </>
                            )
                        })}
                        
                        <div id="conclusion" className="post-content">
                            <h2>Conclusion</h2>
                            <p>{props.blog.postConclusion}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};


{/* <div class="sidebar">
    <h3>Blog Sections</h3>
    <ul>
        <li><a href="#section1"><i class="fas fa-home"></i> Introduction</a></li>
        <li><a href="#section2"><i class="fas fa-star"></i> Main Point 1</a></li>
        <li><a href="#section3"><i class="fas fa-lightbulb"></i> Main Point 2</a></li>
        <li><a href="#conclusion"><i class="fas fa-pencil-alt"></i> Conclusion</a></li>
        <li><a href="#section3"><i class="fas fa-lightbulb"></i> Main Point 2</a></li>
        <li><a href="#conclusion"><i class="fas fa-pencil-alt"></i> Conclusion</a></li>
    </ul>
</div> */}
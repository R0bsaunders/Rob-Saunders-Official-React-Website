import Jumbotron from '../components/Jumbotron/Jumbotron'
import './BlogStyles.css'

export default function BlogPage() {


    return (
        <>
            <Jumbotron 
                h1="Your Blog Post Title Here"
                p="This is your introduction. It should introduce your topic and what you plan to cover in the post."
            />  

            <main className='blog-body'>

                <div class="sidebar">
                    <h3>Blog Sections</h3>
                    <ul>
                        <li><a href="#section1"><i class="fas fa-home"></i> Introduction</a></li>
                        <li><a href="#section2"><i class="fas fa-star"></i> Main Point 1</a></li>
                        <li><a href="#section3"><i class="fas fa-lightbulb"></i> Main Point 2</a></li>
                        <li><a href="#conclusion"><i class="fas fa-pencil-alt"></i> Conclusion</a></li>
                    </ul>
                </div>
                
                    <div className='blog-container'>
                    <div className="content">
                        
                        <div id="section1" className="post-content">
                            <p>This is your introduction. It should introduce your topic and what you plan to cover in the post.</p>
                            <div className="quote">"A key point or quote related to the introduction."</div>
                        </div>
                        
                        <img src="https://placehold.co/600x400" alt="Description of Image" className="post-image" />
                        
                        <div id="section2" className="post-content">
                            <h2>Main Point 1</h2>
                            <p>This is a section that discusses the first main point of your topic.</p>
                            <div className="quote">"A key point or quote related to the first main point."</div>
                        </div>
                        
                        <img src="https://placehold.co/600x400" alt="Another Description of Image" className="post-image" />
                        
                        <div id="section3" className="post-content">
                            <h2>Main Point 2</h2>
                            <p>This is a section that discusses the second main point of your topic.</p>
                            <div className="quote">"A key point or quote related to the second main point."</div>
                        </div>
                        
                        <div id="conclusion" className="post-content">
                            <h2>Conclusion</h2>
                            <p>This is your concluding paragraph. Summarize the main points of your post and conclude your discussion.</p>
                            <div className="quote">"A key point or quote related to the conclusion."</div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
};
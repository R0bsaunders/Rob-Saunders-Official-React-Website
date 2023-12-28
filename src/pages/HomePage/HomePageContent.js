import React from "react";
import { BootstrapFill, BoxFill, CashCoin, EmojiSmile, FastForwardCircle, FiletypeCss, FiletypeHtml, Flower3, Lightbulb, PersonGear, Tools } from "react-bootstrap-icons";

const iconSize = 30;

export const homepageContent = {

    jumbotronH1: "Building affordable websites in Somerset, Devon & Cornwall",
    jumbotronP: "I'm a friendly freelance web developer in Somerset, UK. I build functional websites for small businesses so they can enjoy a professional online presence with minimal development and running costs.",

    //Array containing USPs
    uspsH2: "Affordable Web Design Service",
    usps: [
        {
            id: 1,
            icon: <Lightbulb size={iconSize}/>,
            h3: "Simple & Effective",
            p: "I build websites with a modern appearance and a user-friendly experience to positively represent your business and brand."
        },
        {
            id: 1,
            icon: <FastForwardCircle size={iconSize}/>,
            h3: "Quick Turnaround",
            p: "I use the most popular web design platforms such as Squarespace and WordPress to build websites in as little as two weeks!"
        },

        {
            id: 2,
            icon: <Tools size={iconSize}/>,
            h3: "Low Maintenance",
            p: "No shock post-launch 'support' fees. I build websites to require little maintenance so you can spend time on what matters in your business."
        },

        {
            id: 3,
            icon: <PersonGear size={iconSize}/>,
            h3: "Affordable Support",
            p: "Need help with something or just want me to make a few changes for you? My post-launch support fees are fair and affordable."
        },
    ],
    
    // Content for the about me section
    aboutH2: "A Budget Friendly Web-Development Service",
    image: "./assets/images/desktop-rob-saunders-profile-picture.jpg",
    imageAlt: "A photograph of Rob Saunders - website developer covering Somerset, Devon and Cornwall",
    aboutP: "I live in beautiful Somerset but spent most of my life in Devon, on the edge of Dartmoor. Having worked in the website industry for over 5 years, I realised that small businesses, especially one-person bands who often don't know where to start in their search for a website provider, would be convinced to pay many times more than they need to for a website. They often fall prey to larger companies who see them as 'bread & butter' to pay for swanky offices and flashy equipment - used to impress larger clients. ",
    aboutP2: "For this reason, I set about starting my own web development and SEO business, especially for small businesses. I use tried and tested methods and platforms like Squarespace, Wix and WordPress for simplicity. While the trade-off with this of course less functionality than a bespoke website, it's highly unlikely you need bespoke yet, so why pay for it?! I'll even use more complex coding including JavaScript at no extra cost if it is needed, so that my website and SEO clients never need to go away and 'crunch the numbers' trying to afford my services. I charge enough to support my modest lifestyle while my clients are left feeling happy with themselves that they made a good choice, rather than wondering if it will be worth it in the long run.",
    aboutP3: "I genuinely enjoy getting to know people and building up a rapport with them by using clear and easy-to-understand language. I help my clients to appreciate that having a website is not a big, scary or financially draining burden on their business, but is instead a fantastic tool that positively contributes to their goals and reputation.",

    skillsH2: "Website Development Skills",

    //Array containing development skills
    developmentSkills:  [
        {
            id: 1,
            icon: <FiletypeHtml size={iconSize}/>,
            h3: "HTML",
            p: "I am proficient in HTML coding in line with industry standards and build websites to comply with current accessibility standards"
        },

        {
            id: 2,
            icon: <FiletypeCss size={iconSize}/>,
            h3: "CSS",
            p: "I build website stylesheets using CSS in the most efficient ways minimising the amount of code required"
        },

        {
            id: 3,
            icon: <BootstrapFill size={iconSize}/>,
            h3: "Bootstrap",
            p: "Using the most up to date library, I can use Bootstrap to quickly build simple, responsive and personalised websites to keep costs low while being accessible on any screen size"
        },

        {
            id: 4,
            icon: <CashCoin size={iconSize}/>,
            h3: "ROI",
            p: "I've worked with large businesses and my focus is always on the value I can bring your business. I build websites with the user end-goal in mind; whether it's a purchase, phone call or appointment"
        },

        {
            id: 5,
            icon: <Flower3 size={iconSize}/>,
            h3: "REACT",
            p: "I can build single-page applications using REACT"
        },
        
        {
            id: 6,
            icon: <EmojiSmile size={iconSize}/>,
            h3: "Customer-Focused",
            p: "I am a people person first, I am friendly and strive to build positive working relationships with everyone I meet"
        },
        
        {
            id: 7,
            icon: <BoxFill size={iconSize}/>,
            h3: "Node.js",
            p: "Server-side rendering to enable feature-rich and powerful website functionality."
        }
    ],

    // Web design content box after the contact form
    contentBox3_Title: "Web Design in Somerset, Devon and Cornwall",
    contentBox3_Para: "My website design, development and SEO service is specifically for small businesses (South West of England and beyond). I understand that many small businesses are run by an individual or individuals trying to balance the running of their business with personal life leaving little time for admin, especially a website. They don't have time for complicated proposals or techno jargon. They can fall prey to agencies who rely on a lack of website knowledge, or even a fear of tech, to scare their clients into spending a small fortune with them, convincing them they need more than they do. My service is no-thrills, no-nonsense and simple. Get in touch with me if you just want a website or a simple SEO service!",

    // Web design content box before the footer
    contentBox4_Title: "Why Choose a Freelance Web Designer?",
    contentBox4_Para: "In most cases, a small business does not need a team of designers to create a 'bespoke' design with complicated custom functionality. Unlike large design agencies with large overheads and expensive gear, a freelancer is less about show and more about delivering you a service you need rather than cross-selling you as much as possible to help pay for said gear and overheads. A freelance website designer is also typically less likely to be over committed as they do not need to heavily front load work due to cashflow pressure! By using website systems such as Squarespace, Wix and WordPress, a freelancer spends less time creating the website, and therefore keeps costs to a minimum.",

};
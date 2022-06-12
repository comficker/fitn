import React, {useEffect} from "react";
import {NextPageContext} from "next";
import {State} from "../components/reducer";
import HeadCommon from "../components/head.common";
import FooterScript from "../components/footer.script";
import TagScript from "../components/tag.script";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Helmet} from "react-helmet";

export interface PageProps extends State {
    xstore: any;
}

declare var window: any

export const Home = (props: PageProps) => {
    const {xstore} = props;
    const partners: any[] = [
        "assets/images/partners/1.png",
        "assets/images/partners/2.png",
        "assets/images/partners/3.png",
        "assets/images/partners/4.png",
        "assets/images/partners/5.png",
        "assets/images/partners/6.png",
        "assets/images/partners/7.png",
        "assets/images/partners/8.png",
        "assets/images/partners/9.png",
        "assets/images/partners/10.png",
        "assets/images/partners/11.png",
        "assets/images/partners/12.png",
        "assets/images/partners/13.png",
        "assets/images/partners/14.png"
    ]
    const getCookie = (cname: any) => {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    useEffect(() => {
        if (!getCookie("referer")) {
            if (window.location.href.toLowerCase().search("fbclid") >= 0) {
                document.cookie = `referer=fbclid; expires=${new Date(
                    new Date().getTime() + 3600 * 1000
                )}`;
            } else if (window.location.href.toLowerCase().search("gclid") >= 0) {
                document.cookie = `referer=gclid; expires=${new Date(
                    new Date().getTime() + 3600 * 1000
                )}`;
            }
        }
    }, []);
    return (
        <>
            {xstore ? (
                <>
                    <HeadCommon/>
                    <Helmet>
                        <body/>
                    </Helmet>
                    <div id="home" className="main">
                        <header className="header">
                            <div className="container">
                                <div className="header-container">
                                    <div className="logo">
                                        <LazyLoadImage className="logo-img" src="assets/images/logo.png" alt="FitN"/>
                                    </div>
                                    <div className="nav-menu">
                                        <ul className="menu">
                                            <li><a href="#home">Home</a></li>
                                            <li><a href="#ecosystem">Play Modes</a></li>
                                            <li><a href="#nft-system">NFT System</a></li>
                                            <li><a href="#tokenomics">Tokenomics</a></li>
                                            <li><a href="#roadmap">Roadmap</a></li>
                                            <li className="has-sub">
                                                <a target="_blank" rel="noreferrer"
                                                   href="https://whitepaper.fitn.health/">Documents</a>
                                                <span className="arrow-down"><LazyLoadImage
                                                    src="assets/images/arrow-down.svg" alt="arrow"/></span>
                                                <ul className="sub-menu">
                                                    <li><a target="_blank" rel="noreferrer"
                                                           href="https://whitepaper.fitn.health/">Whitepaper</a></li>
                                                    <li><a target="_blank" rel="noreferrer"
                                                           href="https://docsend.com/view/64ie8fgj643qkv98">Pitch
                                                        Deck</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <a className="btn btn-market btn-primary">Marketplace
                                            <span className="tooltip">Coming soon</span>
                                        </a>
                                        <button className="btn-menu btn btn-primary"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="social social-vertical">
                                <ul>
                                    <li>
                                        <a rel="noreferrer" target="_blank"
                                           href="https://www.facebook.com/FITNofficial"><LazyLoadImage
                                            src="assets/images/fb.svg" alt="Facebook" width={36} height={36}/></a></li>
                                    <li>
                                        <a rel="noreferrer" target="_blank" href="https://t.me/FITN_chat"><LazyLoadImage
                                            src="assets/images/telegram.svg" alt="Telegram" width={36} height={36}/></a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank"
                                           href="https://twitter.com/FITNofficial"><LazyLoadImage
                                            src="assets/images/tw.svg" alt="Twitter" width={36} height={36}/></a></li>
                                    <li>
                                        <a rel="noreferrer" target="_blank"
                                           href="https://fitnofficial.medium.com"><LazyLoadImage
                                            src="assets/images/medium.svg" alt="Medium" width={36} height={36}/></a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank"
                                           href="https://www.reddit.com/r/FitNofficial/">
                                            <LazyLoadImage src="assets/images/reddit.svg" alt="Reddit" width={36}
                                                           height={36}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="noreferrer" target="_blank"
                                           href="https://discord.gg/UFuQT75ZzT"><LazyLoadImage
                                            src="assets/images/discord.svg" alt="Discord" width={36} height={36}/></a>
                                    </li>
                                </ul>
                            </div>
                        </header>
                        <div className="wapper">
                            <section id="play-modes" className="banner">
                                <div className="container">
                                    <h1 className="page-title text-center text-3xl font-bold underline">Make profit from
                                        your fitness life!</h1>
                                    <p className="sub-title text-center">EXERCISE - EARN - BE HAPPY</p>
                                    <div className="banner-video text-center">
                                        <LazyLoadImage src="assets/images/banner-video.jpg?1"
                                                       alt="Make profit from your fitness life!"/>
                                        <p className="play-video"><LazyLoadImage src="assets/images/play.svg"
                                                                                 alt="EXERCISE - EARN - BE HAPPY"/></p>
                                        <video className="video" loop width="957" height="536">
                                            <source src="/assets/images/fitn.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div className="btn-general text-center">
                                        <a className="btn btn-primary btn-small" rel="noreferrer" target="_blank"
                                           href="https://whitepaper.fitn.health/">Whitepaper</a>
                                        <a className="btn btn-primary btn-small" rel="noreferrer" target="_blank"
                                           href="https://linktr.ee/fitnofficial">Community</a>
                                    </div>
                                </div>
                            </section>
                            <section className="about">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6"></div>
                                        <div className="col-6">
                                            <h2 className="title-h2">About<br/> the project</h2>
                                            <p>FITN is the only platform you need everyday to make the most from your
                                                Fitness life. Our application is combined with NFTs, GameFi and
                                                SocialFi. Download, train and connect with like – minded community where
                                                you can burn and earn the effortlessly.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="nft-system" className="nft-system">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="title-h2">NFT System</h2>
                                        <div className="nft-list">
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft.png?1" alt="NFT System"/>
                                            </div>
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft-2.png?1" alt="NFT System"/>
                                            </div>
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft-3.png?1" alt="NFT System"/>
                                            </div>
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft-4.png?1" alt="NFT System"/>
                                            </div>
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft-5.png?1" alt="NFT System"/>
                                            </div>
                                            <div className="nft-item text-center">
                                                <LazyLoadImage src="assets/images/nft-6.png?1" alt="NFT System"/>
                                            </div>
                                        </div>
                                        <div className="btn-general">
                                            <a className="btn btn-primary btn-small">Go to Marketplace
                                                <span className="tooltip">Coming soon</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="ecosystem" className="ecosystem">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="title-h2">E2E Ecosystem</h2>
                                        <h3 className="title-h3">Mode</h3>
                                        <p>Different Modes based on your prefer</p>
                                        <div className="ecosystem-box">
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/person.svg"
                                                                   alt="Solo modes running/walking/biking"/>
                                                    <p>Solo modes running/<br/>walking/biking</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/trail.svg"
                                                                   alt="Trail/Marathon mode"/>
                                                    <p>Trail/Marathon <br/>mode</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/coaching.svg"
                                                                   alt="Coaching mode become a trainer"/>
                                                    <p>Coaching mode<br/> become a trainer</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/group-user.svg"
                                                                   alt="Group modes exercise with friends"/>
                                                    <p>Group modes<br/> exercise with friends</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/chellen.svg"
                                                                   alt="Challenging mode daily mission to break your own record"/>
                                                    <p>Challenging mode<br/> daily mission to break <br/>your own record
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ecosystem-box2">
                                            <div className="ecosystem-2">
                                                <div className="ecosystem-desc">
                                                    <h3 className="title-h3">Marketplace</h3>
                                                    <p>The marketplace is where users can rent, lease, or trade their
                                                        NFT Sneakers and NFTs from NFT Movement Creating. The filter
                                                        function is available in the marketplace to easily find the NFTs
                                                        you want.
                                                    </p>
                                                </div>
                                                <div className="ecosystem-img">
                                                    <LazyLoadImage src="assets/images/market.svg" alt="Marketplace"/>
                                                </div>
                                            </div>
                                            <div className="ecosystem-2">
                                                <div className="ecosystem-desc">
                                                    <h3 className="title-h3">AR ROOM</h3>
                                                    <p>Virtual showroom where you can display your own collection </p>
                                                </div>
                                                <div className="ecosystem-img">
                                                    <LazyLoadImage src="assets/images/ar.svg" alt="AR ROOM"/>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="title-h3 text-center">SocialFi</h3>
                                        <div className="ecosystem-box text-center">
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/referal.svg"
                                                                   alt="Referral program"/>
                                                    <p>Referral<br/> program</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/club.svg"
                                                                   alt="Club & Trainer’s community"/>
                                                    <p>Club & Trainer’s <br/>community</p>
                                                </div>
                                            </div>
                                            <div className="ecosystem-item">
                                                <div className="ecosystem-content">
                                                    <LazyLoadImage src="assets/images/workout.svg"
                                                                   alt="Workout process and yoga/meditation"/>
                                                    <p>Workout process <br/>and yoga/meditation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="tokenomics" className="tokenomics">
                                <div className="container">
                                    <div className="tokenomics-content">
                                        <h2 className="title-h2 text-center">Tokenomics</h2>
                                        <div className="tokenomics-img">
                                            <div className="tokenomic-img">
                                                <LazyLoadImage src="assets/images/shoes.png" alt="NFT Shoes"/>
                                            </div>
                                            <div className="tokenomic-img">
                                                <LazyLoadImage src="assets/images/tokenomics.png" alt="Tokenomics"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="roadmap" className="roadmap text-center">
                                <div className="container">
                                    <LazyLoadImage className="img-nft" src="assets/images/shoe.png" alt="NFT Shoes"/>
                                    <h2 className="title-h2">Roadmap</h2>
                                    <div className="roadmap-content">
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q1/2022"/>
                                            <h3 className="title-h3">Q1/2022</h3>
                                            <ul>
                                                <li>Project team building</li>
                                                <li>Researching</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q2/2022"/>
                                            <h3 className="title-h3">Q2/2022</h3>
                                            <ul>
                                                <li>Website & White paper public</li>
                                                <li>Community Building</li>
                                                <li>First Airdrop & Referral Program</li>
                                                <li>IDO</li>
                                                <li>INO</li>
                                                <li>NFT Marketplaces web building</li>
                                                <li>Project trailer releasing</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q3/2022"/>
                                            <h3 className="title-h3">Q3/2022</h3>
                                            <ul>
                                                <li>DApp Marketplace</li>
                                                <li>Solo mode</li>
                                                <li>Group mode</li>
                                                <li>Trail/Marathon mode:</li>
                                                <li>App beta version release</li>
                                                <li>Partnership with sport brand</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q4/2022"/>
                                            <h3 className="title-h3">Q4/2022</h3>
                                            <ul>
                                                <li>Challenging mode</li>
                                                <li>Coaching mode</li>
                                                <li>NFT rental system</li>
                                                <li>NFT Breeding</li>
                                                <li>Trainer hiring</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q1/2023"/>
                                            <h3 className="title-h3">Q1/2023</h3>
                                            <ul>
                                                <li>AR room</li>
                                                <li>DApp community</li>
                                                <li>Inapp referral program</li>
                                                <li>Staking pool</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q2/2023"/>
                                            <h3 className="title-h3">Q2/2023</h3>
                                            <ul>
                                                <li>App new features update</li>
                                                <li>Marketplace update</li>
                                                <li>NFT customization</li>
                                                <li>Community event</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q13/2023"/>
                                            <h3 className="title-h3">Q3/2023</h3>
                                            <ul>
                                                <li>CEX listing</li>
                                                <li>World tournament</li>
                                                <li>Monthly health report system</li>
                                            </ul>
                                        </div>
                                        <div className="roadmap-time">
                                            <LazyLoadImage src="assets/images/roadmap.svg" alt="Roadmap Q4/2023"/>
                                            <h3 className="title-h3">Q4/2023</h3>
                                            <ul>
                                                <li>Health stats checking tool</li>
                                                <li>Workout and yoga/meditation features</li>
                                                <li>FITN merch store opening</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="backer" className="text-center">
                                <div className="container">
                                    <h2 className="title-h2"> Partners & Backers </h2>
                                    <div className="partners">
                                        {
                                            partners.map(item => {
                                                return <div className="partner" key={item}>
                                                    <img src={item} alt=""/>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </section>
                            <section id="our-team" className="our-team text-center">
                                <div className="container">
                                    <h2 className="title-h2">Our Team</h2>
                                    <div className="team-content">
                                        <div className="team-item">
                                            <LazyLoadImage src="assets/images/teams/CEO.png" alt="CEO"/>
                                            <div>
                                                <span>CEO</span>
                                                <h4>Jonny</h4>
                                                <ul>
                                                    <li>CEO of Figures Ecom</li>
                                                    <li>Marketing online and e-commerce expert</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-item">
                                            <LazyLoadImage src="assets/images/teams/CMO.png" alt="Team member"/>
                                            <div>
                                                <span>CMO</span>
                                                <h4>Harry</h4>
                                                <ul>
                                                    <li>5 years of experience in advertising, branding and digital
                                                        marketing.
                                                        Working with big global and local brands such as Suntory
                                                        Pepsico, Yomost, TPBank,….
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-item">
                                            <LazyLoadImage src="assets/images/teams/CD.png" alt="Team member"/>
                                            <div>
                                                <span>Creative director</span>
                                                <h4>KHANH</h4>
                                                <ul>
                                                    <li>10 years of experience in digital marketing, advertising and
                                                        brand communication at global agencies.
                                                    </li>
                                                    <li>Successfully built and launched global brands in Vietnam in
                                                        communication and digital marketing category such as Pepsi,
                                                        Unilever, Unicharm, FrieslandCampina,…
                                                    </li>
                                                    <li>Won multiple creative and marketing awards in Vietnam and
                                                        Southest Asia.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-item">
                                            <LazyLoadImage src="assets/images/teams/CM.png" alt="Team member"/>
                                            <div>
                                                <span>Community Manager</span>
                                                <h4>KENNY</h4>
                                                <ul>
                                                    <li>Specialized in global digital marketing, cross-culture marketing
                                                        and social media marketing strategy
                                                    </li>
                                                    <li> Joined blockchain industry and worked with over 10 crypto
                                                        companies since 2018. Currently focus on planning, coordination,
                                                        and implementation of all marketing activities and community
                                                        events for FITN"
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <footer className="footer">
                            <div className="footer-content">
                                <div className="footer-logo">
                                    <LazyLoadImage src="assets/images/logo.png"
                                                   alt="© 2022 Copyright by FITN, .JSC. Privacy policy"/>
                                </div>
                                <div className="footer-desc">
                                    <p>© 2022 Copyright by FITN, .JSC. Privacy policy</p>
                                    <a className="mailto" href="mailto:hello@fitn.health">hello@fitn.health</a>
                                    <div className="social">
                                        <ul>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://www.facebook.com/FITNofficial"><LazyLoadImage
                                                src="assets/images/fb.svg" alt="Facebook" width={36} height={36}/></a>
                                            </li>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://t.me/FITN_chat"><LazyLoadImage
                                                src="assets/images/telegram.svg" alt="Telegram" width={36} height={36}/></a>
                                            </li>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://twitter.com/FITNofficial"><LazyLoadImage
                                                src="assets/images/tw.svg" alt="Twitter" width={36} height={36}/></a>
                                            </li>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://fitnofficial.medium.com"><LazyLoadImage
                                                src="assets/images/medium.svg" alt="Medium" width={36} height={36}/></a>
                                            </li>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://www.reddit.com/r/FitNofficial/"><LazyLoadImage
                                                src="assets/images/reddit.svg" alt="Reddit" width={36} height={36}/></a>
                                            </li>
                                            <li><a rel="noreferrer" target="_blank"
                                                   href="https://discord.gg/UFuQT75ZzT"><LazyLoadImage
                                                src="assets/images/discord.svg" alt="Discord" width={36}
                                                height={36}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                    {xstore.facebookScript && <TagScript script={xstore.facebookScript}/>}
                    {xstore.googleScript && <TagScript script={xstore.googleScript}/>}
                    <FooterScript/>
                </>
            ) : (
                <>Your store has not been configured.</>
            )
            }
        </>
    );
};

Home.getInitialProps = async ({req}: NextPageContext): Promise<any> => {
    const xstore: any = {};
    return {xstore}
}

export default Home;

import React from 'react'
import "./App.css"
import logo from "./img/logo.svg"
import hero from "./img/heroImage.png";

// Importing SVG icons
import landingPage from "./img/landingpage.svg"
import visit from "./img/search.svg";
import AIBot from "./img/AI-bot.svg";
import campaign from "./img/open-mail.svg"
import AI from "./img/AI.svg"
import communicate from "./img/engage.svg"
import personalized from "./img/email-campaign.svg"
import customer from "./img/customer.svg"
import mailcash from "./img/mail.svg"
import collaborate from "./img/connect.svg"
import forecast from "./img/forcast.svg"
import shake from "./img/shake.svg"





import handLove from "./img/hand-love.svg"
import handShake from "./img/hand-shake.svg"
import handTurn from "./img/hand-turn.svg"




const App = () => {
 


  return(
    <div className="container"> 

      <header className="header">
        <div className="nav">
          <span className="logo"><img alt="freshworks logo" src={logo}/></span>
          <nav className="main-nav">
            <span>Features</span>
            <span>pricing</span>
            <span>Resources</span>
            <span>Industries</span>
            <span>Login</span>
            <span className="cta">SIGN UP</span>
          </nav>
        </div>
      </header>

      <div className="heroWrap section">
          <div className="box1">
            <span className="crm">CRM</span>
            <h1>Unite sales and marketing around the customer with an all-in-one CRM</h1>
            <p>Know customer intent to help sales convert faster with a 360° view</p>
            <div className="btns">
              <button className="btn1">SIGN UP</button>
              <button id="btn2">VIEW PRICING</button>
            </div>
          </div>
          <div className="box2">
            <img src={hero} alt="Hero Section" className="heroImage"/> 
          </div>
      </div>

      <div className="awardSection section">
        <h2>Analysts and end-users love Freshsales</h2>
        <div className="awardList">
          <div className="award">
            <div className="awardImage"><img alt="award" src={require("./img/gartner.png")} className=""/></div> 
            <p className="awardText">Gartner Magic Quadrant 2021 - Sales Force Automation</p>
          </div>
          <div className="award">
            <div className="awardImage"><img alt="award" src={require("./img/gartner.png")} className=""/></div>
            <p className="awardText">Gartner Magic Quadrant 2020 - CRM Lead Management</p>
          </div>
          <div className="award">
            <div className="awardImage"><img alt="award" src={require("./img/leader.png")} className=""/></div> 
            <p className="awardText">G2 CRM Software Leader 2021</p>
          </div>
          <div className="award">
            <div className="awardImage"><img alt="award" src={require("./img/getapp.png")} className=""/></div>
            <p className="awardText">GetApp CRM Software Leaders 2019</p>
          </div>
        </div>

      </div>

      <div className="valueSection section">
      <h2>How can Freshsales Suite help you grow your business?</h2>
        <div className="valueList">

          <div className="value">
              <div className="valueImage"><img alt="Relationship" src={handLove} className=""/></div>
              <span className="boldText">Nurture relationships and grow revenue with a single customer view </span>
              <p>Deliver seamless engagement across channels with a 360° view of the customer. Unify sales and marketing teams to deliver customer delight.</p>
          </div>

          <div className="value">
              <div className="valueImage"><img alt="Relationship" src={handShake} className=""/></div>
              <span className="boldText">Close deals faster by sending the right message at the right time</span>
              <p>Sales and marketing can work together to deliver personalized customer experiences. Understand customer intent and send the right message to close deals faster.</p>
          </div>

          <div className="value">
              <div className="valueImage"><img alt="Relationship" src={handTurn} className=""/></div>
              <span className="boldText">Reduce IT complexity &amp; cost with a comprehensive solution</span>
              <p>Keep teams happy with a single, all-in-one solution that is affordable, easy to implement, and easier to use. Increase adoption, reduce costs and boost morale.</p>
          </div>

        </div>

        
      </div>

      <div className="featureSection section">

        <div className="features" > 

          <div className="featureImage">
            <img alt="chat" src={require("./img/chat.png")} />
          </div>

          <div className="featureText">
            <span className="grey">FIND MORE OPPORTUNITIES</span>
            <h2>Attract the best leads. Generate 10X more opportunities.</h2>
            <span>Attract visitors, convert them into leads, run campaigns, and turn your website into a lead generation machine.</span>
            <h3>Top features:</h3>

            <span className='featureList'>
              <img alt="landing page icon" src={landingPage}className='icon' /> 
              <span>
                Create landing pages in minutes. Monitor and understand visitor intent.
              </span>
            </span>
            <span className='featureList'>
              <img alt="landing page icon" src={visit} className='icon'/> 
              <span>
                 Understand visitor intent. <b>Track page visits and even actions</b>  on your site.
              </span>
            </span>
            <span className='featureList'>
              <img alt="landing page icon" src={AIBot} className='icon'/> 
              <span>
                Chat in real-time with website visitors using <b>AI-powered chatbots</b> 
              </span>
            </span>
            <span className='featureList'>
              <img alt="landing page icon" src={campaign}  className='icon'/> 
              <span>
                 Tailor <b>email campaigns</b>  and generate cost-effective leads for sales
              </span>
            </span>

            <span className="redText">Learn more</span>
          </div>

          
          
        </div>
      </div>

      <div className="featureSection section">
        <div className="features" > 

          <div className="featureText">
            <span className="grey">ENGAGE CONTEXTUALLY</span>
            <h2>Deliver personalized experiences at scale. Improve lead engagement.</h2>
            <span>Build tailored campaigns and optimize them with real-time data for better engagement.  </span>
            <h3>Top features:</h3>

            <span className='featureList'>
              <img alt="know your customer" src={customer} className='icon' /> 
              <span>Get a <b>360° view of a customer.</b>  Capture all customer interactions in one place.</span>
            </span>
            <span className='featureList'>
              <img alt="Freddy AI icon" src={AI} className='icon'/> 
              <span> <b>Freddy AI</b> identifies your best leads - the ones that are most likely to convert</span>
            </span>
            <span className='featureList'>
              <img alt="personlized journey" src={personalized} className='icon'/> 
              <span>Set up welcome emails or <b>personalized journeys </b> based on actions</span>
            </span>
            <span className='featureList'>
              <img alt="communication handles" src={communicate}  className='icon'/> 
              <span>Communicate across <b>Phone, Email, WhatsApp, Chat</b> </span>
            </span>

            <span className="redText">Learn more</span>
          </div>

          <div className="featureImage">
              <img alt="chat" src={require("./img/campaign.png")} />
          </div>

        </div>
      </div>

      <div className="featureSection section">

<div className="features" > 

  <div className="featureImage">
    <img alt="chat" src={require("./img/freddy-AI.png")} />
  </div>

  <div className="featureText">
    <span className="grey">CLOSE DEALS FASTER</span>
    <h2>Drive deals to closure, faster. Improve sales conversions by 50%.</h2>
    <span>Freddy AI helps you focus on the right deals that will drive revenue. Get insights across the funnel from lead to revenue with multi-touch attribution.</span>
    <h3>Top features:</h3>

    <span className='featureList'>
      <img alt="forcast" src={forecast}className='icon' /> 
      <span> Improve revenue predictability with <b>Dynamic Forecasting</b> 
      </span>
    </span>
    <span className='featureList'>
      <img alt="hand shake" src={shake} className='icon'/> 
      <span>Find the best deals to close with <b>AI-based Deal Insights</b> </span>
    </span>
    <span className='featureList'>
      <img alt="collaboration" src={collaborate} className='icon'/> 
      <span> <b>Collaborate on Slack</b>  across departments to close deals  </span>
    </span>

    <span className="redText">Learn more</span>
  </div>

  
  
</div>
      </div>

      <div className="featureSection section">
        <div className="features" > 

          <div className="featureText">
            <span className="grey">NURTURE CUSTOMER RELATIONSHIPS</span>
            <h2>Develop nurture campaigns that delight customers. Increase repeat purchases by over 50%.</h2>
            <span>Nurture leads along the funnel with targeted campaigns, support customers with educational content, and build deeper relationships. </span>
            <h3>Top features:</h3>

            <span className='featureList'>
              <img alt="nuture campaigns" src={personalized} className='icon' /> 
              <span>Develop <b>nurture campaigns</b>  with triggers, actions, and conditions </span>
            </span>
            <span className='featureList'>
              <img alt="send cash" src={mailcash} className='icon'/> 
              <span>  Send <b>transactional emails</b>  to customers to upsell and cross-sell</span>
            </span>
            <span className='featureList'>
              <img alt="forecast" src={forecast} className='icon'/> 
              <span>Get a breakdown of<b>campaign analytics</b>  for a holistic understanding of your market and audience</span>
            </span>

            <span className="redText">Learn more</span>
          </div>

          <div className="featureImage">
              <img alt="chat" src={require("./img/transaction.png")} />
          </div>

        </div>
      </div>

      <div className="brandsSection section">
        <div className="brands">
          <h2>Trusted by businesses worldwide</h2>
          <div className="brandLogos">
            <div className="brandLogosImage"><img src={require("./img/sify.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/cadence.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/blueNile.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/dyson.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/dunzo.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/opteon.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/pharmEasy.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/klarna.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/mtr.png")}/></div>
          </div>
        </div>
        
      </div>

      <div className="priceSection section">
        <div className="category">
          <span className="grey">PRICING</span>
          <h2>Sell faster and smarter with Freshsales Suite</h2>
          <div className="plans">

          </div>
        </div>
      </div>

      <div className="brandsSection section">
        <div className="brands">
          <h2>Connect Freshsales Suite with your favorite tools</h2>
          <div className="brandLogos">
            <div className="brandLogosImage"><img src={require("./img/gmail.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/docuSign.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/pandaDoc.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/payPal.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/quickBooks.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/xero.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/zapier.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/slack.png")}/></div>
            <div className="brandLogosImage"><img src={require("./img/outlook.png")}/></div>
          </div>
        </div>
        
      </div>
      <footer>
        <div className="footerLinks">

          <div className="links">
            <span className="footerLogo"><img alt="logo" src={logo}/></span>
            <ul>
              <li>Freshdesk</li>
              <li>Freshsales</li>
              <li>Freshmarketer</li>
              <li>Freshservice</li>
              <li>Freshteam</li>
            </ul>
          </div>

          <div className="links">
           <h4>COMPANY</h4>
            <span>About</span>
            <span>Leadership</span>
            <span>Board of Directors</span>
            <span>Investors</span>
            <span>Customers</span>
            <span>Solutions</span>
            <span>Affiliates</span>
            <span>Partners</span>
            <span>Careers</span>
            <span>Newsroom</span>
            <span>Contact Us</span>
            <span>GDPR</span>
            <span>US Sales Tax FAQ</span>
          </div>

          <div className="links">
            <h4>FRESHSALES SUITE</h4>
            <span>Features</span>
            <span>Pricing</span>
            <span>Signup</span>
            <span>Freddy AI</span>
            <span>Login</span>

            <h4>PRODUCTS</h4>
            <span>Freshsales</span>
            <span>Freshmarketer</span>
            <span>Freshsales Suite</span>
          </div>

          <div className="links">
            <h4>TOP FEATURES</h4>
            <span>Chat Campaigns</span>
            <span>Contact Management</span>
            <span>Conversion Rate Optimization</span>
            <span>Customer Journey</span>
            <span>Customer Segmentation</span>
            <span>Deal Management</span>
            <span>Email Campaigns</span>
            <span>Event Tracking</span>
            <span>Marketing Analytics</span>
            <span>Sales Analytics</span>
            <span>Sales Sequences</span>
            <span>Web Forms</span>
            <span>Workflow Automation</span>
          </div>

          <div className="links">
            <h4>SOLUTIONS</h4>
            <span>B2B CRM</span>
            <span>Client Management</span>
            <span>CPQ Solution</span>
            <span>CRM for Startups</span>
            <span>Enterprise</span>
            <span>Excel to CRM</span>
            <span>Free CRM</span>
            <span>Lead Management</span>
            <span>SMB</span>
            <span>Small Business CRM</span>
          </div>

          <div className="links">
            <h4>SOLUTIONS</h4>
            <span className='appstore'><img alt="play store" src={require("./img/img-google-play.png")} /></span>
            <span className='appstore'><img alt="play store" src={require("./img/img-apple-store.png")} /></span>
          </div>

        </div>

        <div className="copyright">
          <div>
            <span>Copyright &copy; Freshworks Inc. All Rights Reserved</span>
          </div>
         
        </div>
      </footer>

    </div>
  
  );
};

export default App;

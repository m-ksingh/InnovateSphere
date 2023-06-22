import React ,{useState,useEffect} from 'react';
import "../Component/css/style.css"
import "../Component/css/careers.css"
import img1 from "../Component/images/image.png";
import testimonial from "../Component/images/testimonial-5.jpg"
import c1 from "../Component/images//pexels-andrea-piacquadio-745136.jpg";
import c2 from "../Component/images/pexels-hussein-altameemi-2776353.jpg";
import c3 from "../Component/images/pexels-vinicius-wiesehofer-1130624.jpg";
import c4 from "../Component/images/pexels-andrea-piacquadio-845434.jpg"
import ClientsCarousel from '../Component/Client';


const Home = () => {
    const [headerBackground, setHeaderBackground] = useState('');
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [showmessage, setShowMessage] =useState(false)
    
const submitHandler =(e) =>{

e.preventDefault();
setShowMessage(true);
setName('');
setPhone('');
setEmail('');
setMessage('');
setTimeout(()=>{
    setShowMessage(false);
}, 3000)
console.log(name,phone,email,message)
}
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
          setHeaderBackground('#395a70d9'); // Change the color to your desired value
        } else {
          setHeaderBackground('');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <> 
      <header className="header" style={{ backgroundColor: headerBackground }}>
        <a href="#" className="logo"><img src="https://attachments.office.net/owa/mayank.singh%40alchemyinfotech.com/service.svc/s/GetAttachmentThumbnail?id=AAMkAGNhNjEyOWY3LTRhY2UtNGRjYi1hOWI4LWVkNmZkYzQ5NDkyOABGAAAAAAAOgJKSESCHTpReFO9hJfI9BwBQqZmfVQrsSZUV5OsGuWIyAAAAAAEMAABQqZmfVQrsSZUV5OsGuWIyAAGyrkxxAAABEgAQAG0vZlqUYYVNh2YugNS%2F6IA%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiOTBjZDJiYmRkYmE1NDFhN2EwOGM2OWQ5N2Q3ZmI3NTciLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3NDMyN2Y2OS1kNzEwLTRhMWUtOGQxOC00NDhmMWVjOGJjZjIiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMjAyMzA0MDA5MDJcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjNTY5YmI2Ni02ZTRhLTRlNTAtOWRkMi0zZTU5YTYyMTJmMTBcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTEyMjcwODQ0NC0zMTE0NDkzOTg3LTMyMzYyNzQ3NjktMjkxODg5NjdcIn0iLCJuYmYiOjE2ODc0MTYyOTAsImV4cCI6MTY4NzQxNjg5MCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDc0MzI3ZjY5LWQ3MTAtNGExZS04ZDE4LTQ0OGYxZWM4YmNmMiIsImhhcHAiOiJvd2EifQ.IeljVizvpx5HV5QkF_J18LyHYiXVKRGDsITkZROYzO-VnUgAGv3_cLU1P96FX57SbeS-pcjrhZ7ufYdpEfmVBwOL68EtYVB0AJmFrv6TDNPsiagRsG2UF4I4G-59ehPhrE7bmfsvibi3JPIA3qHu7JyYKybaZjw4BkkBnm4pvmNy_TasNQ5fKRx8ivcZdB9ysMey-OfEy0w1k353FX-SCcqvS9JVDR2fa16oXbemGbUJiEz1MWiLK3vE25oObVfuZe4zMn-NkRby37U-5F7swWyl9211I66Wcezybms_q1lPyrJ82hldb_PvbqFvFLtYAOoShWPHaAaWQ5NCPgFaCg&X-OWA-CANARY=tH8dAYtg-0iC0a0ey7oaIcBWEXLsctsY4q8ChxhA3T2RO0n3dLOXWblnB3bvlI2lqsBWJ6ppJwU.&owa=outlook.office.com&scriptVer=20230602011.24&animation=true" alt=""/></a>
        <div className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#service">services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#team">team</a></li>
            {/* <li><a href="careers.html">career</a></li> */}
            <li><a href="#contact">contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </header>

<section id="home" class="home">
  <h1>Building Modern & Secure Solutions</h1>
  <h2> Deploying Innovation, Maintaining Excellence</h2>
<div class="wave wave1"></div>
<div class="wave wave2"></div>
<div class="wave wave3"></div>
</section>

<section id="about" class="about">
<h1 class="heading">about us</h1>
<div class="row">
    <div class="content">
        <h3>We harness creativity to mitigate the adverse effects of IT on your business</h3>
        <p>At InnovateSphere, we are a dynamic IT firm driven by a passion for building, modernizing, deploying, and maintaining cutting-edge solutions. With a relentless focus on innovation, our expert team leverages the latest technologies to create robust and scalable systems that drive business growth. Our holistic approach ensures that we not only build custom solutions tailored to your unique needs but also offer seamless modernization strategies to keep your business ahead of the curve. Through meticulous deployment processes and rigorous maintenance, we ensure optimal performance, security, and efficiency of your IT infrastructure. Trust us to empower your business with our expertise, dedication, and commitment to excellence.</p>
        {/* <a href="#"><button class="btn">Read More</button></a> */}
    </div>
</div>
</section>

<div class="pt-5 pb-5" style={{backgroundColor: "#f2f2f2"}}>
<div class="container">
  <div class="row">
    <div class="section-head col-sm-12" id="service">
      <h1>Our Services</h1>
      <p>We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
        </p>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-laptop"></i></span>
        <h6>Enterprise App Development</h6>
        <p>Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-android"></i></span>
        <h6>Mobile App Development</h6>
        <p>We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-magic"></i></span>
        <h6>Digital Marketing</h6>
        <p>The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.</p>
      </div>
    </div>
  </div>
</div>
</div>



<section class="counters">
    <div class="container">
        <div>
            <i class="far fa-clock fa-4x"></i>
            <div class="counter" data-target="13500">1500+</div>
            <h3>Working Hours</h3>
        </div>
        <div>
            <i class="fas fa-gift fa-4x"></i>
            <div class="counter" data-target="720">20+</div>
            <h3>Completed Projects</h3>
        </div>
        <div>
            <i class="fas fa-users fa-4x"></i>
            <div class="counter" data-target="480">50+</div>
            <h3>Happy Clients</h3>
        </div>
        <div>
            <i class="fas fa-award fa-4x"></i>
            <div class="counter" data-target="120">25+</div>
            <h3>Awards Received</h3>
        </div>
    </div>
</section>

<div class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head-1 col-sm-12" style={{textAlign:"center"}}>
          <h4 style={{marginTop: "-5rem"}} id="portfolio"><span>Our</span> Projects</h4>
          
          <p>The objective of IT Company is to enable a large number of youth to take up <br/>industry-relevant skill training that will help them<br/> in securing a better livelihood.
            </p>
        </div>
        
        <div class="col-lg-4 col-sm-6">
          
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6><a href='https://www.evolveback.com/' target='blank'>Evolve back</a></h6>
            
            <p style={{textAlign:"justify"}}>
Our Evolve Back Resort application offers a seamless and immersive experience from check-in to checkout. With user-friendly features like online reservations, personalized itineraries, and real-time updates, guests can effortlessly navigate through their stay. Enhancing guest satisfaction and operational efficiency, our application transforms the resort experience into one of luxury and convenience..</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
          <h6><a href='https://gnosislabs.live/' target='blank'>Gnosis Labs</a></h6>
            <p style={{textAlign:"justify"}}>Our LMS application revolutionizes education by providing a comprehensive platform for online learning. With seamless course management, interactive content delivery, and robust assessment tools, our application empowers educators and learners alike. Experience a modern, intuitive, and efficient approach to online education with our advanced LMS solution.<br/><br/><br/></p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
          <h6><a href='https://kyckglobal.com/' target='blank'>kyckglobal</a></h6>
            <p style={{textAlign:"justify"}}>Our payment gateway integration for KyckGlobal application ensures secure and seamless transactions. With advanced encryption protocols and diverse payment options, businesses can easily manage payments across multiple channels. Streamline your financial operations and provide a frictionless payment experience for your customers with our robust payment gateway solution.<br/><br/></p>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="communicate">
    <h3>Transform Your Business Today</h3>
    <p>Build, Modernize, Deploy, and Maintain !</p>
    <a href="#contact"><button class="btn">Contact Now</button></a>
</div>



{/* <div class="clients mt-100">
    <div class="container">
        <div class="section-header">
            <h2>Our Clients</h2>
            <p>
                We don't just build softwares, we build your business.
            </p>
        </div>
        <div class="owl-carousel clients-carousel">
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
            <img src={img1} alt="Client Logo"/>
        </div>
    </div>
</div> */}

     
     <ClientsCarousel/>
    
   


<section class="team" style={{marginTop: "7rem"}}>
  <h1 class="heading" style={{marginTop: "-1.5rem"}} id="team">our team</h1>
  <p></p>
  <div class="row">
      <div class="card">
          <div class="image">
              <img src={c4} alt="Team member 1"/>
          </div>
          <div class="info">
              <h3>Schott Watkins</h3>
              <span>Web Developer</span>
              <div class="icons">
                  <a href="#!" class="fab fa-facebook-f"></a>
                  <a href="#!" class="fab fa-twitter"></a>
                  <a href="#!" class="fab fa-instagram"></a>
                  <a href="#!" class="fab fa-linkedin"></a>
              </div>
          </div>
      </div>
  </div>
  <div class="row">
      <div class="card">
          <div class="image">
              <img src={c3} alt="Team member 1"/>
          </div>
          <div class="info">
              <h3>Nicole Bell</h3>
              <span>Mobile Developer</span>
              <div class="icons">
                  <a href="#!" class="fab fa-facebook-f"></a>
                  <a href="#!" class="fab fa-twitter"></a>
                  <a href="#!" class="fab fa-instagram"></a>
                  <a href="#!" class="fab fa-linkedin"></a>
              </div>
          </div>
      </div>
  </div>
  <div class="row">
      <div class="card">
          <div class="image">
              <img src={c2} alt="Team member 1"/>
          </div>
          <div class="info">
              <h3>John Doe</h3>
              <span>Graphic Designer</span>
              <div class="icons">
                  <a href="#!" class="fab fa-facebook-f"></a>
                  <a href="#!" class="fab fa-twitter"></a>
                  <a href="#!" class="fab fa-instagram"></a>
                  <a href="#!" class="fab fa-linkedin"></a>
              </div>
          </div>
      </div>
  </div>
  <div class="row">
      <div class="card">
          <div class="image">
              <img src={c1} alt="Team member 1"/>
          </div>
          <div class="info">
              <h3>Rose Matthews</h3>
              <span>Web Designer</span>
              <div class="icons">
                  <a href="#!" class="fab fa-facebook-f"></a>
                  <a href="#!" class="fab fa-twitter"></a>
                  <a href="#!" class="fab fa-instagram"></a>
                  <a href="#!" class="fab fa-linkedin"></a>
              </div>
          </div>
      </div>
  </div>
</section>

<section id="contact" class="contact">
    <h1 class="heading">get in touch</h1>
</section>
<div class="contact-in">
    <div class="contact-map">
        <iframe src="https://maps.google.com/maps?q=Cotton Quest, Bellandur, Bengaluru, Karnataka 560103&t=&z=10&ie=UTF8&iwloc=&output=embed" width="100%" height="auto" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contact-form">
        
           <form autoComplete='off' onSubmit={submitHandler}>
           <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" class="contact-form-txt" required/>
            <input type="tel" id="phone"  value={phone} onChange={(e)=>setPhone(e.target.value)} pattern="[0-9]{10}" required placeholder="Contact number" maxlength="10" class="contact-form-phone"/>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" class="contact-form-email" required/>
            <textarea placeholder="Your Message"  value={message}  onChange={(e)=>setMessage(e.target.value)}class="contact-form-txtarea" required></textarea>
            {showmessage && <p style={{fontSize:"15px" ,textAlign:"center"}}>Data has been successfully saved</p>}
            <input type="submit" value="Submit" name="submit" class="contact-form-btn"/>
           
           </form>
       
    </div>
    </div>

    <section class="faq">
      <h1 class="heading" style={{marginTop: "-2rem", color: "#00bfff"}} id="faq">FAQ</h1>
      <div class="row">
          <div class="accordion-container">
              <div class="accordion">
                  <div class="accordion-header">
                      <span>+</span>
                      <h3>How much will it cost?</h3>
                  </div>
                  <div class="accordion-body">
                      <p>To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. 
                          Then we’ll be able to give you a ballpark figure. 
                          If you’re still interested, we’ll come to your place of business and come up with a firm quote.</p>
                  </div>
              </div>
              <div class="accordion">
                  <div class="accordion-header">
                      <span>+</span>
                      <h3>How long it takes to design?</h3>
                  </div>
                  <div class="accordion-body">
                      <p>The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. 
                          The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.</p>
                  </div>
              </div>
              <div class="accordion">
                  <div class="accordion-header">
                      <span>+</span>
                      <h3>How do I associate with IT Company?</h3>
                  </div>
                  <div class="accordion-body">
                      <p>The process begins when you contact us with your requirements. We analyze your requirements and respond to you. 
                          On the basis of the further discussion, you can choose an engagement model that suits you the best. 
                          After that, we begin the process of development.</p>
                  </div>
              </div>
              <div class="accordion">
                  <div class="accordion-header">
                      <span>+</span>
                      <h3>Can you help my current site look more professional?</h3>
                  </div>
                  <div class="accordion-body">
                      <p>Yes. Give us your requirements and we have experienced expertise to help you give a 
                          new professional look that really wonders!</p>
                  </div>
              </div>
              <div class="accordion">
                  <div class="accordion-header">
                      <span>+</span>
                      <h3>When do I pay?</h3>
                  </div>
                  <div class="accordion-body">
                      <p>For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. 
                          We understand that this is a big investment and want to help you budget for the expense in whatever way possible.
                          We accept checks, PayPal, and all major credit cards.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>

    <div class="footer">
      <div class="footer-top">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6 footer-links">
                      <h4>About Us</h4>
                      <ul>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#">Home</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#about">About us</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#service">Our services</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#">Terms & condition</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#">Privacy policy</a></li>
                      </ul>
                  </div>

                  <div class="col-lg-4 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#team">Team</a></li>
                          {/* <li><i class="ion-ios-arrow-forward"></i> <a href="#">Career</a></li> */}
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#contact">Contact</a></li>
                          <li><i class="ion-ios-arrow-forward"></i> <a href="#faq">FAQ</a></li>
                      </ul>
                  </div>

                  <div class="col-lg-4 col-md-6 footer-contact" style={{fontSize: "1.5rem"}}>
                      <h4>Contact Us</h4>
                      <p>
                      #17/1, SVR Kalpavruksh 2nd Floor<br/>
                      Bellandur Gate 
Opp.Cotton Quest, Ambalipura, Neare HDFC Bank 
Sarjapur Road<br/>
, Bengaluru-560102 <br/>
                          <strong>Phone:</strong>+1 252 557 1055<br/>+91-9731149585 <br/>
                          <strong>Email:</strong> info@InnovateSphere.com<br/>
                      </p>

                    

                  </div>

                 

              </div>
          </div>
      </div>

      <div class="container">
          <div class="row align-items-center">
              <div class="col-md-6 copyright" style={{color: "#fff", fontSize: "1.3rem"}}>
                  Copyright &copy; 2023 innovateSphere. All Rights Reserved.
              </div>
          </div>
      </div>
  </div>

  









</>
  )
}

export default Home
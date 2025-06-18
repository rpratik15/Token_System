import React from 'react'
import '../Style/footer.css'
import { NavLink } from "react-router-dom";
import myphoto from '../assets/myphoto.jpg'

function Footer() {
  return (
    

   
 <footer>
        <div className="container">
            <div className="col-1">
                <img id="myphoto" src={myphoto} alt="MyPhoto"/>
                <p>Follow my instagram channel named Pratik Raval to see more of such projects and other posts. Also
                    Like and share these posts.Also follow me on Github and Linkedin. I hope you will like my content.
                </p>
            </div>
            <div className="col-2">
                <h3>Quick Links</h3>
                <ul>

                   <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About US</NavLink></li>
                    <li><NavLink to="/contact">Contact US</NavLink></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
            {/* <div class="col-3">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Python</a></li>
                    <li><a href="#">C++</a></li>
                </ul>
            </div> */}
            <div className="col-3">
                {/* <h3>Newsletter</h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type="email" placeholder="Enter your email" required/>
                    <button><i className="fas fa-arrow-right"></i></button>
                </form> */}
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-2">
            <p>© 2025 | Made with ❤️ by Pratik Raval. All Rights Reserved.</p>
        </div>
    </footer>
  
   
   )
}

export default Footer

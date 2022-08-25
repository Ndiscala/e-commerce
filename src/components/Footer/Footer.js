import React from 'react';
import '../../Styles/Footer.css'


const Footer = () => {
  return (
    <footer className=" text-center text-white">
            
        <div className="container p-4 pb-0">


             {/* <!-- PORTFOLIO --> */}

                <a
                className="btn btn-primary btn-floating m-3"
                // style={{backgroundColor: '#263574'}}
                href="https://ndiscala.github.io/"
                role="button"
                ><i className="bi bi-link-45deg"></i>
                </a>

            {/* <!-- instagram --> */}

                <a
                className="btn btn-primary btn-floating m-3"
                // style={{backgroundColor: '#263574'}}
                href="https://www.instagram.com/0usi/"
                role="button"
                ><i className="bi bi-instagram"></i>
                </a>

            {/* <!-- Linkedin --> */}
                <a
                className="btn btn-primary btn-floating m-3"
                // style={{backgroundColor: '#263574'}}
                href="https://www.linkedin.com/in/ndiscala/"
                role="button"><i className="bi bi-linkedin"></i>
                </a>
            {/* <!-- Github --> */}
                <a
                className="btn btn-primary btn-floating m-3"
                // style={{backgroundColor: '#263574'}}               
                href="https://github.com/Ndiscala"
                role="button"><i className="bi bi-github"></i>
                </a>
            
    
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'

const Footer = () => {
return (
<>
  <footer className="text-center bg-body-tertiary">
    <div className="container pt-4">

      <section className="mb-3">

        <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
          data-mdb-ripple-color="dark">
             <MDBIcon fab icon="google" style={{ color: '#4285F4' }} />
        </a>

        <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
          data-mdb-ripple-color="dark">
             <MDBIcon fab icon="twitter" style={{ color: '#1DA1F2' }} />
        </a>

      
        <a data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
          data-mdb-ripple-color="dark">
           <MDBIcon fab icon="instagram" style={{ color: '#E1306C' }} />
        </a>

        <a data-mdb-ripple-init
         className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark">
             <MDBIcon fab icon="linkedin" style={{ color: '#0A66C2' }} />
        </a>

        <a data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
          data-mdb-ripple-color="dark">
               <MDBIcon fab icon="github" style={{ color: '#333' }} />
        </a>
      </section>

    </div>
    <div className="text-center p-3 bg-light">
      © 2024 Copyright@
      <a className="text-body" href="https://mdbootstrap.com/">hospitalmanagement.com</a>
    </div>

  </footer>
</>
)
}

export default Footer
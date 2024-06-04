import React from 'react'
import styles from './login.module.css'

const Login = () => {
return (
<>
  <section className={styles.loginSection}>
    <div className={styles.login}>
      <h2 className={styles.heading}>Login</h2>
      <div className="form-floating mb-3 w-75 ">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
  <span className = "text-danger">Error</span>
</div>
<div class="form-floating mb-4 w-75">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
  <span className = "text-danger">Error</span>
</div>

<button type="button" className="btn btn-primary w-75">Login</button>
    </div>
  </section>


</>
)
}

export default Login
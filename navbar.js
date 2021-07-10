function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          BadBank
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {/* <ul className='nav'> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/'>
                BadBank
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/CreateAccount/'>
                Create Account
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login/'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/deposit/'>
                Deposit
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/withdraw/'>
                Withdraw
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Balance/'>
                Balance
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/alldata/'>
                AllData
              </Link>
            </li>
            {/* <a href='#'>BadBank</a>
      <a href='#/CreateAccount/'>Create Account</a>
      <a href='#/login/'>Login</a>
      <a href='#/deposit/'>Deposit</a>
      <a href='#/withdraw/'>Withdraw</a>
      <a href='#/balance/'>Balance</a>
      <a href='#/alldata/'>AllData</a> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

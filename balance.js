function Balance() {
  const ctx = React.useContext(UserContext);
  var loggedin = ctx.state.loggedin;
  if (loggedin) {
    var user = ctx.state.userNumber;
    var balance = ctx.users[user].balance;
  }

  return (
    <Card
      bgcolor='danger'
      header='Account Balance'
      body={
        loggedin ? (
          <>
            Balance ${balance}
            <br />
          </>
        ) : (
          <>
            <h5>Login to see balance amount</h5>
            <Link to='/login/'>
              <button type='button' className='btn btn-light'>
                Login
              </button>
            </Link>
          </>
        )
      }
    />
  );
}

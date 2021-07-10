function Deposit() {
  const [amount, setAmount] = React.useState("");
  const [valid, setValid] = React.useState(true);
  const ctx = React.useContext(UserContext);
  var text = `Minimum $1 is required for deposit transaction!!`;

  var loggedin = ctx.state.loggedin;
  if (loggedin) {
    var user = ctx.state.userNumber;
    var balance = ctx.users[user].balance;
  }

  function deposit() {
    if (amount < 1) {
      setValid(false);
      clearForm();
    } else {
      let newBalance = Number(balance) + Number(amount);
      ctx.users[user].balance = newBalance;
      balance = newBalance;
      clearForm();
      setValid(true);
    }
  }

  function clearForm() {
    setAmount("");
  }

  return (
    <Card
      bgcolor='success'
      header='Deposit'
      body={
        loggedin ? (
          <>
            {!valid && <Alert text={text} />}
            Balance ${balance}
            <br />
            Deposit Amount
            <br />
            <input
              type='text'
              className='form-control'
              id='deposit'
              placeholder='Deposit Amount'
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              required
            />
            <br />
            <button type='submit' className='btn btn-light' onClick={deposit}>
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Login to deposit amount</h5>
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

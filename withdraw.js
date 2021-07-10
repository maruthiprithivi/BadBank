function Withdraw() {
  const [amount, setAmount] = React.useState("");
  const [valid, setValid] = React.useState(true);
  const ctx = React.useContext(UserContext);
  const textMinimum = "Minimum withdraw amount is $1.";
  const textInsufficient = "Insufficient balance!!";
  var loggedin = ctx.state.loggedin;
  if (loggedin) {
    var user = ctx.state.userNumber;
    var balance = ctx.users[user].balance;
  }
  // function alert() {
  //   if (amount < 1) {
  //     return <Alert text={textMinimum} />;
  //   }
  //   if (balance < amount) {
  //     return <Alert text={textInsufficient} />;
  //   }
  // }
  function withdraw() {
    if (balance < amount) {
      setValid(false);
      clearForm();
    } else {
      let newBalance = Number(balance) - Number(amount);
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
      bgcolor='info'
      header='Withdraw'
      body={
        loggedin ? (
          <>
            {!valid && <Alert text={textInsufficient} />}
            Balance ${balance}
            <br />
            Deposit Amount
            <br />
            <input
              type='text'
              className='form-control'
              id='Withdraw'
              placeholder='Withdraw Amount'
              value={amount}
              onChange={(e) => setAmount(Number(e.currentTarget.value))}
              required
            />
            <br />
            <button type='submit' className='btn btn-light' onClick={withdraw}>
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Login to withdraw amount</h5>
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

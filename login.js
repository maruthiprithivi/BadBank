function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [valid, setValid] = React.useState(true);
  const [error, setError] = React.useState("");
  const ctx = React.useContext(UserContext);
  var text = `Not a valid ${error}`;
  var loggedin = ctx.state.loggedin;
  if (loggedin) {
    var user = ctx.state.userNumber;
    var name = ctx.users[user].name;
    // setShow(false);
  }

  function login() {
    console.log("clicked");
    ctx.users.forEach((user, index) => {
      if (user.email === email) {
        if (user.password === password) {
          ctx.state.loggedin = true;
          ctx.state.userNumber = index;
          setShow(false);
          setValid(true);
        } else {
          setError("password");
          setValid(false);
        }
      } else {
        setError("email address");
        setValid(false);
      }
    });
  }

  function logout() {
    ctx.state.loggedin = false;
    clearForm();
  }

  function clearForm() {
    setEmail("");
    setPassword("");
  }
  return (
    <Card
      bgcolor='warning'
      header='Login'
      status={status}
      body={
        !loggedin ? (
          <>
            {!valid && <Alert text={text} />}
            {/* <br /> */}
            Email address
            <br />
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <br />
            Password
            <br />
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
            <br />
            <button type='login' className='btn btn-light' onClick={login}>
              Login
            </button>
          </>
        ) : (
          <>
            <h5>You're logged in as {name}</h5>
            <button type='submit' className='btn btn-light' onClick={logout}>
              Logout
            </button>
          </>
        )
      }
    />
  );
}

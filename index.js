function Spa() {
  return (
    <HashRouter>
      <NavBar />
      {/* <div className='container'> */}
      <UserContext.Provider
        value={{
          users: [
            {
              name: "maru",
              email: "maru",
              password: "maru",
              balance: 9999,
            },
          ],
          state: { loggedin: false, userNumber: null },
        }}>
        <Route path='/' exact component={Home} />
        <Route path='/CreateAccount/' exact component={CreateAccount} />
        <Route path='/login/' exact component={Login} />
        <Route path='/deposit/' exact component={Deposit} />
        <Route path='/withdraw/' exact component={Withdraw} />
        <Route path='/balance/' exact component={Balance} />
        <Route path='/alldata/' exact component={AllData} />
      </UserContext.Provider>
      {/* </div> */}
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));

import './TestApi.css';


function TestApi(props){

  /* 
  onUserMe={refreshProfileData}
            onSignIn={handleLogin}
            onSignUp={handleRegister}
            onSignOut={handleSignOut}
  */

  function handleSignUp(e){
    e.preventDefault();
    props.onSignUp(
      {
        name: "Александр",
        password: "password",
        email: "email7@example.com"
    });
    console.log(`${e.target.name} pressed`);
  }

  function handleSignIn(e){
    e.preventDefault();
    props.onSignIn(
      {
        password: "password",
        email: "email7@example.com"
      }
    )
    console.log(`${e.target.name} pressed`);
  }

  function handleSignOut(e){
    e.preventDefault();
    console.log(`${e.target.name} pressed`);
  }

  function handleGetProfile(e){
    e.preventDefault();
    console.log(`${e.target.name} pressed`);
  }

  function handleSecured(e){
    e.preventDefault();
    console.log(`${e.target.name} pressed`);
  }

  return (
    <section className="testApi">
      <ul className='testApi__list'>
        <li><button className="testApi__button" name='SignUp' onClick={handleSignUp}>SignUp</button></li>

        <li><button className="testApi__button" name='SignIn' onClick={handleSignIn}>SignIn</button></li>

        <li><button className="testApi__button" name='SignOut' onClick={handleSignOut}>SignOut</button></li>

        <li><button className="testApi__button" name='GetProfile' onClick={handleGetProfile}>GetProfile</button></li>

        <li><button className="testApi__button" name='Secured' onClick={handleSecured}>Secured</button></li>
      </ul>
    </section>
  );
}

export default TestApi;
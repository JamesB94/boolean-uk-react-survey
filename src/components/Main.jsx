import { useState, useRef } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  
    /*Here is the states */

    const [duckFeature, setDuckFeature] = useState("")
    const [duckConcistancy, setDuckConcistancy] = useState("")
    const [duckColor, setDuckColor] = useState("")
    const [duckEmail, setDuckEmail] = useState("")
    const [usersName, setUsersName] = useState("")
    const [duckActivity, setDuckActivity] = useState("")
    const [comment, setcomment] = useState("")



    const formObj = useRef(null);
  

  const handleChange = (e) => {
    setDuckFeature(e.target.value);
   //console.log('here is  ' + (e.target.value))
  };

  const handleConcistancy = (e) => {
    setDuckConcistancy(e.target.value)
    //console.log('this is  ' + (e.target.value))
  }

  const handleColor = (e) => {
    setDuckColor(e.target.value)
    //console.log('this is  ' + (e.target.value))
  }

  const gatherEmail = (e) => {
    setDuckEmail(e.target.value)
    //console.log('this is  ' + (e.target.value))
  }

  const gatherName = (e) => {
    setUsersName(e.target.value)
    //console.log('my name is ' + (e.target.value))
  }

  const gatherComment = (e) => {
    setcomment(e.target.value)
    //console.log('my thought is ' + (e.target.value))
  }

  const gatherActivity = (e) => {
    setDuckActivity(e.target.value)
    //console.log('i like to  ' + (e.target.value))
  }

  const formReset = () => {
    //location.reload();
    //formObj.reset()
      setDuckFeature(" "),
      setDuckConcistancy(" "),
      setDuckColor(" "),
      setUsersName(" "),
      setDuckEmail(" "),
      setDuckActivity(" "),
      setcomment(" ")
   

  }

  const formSubmit = (e) => {
    e.preventDefault()
    //console.log('this is a submit test')
    const userData = {
      username: usersName,
      email: duckEmail,
      features: duckFeature,
      duckConcistancy: duckConcistancy,
      duckColor: duckColor,
      activitys: duckActivity,
      userComment:comment
    }
    
    console.log(userData)
    formReset()
    
  }





  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">

        <form className="form" onSubmit={formSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          {/*Here is Question 1 */}
          <h3>What would you say is the best feature of your duck?</h3>

          <div className="form__group radio">
            <ul>
              <li>
                  <input
                    id="yellowDuck"
                    name="feature"
                    type="radio"
                    value="yellowColor"
                    //value={yellowColor}
                    onChange={handleChange}
                  />
                <label htmlFor="yellowDuck">
                  color{" "}
                </label>
              </li>
              <li>               
                  <input
                    id="big"
                    name="feature"
                    type="radio"
                    value="itsBig"
                    onChange={handleChange}
                  />
                  <label htmlFor="big">
                  It's Big
                </label>
              </li>
              <li>
                
                  <input
                    id="logo"
                    name="feature"
                    type="radio"
                    value="Logo"
                    //name="logo"
                    onChange={handleChange}
                  />
                  <label htmlFor = "logo">
                  Logo
                </label>
              </li>
              <li>
                  <input
                    id="squeks"
                    name="feature"
                    type="radio"
                    value="Squeks"
                    //name="Squeks"
                    onChange={handleChange}
                  />
                  <label htmlFor="squeks">
                  It Squeks
                </label>
              </li>
            </ul>
          </div>

          {/*Here is Question 2 */}
          <div className="form__group radio">
            <h3>How do you rate your rubber ducks concistancy ?</h3>

            <ul>
              <li>
                <input id="concistancy-one" type="radio" name="concistancy" value="1"  onChange={handleConcistancy} />
                <label htmlFor="concistancy-one" >1</label>
              </li>
              <li>
                <input id="concistancy-two" type="radio" name="concistancy" value="2" onChange={handleConcistancy} />
                <label htmlFor="concistancy-two">2</label>
              </li>
              <li>
                <input id="concistancy-three" type="radio" name="concistancy" value="3" onChange={handleConcistancy} />
                <label htmlFor="concistancy-three">3</label>
              </li>
              <li>
                <input id="concistancy-four" type="radio" name="concistancy" value="4" onChange={handleConcistancy} />
                <label htmlFor="concistancy-four">4</label>
              </li>
            </ul>
          </div>

          {/*Here is Question 3 */}

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleColor}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleColor}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3"  onChange={handleColor}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4"  onChange={handleColor}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          {/*Here is Question 4 */}
          <div className="form__group radio">
            <h3>How do you like to spend time with your rubber duck</h3>

            <ul>
              <li>
                
                  <input id="swiming" name="spend-time" type="radio" value="swimming" onChange={gatherActivity} />
                  <label htmlFor="swiming">
                  Swimming
                </label>
              </li>
              <li>
                
                  <input id="bathing" name="spend-time" type="radio" value="bathing" onChange={gatherActivity} />
                  <label htmlFor="bathing">
                  Bathing
                </label>
              </li>
              <li>
                 
                  <input id="chatting" name="spend-time" type="radio" value="chatting" onChange={gatherActivity} />
                  <label htmlFor="chatting">
                  Chatting
                </label>
              </li>
              <li>
                
                  <input id="noTime" name="spend-time" type="radio" value="noTime" onChange={gatherActivity} />
                  <label htmlFor="noTime">
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          {/*Here is Question 5 */}
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={comment} onChange={gatherComment}></textarea>
          </label>
          {/*Here is Question 6 */}
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={usersName} onChange = {gatherName}/>
          </label>
          {/*Here is Question 7 */}
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value= {duckEmail}  onChange={gatherEmail}/>
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!"  />
        </form>
      </section>
    </main>
  );
}

export default Main;

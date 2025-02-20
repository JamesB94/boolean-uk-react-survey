import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state



  {/*Here is the states */}

  const [userAnswer, setAnswer] = useState({
    name:'',
  })

  const handleChange = () => {
    (e)=> setAnswer(e.target.value)
  }


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{/* a form should be here */}
      
<form class="form">
    <h2>Tell us what you think about your rubber duck!</h2>

    {/*Here is Question 1 */}
    <h3>What would you say is the best feature of your duck?</h3>

    <div className="form__group" >
    <ul>
    <li>
      <label
        ><input
          // name="spend-time"
          type="checkbox"
          value="yellowColor"
          name = "yellowColor"
          onChange={handleChange}
        />It's yellow</label
      >
    </li>
    <li>
      <label
        ><input name="spend-time" type="checkbox" value="itsBig"  onChange={handleChange}/>It's Big</label
      >
    </li>
    <li>
      <label
        ><input
          // name="spend-time"
          type="checkbox"
          value="Logo"
          name = "logo"
          onChange={handleChange}
        />I'ts Logo</label
      >
    </li>
    <li>
      <label
        ><input 
        // name="spend-time" 
        type="checkbox" value="Squeks" name = "Squeks" onChange={handleChange} />It Squeks</label
      >
    </li>
  </ul>
    </div>

    {/*Here is Question 2 */}
    <div class="form__group radio">
      <h3>How do you rate your rubber ducks concistancy ?</h3>

      <ul>
    <li>
      <input id="color-one" type="radio" name="color" value="1" /><label
        for="color-one"
        >1</label
      >
    </li>
    <li>
      <input id="color-two" type="radio" name="color" value="2" /><label
        for="color-two"
        >2</label
      >
    </li>
    <li>
      <input id="color-three" type="radio" name="color" value="3" /><label
        for="color-three"
        >3</label
      >
    </li>
    <li>
      <input id="color-four" type="radio" name="color" value="4" /><label
        for="color-four"
        >4</label
      >
    </li>
  </ul>


    </div>

    {/*Here is Question 3 */}

    <div class="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>

      <ul>
    <li>
      <input id="color-one" type="radio" name="color" value="1" /><label
        for="color-one"
        >1</label
      >
    </li>
    <li>
      <input id="color-two" type="radio" name="color" value="2" /><label
        for="color-two"
        >2</label
      >
    </li>
    <li>
      <input id="color-three" type="radio" name="color" value="3" /><label
        for="color-three"
        >3</label
      >
    </li>
    <li>
      <input id="color-four" type="radio" name="color" value="4" /><label
        for="color-four"
        >4</label
      >
    </li>
  </ul>


    </div>

    {/*Here is Question 4 */}
    <div class="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>

      <ul>
    <li>
      <label
        ><input
          name="spend-time"
          type="checkbox"
          value="swimming"
        />Swimming</label
      >
    </li>
    <li>
      <label
        ><input name="spend-time" type="checkbox" value="bathing" />Bathing</label
      >
    </li>
    <li>
      <label
        ><input
          name="spend-time"
          type="checkbox"
          value="chatting"
        />Chatting</label
      >
    </li>
    <li>
      <label
        ><input name="spend-time" type="checkbox" value="noTime" />I don't like to
        spend time with it</label
      >
    </li>
  </ul>

    </div>

    {/*Here is Question 5 */}
    <label
      >What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
      ></textarea></label
    >
    {/*Here is Question 6 */}
    <label
      >Put your name here (if you feel like it):<input
        type="text"
        name="username"
        value="" /></label
    >
    {/*Here is Question 7 */}
    <label
      >Leave us your email pretty please??<input
        type="email"
        name="email"
        value="" /></label
    ><input class="form__submit" type="submit" value="Submit Survey!" />
</form>
      
      
      
      
      </section>
    </main>
  );
}

export default Main;

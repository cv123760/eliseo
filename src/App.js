import React, { useState } from "react";
import axios from "axios"

function App() {

  const [email, setEmail] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    setEmail(prev => {
      return { ...prev, [name]: value }
    })

  }

  const handleClick = () => {
    axios.post("new-lead", email)
    setEmail({
      name: "",
      email: "",
      message: ""
    })
  }

  const [visibility, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(prev => !prev)
  }

  const scroll = event => {
    const element = document.getElementById(event.target.innerHTML)
    console.log(element)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <div>
      <main>
        <div className="containerMain">
          <nav>
            <div className="links">

              <a onClick={event => {
                event.preventDefault()
                scroll(event)
              }}
                href="#"
              >PROJECTS</a>

              <a onClick={event => {
                event.preventDefault()
                scroll(event)
              }}
                href="#"
              >ABOUT US</a>

              <a onClick={event => {
                event.preventDefault()
                scroll(event)
              }}
                href="#"
              >CONTACT</a>

            </div>

            <div className="socialMedia">
              <a target="_blank" href="https://www.instagram.com/godoyexd/?utm_medium=copy_link">
                <img src="images/logo-ins.svg" alt="Instagram" />
              </a>
              <a target="_blank" href="https://www.facebook.com/Godoy-Exterior-Design-104660158839824">
                <img src="images/logo-fac.svg" alt="Facebook" />
              </a>
              <a target="_blank" href="#">
                <img src="images/logo-wha.svg" alt="WhatsApp" />
              </a>
            </div>

            <div
              className="burgerMenu"
              onClick={toggleVisible}
            >

              <img src="images/burger-menu.svg" alt="" />
              <div className="bmenu" style={{ display: visibility ? "block" : "none" }}>
                <a onClick={event => {
                  event.preventDefault()
                  scroll(event)
                }}
                  className="navLinks"
                  href="#"
                >PROJECTS</a>

                <a onClick={event => {
                  event.preventDefault()
                  scroll(event)
                }}
                  className="navLinks"
                  href="#"
                >ABOUT US</a>

                <a onClick={event => {
                  event.preventDefault()
                  scroll(event)
                }}
                  className="navLinks"
                  href="#"
                >CONTACT</a>


                <a target="_blank" href="https://www.instagram.com/godoyexd/?utm_medium=copy_link">
                  <img src="images/logo-ins.svg" alt="Instagram" />
                </a>

                <a target="_blank" href="https://www.facebook.com/Godoy-Exterior-Design-104660158839824">
                  <img src="images/logo-fac.svg" alt="Facebook" />
                </a>

                <a target="_blank" href="#">
                  <img src="images/logo-wha.svg" alt="WhatsApp" />
                </a>

              </div>
            </div>
          </nav>

          <div className="logo">
            <img src="images/Logo.png" alt="" />
          </div>

        </div>
      </main>

      <div className="intro" id="ABOUT US" >

        <h1>Your Home is Your Pride and Joy</h1>

        <div className="paragraph" >

          <p>With over 25 years industry experience, Godoy Exterior Design will make your vision a reality. We will empower
            you to create the exterior for your home you have always desired. Let our experienced team bring new life to it
            with the finishing touches you envision.
          </p>

          <p>We are your exterior finish specialists. Contact us today for a free consultation.</p>

        </div>

        <div className="videoWraper">

          <iframe id="PROJECTS" src="https://www.youtube.com/embed/MgZ1MheFBuI" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

        </div>

      </div>

      <div className="blueSection">

        <h2>WHAT OUR CLIENTS SAY</h2>

        <div className="reviews">

          <div className="reviewContainer">

            <div className="clientReview">

              <p>Very professional and pleasant staff, definitely one of the best stucco contractors of the valley! If you are looking for quality and on time work Godoy EXD is your go to.</p>

            </div>

            <div className="name">
              <p>EVALYN W.</p>
            </div>

            <p className="location">CHANDLER, AZ</p>

          </div>

          <div className="reviewContainer">
            <div className="clientReview">
              <p>Great job. Easy to work with. Constant communication. Very Professional and showed up right on schedule every day. </p>
            </div>

            <div className="name">
              <p>TANNER M.</p>
            </div>
            <p className="location">PHOENIX, AZ</p>

          </div>

        </div>



      </div>

      <div className="App" id="CONTACT">
        <h3>CONTACT US</h3>

        <form>

          <input
            name="name"
            placeholder="NAME"
            type="text"
            onChange={(event => {
              handleChange(event)
            })}
            value={email.name}
          />

          <input
            name="email"
            placeholder="EMAIL"
            type="email"
            onChange={(event => {
              handleChange(event)
            })}
            value={email.email}
          />

          <input
            className="message"
            name="message"
            placeholder="MESSAGE"
            type="text"
            onChange={(event => {
              handleChange(event)
            })}
            value={email.message}
          />

          <button
            type="submit"
            onClick={event => {
              event.preventDefault()
              if (email.email.includes("@")) { handleClick() }
              else { alert("Please enter a valid Email address") }
            }}
          > SEND</button>


        </form>

      </div>
    </div>
  );
}

export default App;

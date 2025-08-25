import logCat from './assets/logo-cat.svg'
import profileSvg from './assets/profile.svg' 
import searchIcon from './assets/search-icon.svg'
import './App.css'

function App() {

  return (
    <>
        <div className="container">
          <section>

            <div id='top'>
              <h1 id='title'>Search</h1>
              <div id='logo-cat'>
                <img id='icon-cat' src={logCat} alt="" />
              </div>
            </div>

            <div id="area">
              <div className="input-box">
                <input id='input' type="text" placeholder='Type here' />
                  <span id="search-icon">
                    <img src={searchIcon} alt="search" />
                </span>
              </div>

              <div id='card'>

                <div id='profile' >
                  <img id='img-profile' src={profileSvg} alt="profile picture" />
                  <div id='text-profile' >
                    <h1>octocat</h1>
                    <p>joined 25 jan 2011</p>
                  </div>
                </div>

                  <h1 id='text-repositories' >repositories</h1>
                  <hr class="divider" />

              </div>

            </div>

          </section>
        </div>
    </>
  )
}

export default App
                                
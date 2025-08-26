import logCat from './assets/logo-cat.svg'
import profileSvg from './assets/profile.svg' 
import searchIcon from './assets/search-icon.svg'
import Repositories from './components/RepositoriesBox'
import './App.css'

function App() {

  return (
    <>
        <div className="container">
          <section>

            <div id='top'>
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
                    <h1 id='profile-name'>octocat</h1>
                    <p>joined 25 jan 2011</p>
                  </div>
                </div>

                  <h1 id='text-repositories' >repositories</h1>
                  <hr class="divider" />
                  <h1 id='amount-repositories' >25 repositories</h1>

                <div id='repositories-field'>
                  
                    <Repositories
                      title = "Spoon-knife"
                      description = "This repo is for demonstration purposes"
                      lastUpdate = "Updated 5 days ago"
                    />

                    <Repositories
                      title = "Hello-Word"
                      description = "This is my first repo"
                      lastUpdate = "Updated 20 days ago"
                    />

                    <Repositories
                      title = "Spoon-knife"
                      description = "This repo is for demonstration purposes"
                      lastUpdate = "Updated 5 days ago"
                    />

                    <Repositories
                      title = "Spoon-knife"
                      description = "This repo is for demonstration purposes"
                      lastUpdate = "Updated 5 days ago"
                    />

                </div>

              </div>

            </div>

          </section>
        </div>
    </>
  )
}

export default App
                                
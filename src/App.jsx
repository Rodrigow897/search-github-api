import logCat from './assets/logo-cat.svg'
import searchIcon from './assets/search-icon.svg'
import Repositories from './components/RepositoriesBox'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [repositories, setRepositories] = useState([])
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("octocat") // initial value

  const fetchUserData = (username) => {
    if (!username) return

    // Search for user
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === "Not Found") {
          setUser(null)
          setRepositories([])
        } else {
          setUser(data)
        }
      })

    // Search for repositories
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        if (!data.message) {
          setRepositories(data)
        } else {
          setRepositories([])
        }
      })
  }

  // initial (octocat)
  useEffect(() => {
    fetchUserData("octocat")
  }, [])

  return (
    <>
      <div className="container">
        <section>

          <div id='top'>
            <a href="https://github.com/">
              <div id='logo-cat'>
                <img id='icon-cat' src={logCat} alt="GitHub logo" />
              </div>
            </a>
          </div>

          <div id="area">
            <div className="input-box">
              <input
                id='input'
                type="text"
                placeholder='Digite um usuário'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                id="search-icon"
                onClick={() => fetchUserData(search)} // search here
                style={{ cursor: "pointer" }}
              >
                <img src={searchIcon} alt="search" />
              </span>
            </div>

            <div id='card'>

              {/* User profile */}
              <div id='profile'>
                {user ? (
                  <>
                    <img id='img-profile' src={user.avatar_url} alt="profile picture" />
                    <div id='text-profile'>
                      <h1 id='profile-name'>{user.name || user.login}</h1>
                      <p>Joined {new Date(user.created_at).toDateString()}</p>
                    </div>
                  </>
                ) : (
                  <p id="userNotFound">User Not Found... 😕</p>
                )}
              </div>

              {/* Repositories */}
              {user && (
                <>
                  <h1 id='text-repositories'>Repositories</h1>
                  <hr className="divider" />
                  <h1 id='amount-repositories'>{repositories.length} repositories</h1>

                  <div id='repositories-field'>
                    {repositories.map(repo => (
                      <Repositories
                        key={repo.id}
                        title={repo.name}
                        description={repo.description || "No description"}
                        lastUpdate={`Updated ${new Date(repo.updated_at).toDateString()}`}
                      />
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default App

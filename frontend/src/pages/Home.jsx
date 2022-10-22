import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

function Home() {
  return (
    <>
        <section className="heading">
            <h1>Hello and Welcome!</h1>
            <p>We look forward to working with you!</p>
        </section>
        <ul>
            <li>
                <button>
                    <Login />
                </button>
            </li>
            <li>
                <button>
                    <Register />
                </button>
            </li>
        </ul>
    </>
  )
}

export default Home
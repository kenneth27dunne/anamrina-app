import { BASE_URL } from './constants/config'
import logo from './assets/full-logo.png'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { loading, data, error } = useFetch(BASE_URL + '/api/under-construction')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { Title, subHeading, contactEmail } = data.data;

  return (
    <>
      <img src={logo} style={{ maxWidth: '100%', maxHeight: '6em' }} className="logo react" alt="React logo" />
      
      <div className="content">
        <h1>{Title}</h1>
        <p>{subHeading}</p>    
        <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import { getPhotos } from './components/ApiService.js'

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [image, setImage] = useState([]);
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query)
      return
    const fethData = async () => {
      setLoding(true)
      try {
        const data = await getPhotos(query, page);
        console.log(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoding(false)
      }
    }
    fethData();
  }, [query, page]);

  const onHandleSumbit = (value) => {
    setQuery(value);
  }


  return (
    <>
      <SearchBar onSubmit={onHandleSumbit} />
    </>
  )
}

export default App

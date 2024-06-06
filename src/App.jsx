import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import { getPhotos } from './components/ApiService.js'
import Loader from './components/Loader/Loader.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
// { results, total, total_pages }
function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [image, setImage] = useState([]);
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!query)
      return
    const fethData = async () => {
      setLoding(true)
      try {
        const { results, total, total_pages } = await getPhotos(query, page);
        if (results.length === 0) {
          setIsActive(true)
          return
        }
        setImage(prevImages => [...prevImages, ...results])
        setVisible(page < Math.ceil(total / total_pages))
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
      {loding && <Loader />}
      {error && (<p>Hello- {error}</p>)}
      <SearchBar onSubmit={onHandleSumbit} />
      {image.lenght > 0 && <ImageGallery images={image} />}
      {!image.length && !isActive && (<p>ecd sdcs
      </p>)}
      {isActive && (
        <p>no image</p>
      )}
    </>
  )
}

export default App

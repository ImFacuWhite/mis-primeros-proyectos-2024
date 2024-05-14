import { useEffect } from "react"




function App() {

  useEffect (() => {
    fetch(url)
      .then(res => json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [])
  return (
    <>
      {
        loading ? <h1>Cargando...</h1> : (

          data.map(item => (
            t
          ))
        )
      }
    </>
  )
}

export default App

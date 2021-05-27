import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  // const [removeTour, setRemoveTour] = useState(false);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }



  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    }
    catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return <main><Loading /></main>
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button onClick={() => fetchTours()} className='btn'>Refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours deleteTour={deleteTour} tours={tours} />
    </main>
  );
}

export default App

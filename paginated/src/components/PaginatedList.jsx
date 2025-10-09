import  { useEffect, useState, useRef, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginatedList = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);


  const containerRef = useRef(null); 


  const fetchRecipes = async () => {
    setLoading(true);
    const limit = 5;
    const skip = page * limit;

    const res = await fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
    const data = await res.json();

    setRecipes(prev => [...prev, ...data.recipes]);
    setHasMore(data.recipes.length > 0);
    setLoading(false);
  };



  useEffect(() => {
    fetchRecipes();
  }, [page]);

const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    // scroll reaches near the bottom, trigger next load
    
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  }, [hasMore, loading]);


  return (
      <div className="container py-2">
      <h2 className="text-center mb-2" style={{color:'maroon'}}> Infinite Scrolling</h2>

        <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: '700px',
        overflowY: 'auto',
        border: '1px solid green',
        padding: '1rem',
        borderRadius: '4px',
      }}
    >
        {recipes.map(recipe => (
          <div key={recipe.id} className="card mb-3 shadow-sm" style={{backgroundColor:'lavenderblush'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="img-fluid "
                  style={{ height: '80%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                  <p className="card-text text-muted">
                    <strong>Prep Time: {recipe.prepTimeMinutes} mins</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-center my-3">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-2 text-muted">Loading recipes...</p>
          </div>
        )}

        {!hasMore && !loading && (
          <div className="text-center text-muted my-3">
            No more recipes. 🍴
          </div>
        )}
      </div>
    </div>
  );
}; 

export default PaginatedList
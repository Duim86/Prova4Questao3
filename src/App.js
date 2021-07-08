import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await api.get('posts');
    setPosts(res.data);
  }, []);

  return (
    <div className="App">
      {!posts ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <h5 className="card-header">Post {post.id}</h5>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

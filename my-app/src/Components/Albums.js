import React, { useState, useEffect } from "react";

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error....</div>;

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => {
        <div key={album.id}>
          <h3>{album.id}</h3>
          <p>{album.title}</p>
        </div>;
      })}
      ;
    </div>
  );
}

export default AlbumList;

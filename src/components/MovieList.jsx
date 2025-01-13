import React from 'react'
import '../App.css'

const MovieList = ({movieList}) => {

  return (
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        </thead>
        <tbody>
          {movieList.map((movie,index)=>{
              return<tr key={index}>
                <td>{movie.title}</td>
              <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
          })}
        </tbody>
      </table>

  )
}

export default MovieList

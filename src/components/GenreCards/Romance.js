import React, { Component } from "react"
import romance from "../../romance.json";

class RomanceCard extends Component {

    state = {
        romance
    }

render() {
    return (           
                <div className="genre">
                 <div className="leftBox">
                    <h1><em>Romance</em></h1>
                    {this.state.romance.map((movie) => {
                        return (
                        <div key={movie.id} className="imgDiv">
                        <a href={`https://www.imdb.com/title/${movie.movie_id}/?ref=fn_al_tt_1`}><img alt={movie.title} height="200px" width="255px" src={movie.poster} /></a>
                             <h6>{movie.title}</h6>
                             <p>Year of Release: {movie.year}</p>
                        </div>
                    )
                        })}
                    </div>
                </div>
    )
                    }
}

export default RomanceCard;
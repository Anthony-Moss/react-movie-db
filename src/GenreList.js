import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {
                props.genres.map((genre, i) => {
                    console.log(genre);
                    return (
                        <li key={i}>
                            <a
                                href='#'
                                onClick={() => {
                                    // When you need to pass something other
                                    // than the even, you need an anonymous function
                                    props.handleClick(genre);
                                }}
                                >{genre}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default GenreList;
import React from 'react';

const Card = ({ name, nickName, id }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='friend' src={`https://robohash.org/${nickName}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{nickName}</p>
            </div>
        </div>
    )
}

export default Card;
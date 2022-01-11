import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props =>
{
  if(props.monsters.length < 1)
  {
   return <h1>No Monster Found</h1>
  }
  else
  {
    return(
      <div className='card-list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>

    )

  }
 
}



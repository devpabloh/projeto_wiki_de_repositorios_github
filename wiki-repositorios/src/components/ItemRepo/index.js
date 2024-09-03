import React from 'react'
import { ItemContainer } from './styles';
import { useState } from 'react';

function ItemRepo() {

  const [repos, setRepos] = useState([])

  return (
    <ItemContainer>
      <h3>Pablo Henrique</h3>
      <p>Dio / Pablo</p>
      <a href="#verrepositorio">Ver repositório</a>
      <br />
      <a href="#remover" className='remover'>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;

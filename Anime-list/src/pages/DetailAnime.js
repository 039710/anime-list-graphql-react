import React from 'react'
import {useLocation} from 'react-router-dom'
function DetailAnime() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id);
  return (
    <div>DetailAnime</div>
  )
}

export default DetailAnime
import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

interface ILike {
  id: string;
}

type LikeCount = string | number | null;

const Like = ({ id }: ILike) => {
  const likeCountOld:LikeCount = localStorage.getItem(id);
  const likeCountNumber = Number(likeCountOld);
  const [likeCount, setLikeCount] = useState(isNaN(likeCountNumber) ? 0 : likeCountNumber);

  const onHandleClick = () => {
    /* @ts-ignore */
    setLikeCount((data) => parseInt(data) + 1);
  }

  useEffect(() => {
    /* @ts-ignore */
    localStorage.setItem(id, likeCount || 0);
  }, [likeCount, id]);

  const resetLikeCount = () => {
    setLikeCount(0);
  }

  return (
    <>
      <Tooltip title={'Hit Like!'}>
        <ThumbUpAltIcon 
          onClick={onHandleClick} 
          fontSize="large" 
          style={{ cursor: 'pointer', marginRight: '10px' }} 
          color="primary" 
        />
      </Tooltip>
      {likeCount}
      <Tooltip title={'Reset Likes!'}>
        <Button 
          variant="contained" 
          style={{ marginLeft: '15px'}} 
          startIcon={<DeleteOutlineIcon/>}
          onClick={resetLikeCount}>
          Reset
        </Button>
      </Tooltip>
    </>
  );
}

export default Like;

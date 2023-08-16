import React from 'react'
import {CommentCard} from './'
import {Box} from '@mui/material'

const VideoComment = ({comments}) => {
  return (
    <>
    {comments?.map((comment,idx)=>{
      return (
      <Box key={idx}>
        <CommentCard comment = {comment}/>
      </Box>
    )})}
    </>
  )
}

export default VideoComment
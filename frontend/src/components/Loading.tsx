import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: React.FC = () => {
  return (
    <CircularProgress data-testid="loading" />
  )
}

export default Loading;
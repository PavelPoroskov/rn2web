import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import useRepeatRequest from './useRepeatRequest';
import useAppIsActive from './useAppIsActive';

import QuotesTable from './QuotesTable';
import Loading from './Loading';

import config from './config';


const QuotesTableConnected = React.memo( () => {
  
  const appIsActive = useAppIsActive()
  const isFocused = useIsFocused();
  const [loading, data, error, info] = useRepeatRequest( appIsActive && isFocused, config.URL, 5000, config.transformResult )
  //console.log(`render QuotesTableConnected ${info.countRequest}`) 

  if (loading) {
    return <Loading/>
  }
  if ( !(data || error) ) {
    return null
  }
  return <QuotesTable arRows={data} error={error} info={info}/>
})

//before: first_render, second_render, render_after_request-success 
//use React.memo() to not render second_render

export default QuotesTableConnected

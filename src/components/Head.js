import React from 'react';
import Helmet from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <html lang="en"/>
      <title itemProp="name" lang="en">
        {metadata.title}
      </title>
    </Helmet>
  )
}

export default Head;
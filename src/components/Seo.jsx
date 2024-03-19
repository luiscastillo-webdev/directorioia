import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = ({titulo, descripcion, name, type}) => {
  return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{titulo}</title>
        <meta name='description' content={descripcion} />
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        { /* End Facebook tags */ }
        { /* Twitter tags */ }
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={titulo} />
        <meta name="twitter:description" content={descripcion} />
        { /* End Twitter tags */ }
    </Helmet>
  )
}

export default Seo
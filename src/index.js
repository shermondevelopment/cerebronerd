import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

/* routers */
import Routers from './router/router';


/* */
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <ColorModeScript />
    <Routers />
  </ChakraProvider>
);


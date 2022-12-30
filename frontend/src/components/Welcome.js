import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple image gallery application. Retrieves photos using
      Unsplash API. To start entery any search term in the input field.
    </p>
    <p>
      <Button bsStyle="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
    <CircularProgressWithLabel value={100} />
  </Jumbotron>
);

export default Welcome;

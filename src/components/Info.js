import React, { Fragment } from 'react';
import { NumberOfSelectedArticlesContainer, WeightContainer } from '.';

const Info = ({ articles }) => (
  <Fragment>
    <NumberOfSelectedArticlesContainer />
    <WeightContainer />
  </Fragment>
);

export default Info;

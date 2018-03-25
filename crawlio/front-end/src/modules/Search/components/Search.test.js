/**
 * @jest-environment node
 */

/* eslint-disable no-console */

import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

test('Todo component renders the text of the todo', () => {
  const wrapper = shallow(<Search
    navigateTo={() => {}}
    newSearchTerm={() => {}}
    searchTerm="cafetera"
  />);
  console.log(wrapper);
});

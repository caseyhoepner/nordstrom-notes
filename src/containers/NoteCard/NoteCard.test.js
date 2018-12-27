import React from 'react';
import { shallow } from 'enzyme';
import NoteCard from '../NoteCard';

describe ('NoteCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteCard />)
  })

  describe('NoteCard Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
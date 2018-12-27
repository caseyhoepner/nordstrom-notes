import React from 'react';
import { shallow } from 'enzyme';
import NoteList from '../NoteList';

describe ('NoteList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteList />)
  })

  describe('NoteList Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
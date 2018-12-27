import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from '../NoteForm';

describe ('NoteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteForm />)
  })

  describe('NoteForm Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
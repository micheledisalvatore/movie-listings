/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { GenresSelection, mapStateToProps } from './GenresSelection';

describe('Given a GenresSelection component', () => {
  let component;
  let wrapper;
  const setFilterGenresActionMock = jest.fn();
  const requiredProps = {
    classes: {},
    genres: [],
    filters: [],
    setFilterGenresAction: setFilterGenresActionMock,
  };

  describe('when it is rendered', () => {
    beforeEach(() => {
      component = <GenresSelection {...requiredProps} />;
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the placeholder', () => {
      expect(wrapper.find(MenuItem).at(0).find('em')).toHaveText('All');
    });

    it('should NOT render other options', () => {
      expect(wrapper.find(MenuItem)).toHaveLength(1);
    })

    describe('and a list of genres is passed', () => {
      beforeEach(() => {
        wrapper.setProps({
          genres: [{
            id: 0,
            name: 'foo',
          },{
            id: 1,
            name: 'bar',
          }]
        });
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should render the passed options', () => {
        expect(wrapper.find(MenuItem)).toHaveLength(3);
      });

      it('should render the second option with the passed id', () => {
        expect(wrapper.find(MenuItem).at(2)).toHaveProp('value', 1);
      });

      describe('and the user selects the first option', () => {
        beforeEach(() => {
          wrapper.find(Select).simulate('change', { target: { value: [0] }});
        });

        it('should call setFilterGenresAction with the selected options', () => {
          expect(setFilterGenresActionMock).toHaveBeenCalledWith([0]);
        });

        describe('and the list of filters is updated', () => {
          beforeEach(() => {
            wrapper.setProps({
              filters: [0],
            });
          });

          it('should render the Select component with the passed filters', () => {
            expect(wrapper.find(Select)).toHaveProp('value', [0]);
          });
        })
      })
    })
  });
});

describe('Given a mapStateToProps function', () => {
  describe('when it is called', () => {
    it('should return an object with the passed values', () => {
      expect(mapStateToProps({
        genres: {
          list: {
            1: {
              id: 1,
              name: 'foo',
            },
            3: {
              id: 3,
              name: 'bar',
            },
          },
          filters: ['foo'],
        },
      })).toEqual({
        genres: [{
            id: 3,
            name: 'bar',
          }, {
            id: 1,
            name: 'foo',
          }
        ],
        filters: ['foo'],
      });
    });
  });
});

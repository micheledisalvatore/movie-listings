/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

import { MovieCard, mapStateToProps } from './MovieCard';

describe('Given a MovieCard component', () => {
  let component;
  let wrapper;
  const requiredProps = {
    classes: {},
    image: 'fooImageUrl',
    title: 'fooTitle',
  };

  describe('when it is rendered', () => {
    beforeEach(() => {
      component = <MovieCard {...requiredProps} />;
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the passed image', () => {
      expect(wrapper.find(CardMedia)).toHaveProp('image', 'https://image.tmdb.org/t/p/w500/fooImageUrl');
    });

    it('should render the image with the title as placeholder', () => {
      expect(wrapper.find(CardMedia)).toHaveProp('title', 'fooTitle');
    });

    it('should NOT render the genre chips', () => {
      expect(wrapper.find(Chip)).not.toExist();
    });

    describe('and the list of genres is populated', () => {
      beforeEach(() => {
        wrapper.setProps({
          genres: {
            0: { name: 'foo' },
            1: { name: 'bar' },
          },
        });
      });

      it('should NOT render the genre chips', () => {
        expect(wrapper.find(Chip)).not.toExist();
      });

      describe('and the list of genreIds is populated', () => {
        beforeEach(() => {
          wrapper.setProps({
            genreIds: [0],
          });
        });

        it('should render one genre chip', () => {
          expect(wrapper.find(Chip)).toHaveLength(1);
        });

        it('should render the chip with the right name', () => {
          expect(wrapper.find(Chip)).toHaveProp('label', 'foo');
        });
      });
    });
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
        },
      })).toEqual({
        genres: {
          1: {
            id: 1,
            name: 'foo',
          },
          3: {
            id: 3,
            name: 'bar',
          },
        },
      });
    });
  });
});

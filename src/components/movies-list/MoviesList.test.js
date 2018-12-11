/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Grid from '@material-ui/core/Grid';

import MovieCard from '../movie-card';
import { MoviesList, mapStateToProps } from './MoviesList';

describe('Given a MoviesList component', () => {
  let component;
  let wrapper;
  const getMoviesActionMock = jest.fn();
  const requiredProps = {
    classes: {},
    getMoviesAction: getMoviesActionMock,
  };

  describe('when it is rendered', () => {
    beforeEach(() => {
      component = <MoviesList {...requiredProps} />;
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should NOT render any MovieCard', () => {
      expect(wrapper.find(MovieCard)).toHaveLength(0);
    });

    it('should call the getMoviesAction', () => {
      expect(getMoviesActionMock).toHaveBeenCalledWith();
    })

    describe('and the list of movies is populated', () => {
      beforeEach(() => {
        wrapper.setProps({
          movies: [{
            id: 0,
            genre_ids: [1,2,3],
            poster_path: 'fooUrl',
            title: 'fooTitle',
          }]
        })
      });

      it('should render one MovieCard item', () => {
        expect(wrapper.find(MovieCard)).toHaveLength(1);
      });

      it('should render a MovieCard with the given title', () => {
        expect(wrapper.find(MovieCard)).toHaveProp('title', 'fooTitle');
      });

      it('should render a MovieCard with the given genreIds', () => {
        expect(wrapper.find(MovieCard)).toHaveProp('genreIds', [1,2,3]);
      });

      it('should render a MovieCard with the given image', () => {
        expect(wrapper.find(MovieCard)).toHaveProp('image', 'fooUrl');
      });
    })
  });
});

describe('Given a mapStateToProps function', () => {
  describe('when it is called with an empty filterGenres', () => {
    it('should return a sorted object with all the passed movies', () => {
      expect(mapStateToProps({
        movies: {
          list: {
            0: {
              vote_average: 1,
              genre_ids: [0,1],
              popularity: 3,
            },
            1: {
              vote_average: 1,
              genre_ids: [1,3],
              popularity: 5,
            },
          },
          filterRating: 0,
        },
        genres: {
          filters: [],
        },
      })).toEqual({
        movies: [
          {
            vote_average: 1,
            genre_ids: [1,3],
            popularity: 5,
          },{
            vote_average: 1,
            genre_ids: [0,1],
            popularity: 3,
          }
        ],
      });
    });

    it('should return an object with all the passed movies', () => {
      expect(mapStateToProps({
        movies: {
          list: {
            0: {
              vote_average: 1,
              genre_ids: [0,1],
              popularity: 5,
            },
          },
          filterRating: 0,
        },
        genres: {
          filters: [],
        },
      })).toEqual({
        movies: [
          {
            vote_average: 1,
            genre_ids: [0,1],
            popularity: 5,
          }
        ],
      });
    });
  });

  describe('when it is called with a filled filterGenres', () => {
    it('should return a filtered object with no matching movies', () => {
      expect(mapStateToProps({
        movies: {
          list: {
            0: {
              vote_average: 1,
              genre_ids: [0,1],
              popularity: 3,
            },
            1: {
              vote_average: 1,
              genre_ids: [1,3],
              popularity: 5,
            },
            3: {
              vote_average: 3,
              genre_ids: [0,3],
              popularity: 6,
            },
          },
          filterRating: 0,
        },
        genres: {
          filters: [3, 2],
        },
      })).toEqual({
        movies: [],
      });
    });

    it('should return a filtered object with 1 matching movie', () => {
      expect(mapStateToProps({
        movies: {
          list: {
            0: {
              vote_average: 1,
              genre_ids: [0,1],
              popularity: 3,
            },
            1: {
              vote_average: 1,
              genre_ids: [1,3],
              popularity: 5,
            },
            3: {
              vote_average: 3,
              genre_ids: [0,3],
              popularity: 6,
            },
          },
          filterRating: 0,
        },
        genres: {
          filters: [3, 1],
        },
      })).toEqual({
        movies: [{
          vote_average: 1,
          genre_ids: [1,3],
          popularity: 5,
        }],
      });
    });

    it('should return a filtered object with no matching movies when rating is not satisfied', () => {
      expect(mapStateToProps({
        movies: {
          list: {
            0: {
              vote_average: 1,
              genre_ids: [0,1],
              popularity: 3,
            },
            1: {
              vote_average: 1,
              genre_ids: [1,3],
              popularity: 5,
            },
            3: {
              vote_average: 3,
              genre_ids: [0,3],
              popularity: 6,
            },
          },
          filterRating: 3,
        },
        genres: {
          filters: [3, 1],
        },
      })).toEqual({
        movies: [],
      });
    });
  });
});

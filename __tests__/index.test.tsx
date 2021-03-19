/* eslint-disable no-magic-numbers */
import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {render} from '@testing-library/react';
import useTableIcons from '../src';

const properties = [
  'Add',
  'Check',
  'Clear',
  'Delete',
  'DetailPanel',
  'Edit',
  'Export',
  'Filter',
  'FirstPage',
  'LastPage',
  'NextPage',
  'PreviousPage',
  'ResetSearch',
  'Search',
  'SortArrow',
  'ThirdStateCheck',
  'ViewColumn',
];

describe('useTableIcons', () => {
  properties.forEach(property => {
    it(`should return icon: ${property}`, () => {
      const {result} = renderHook(() => useTableIcons());
      const value    = result.current;

      expect(value).toHaveProperty(property);
      expect(value[property]).not.toBeUndefined();

      const Icon                         = value[property];
      const {asFragment, getAllByTestId} = render(<Icon data-testid="test-icon"/>);

      expect(getAllByTestId('test-icon')).toHaveLength(1);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

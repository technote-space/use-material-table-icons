/* eslint-disable no-magic-numbers */
import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {render} from '@testing-library/react';
import useTableIcons from '../src';

describe('useTableIcons', () => {
  it('should return icons', () => {
    const {result} = renderHook(() => useTableIcons());
    const value    = result.current;

    expect(value).toHaveProperty('Add');
    expect(value).toHaveProperty('Check');
    expect(value).toHaveProperty('Clear');
    expect(value).toHaveProperty('Delete');
    expect(value).toHaveProperty('DetailPanel');
    expect(value).toHaveProperty('Edit');
    expect(value).toHaveProperty('Export');
    expect(value).toHaveProperty('Filter');
    expect(value).toHaveProperty('FirstPage');
    expect(value).toHaveProperty('LastPage');
    expect(value).toHaveProperty('NextPage');
    expect(value).toHaveProperty('PreviousPage');
    expect(value).toHaveProperty('ResetSearch');
    expect(value).toHaveProperty('Search');
    expect(value).toHaveProperty('SortArrow');
    expect(value).toHaveProperty('ThirdStateCheck');
    expect(value).toHaveProperty('ViewColumn');

    expect(value.Add).not.toBeUndefined();
    expect(value.Check).not.toBeUndefined();
    expect(value.Clear).not.toBeUndefined();
    expect(value.Delete).not.toBeUndefined();
    expect(value.DetailPanel).not.toBeUndefined();
    expect(value.Edit).not.toBeUndefined();
    expect(value.Export).not.toBeUndefined();
    expect(value.Filter).not.toBeUndefined();
    expect(value.FirstPage).not.toBeUndefined();
    expect(value.LastPage).not.toBeUndefined();
    expect(value.NextPage).not.toBeUndefined();
    expect(value.PreviousPage).not.toBeUndefined();
    expect(value.ResetSearch).not.toBeUndefined();
    expect(value.Search).not.toBeUndefined();
    expect(value.SortArrow).not.toBeUndefined();
    expect(value.ThirdStateCheck).not.toBeUndefined();
    expect(value.ViewColumn).not.toBeUndefined();
  });

  it('should match snapshot', () => {
    const {result} = renderHook(() => useTableIcons());
    const value    = result.current;

    const {asFragment, getAllByTestId} = render(<>
      {value.Add && <value.Add data-testid="test-icon"/>}
      {value.Check && <value.Check data-testid="test-icon"/>}
      {value.Clear && <value.Clear data-testid="test-icon"/>}
      {value.Delete && <value.Delete data-testid="test-icon"/>}
      {value.DetailPanel && <value.DetailPanel data-testid="test-icon"/>}
      {value.Edit && <value.Edit data-testid="test-icon"/>}
      {value.Export && <value.Export data-testid="test-icon"/>}
      {value.Filter && <value.Filter data-testid="test-icon"/>}
      {value.FirstPage && <value.FirstPage data-testid="test-icon"/>}
      {value.LastPage && <value.LastPage data-testid="test-icon"/>}
      {value.NextPage && <value.NextPage data-testid="test-icon"/>}
      {value.PreviousPage && <value.PreviousPage data-testid="test-icon"/>}
      {value.ResetSearch && <value.ResetSearch data-testid="test-icon"/>}
      {value.Search && <value.Search data-testid="test-icon"/>}
      {value.SortArrow && <value.SortArrow data-testid="test-icon"/>}
      {value.ThirdStateCheck && <value.ThirdStateCheck data-testid="test-icon"/>}
      {value.ViewColumn && <value.ViewColumn data-testid="test-icon"/>}
    </>);

    expect(getAllByTestId('test-icon')).toHaveLength(17);
    expect(asFragment()).toMatchSnapshot();
  });
});

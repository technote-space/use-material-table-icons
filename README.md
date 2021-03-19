# Use Material Table Icons

[![npm version](https://badge.fury.io/js/%40technote-space%2Fuse-material-table-icons.svg)](https://badge.fury.io/js/%40technote-space%2Fuse-material-table-icons)
[![CI Status](https://github.com/technote-space/use-material-table-icons/workflows/CI/badge.svg)](https://github.com/technote-space/use-material-table-icons/actions)
[![codecov](https://codecov.io/gh/technote-space/use-material-table-icons/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/use-material-table-icons)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/use-material-table-icons/badge)](https://www.codefactor.io/repository/github/technote-space/use-material-table-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/use-material-table-icons/blob/master/LICENSE)

React hook to get icons for material table.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Usage](#usage)
  - [Install](#install)
  - [Use](#use)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Install

`yarn add @technote-space/use-material-table-icons`

or

`npm i @technote-space/use-material-table-icons`

### Use

e.g.

```tsx
import type {FC} from 'react';
import {memo} from 'react';
import MaterialTable from '@technote-space/material-table';
import useLocalStorage from '@technote-space/use-material-table-icons';

const TestTable: FC = memo(() => {
  const tableIcons = useTableIcons();

  // ...

  return <MaterialTable
    icons={tableIcons}
    // title={title}
    // columns={columns}
    // data={fetchData}
    // ...
  />
});
```

## Author

[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)

import React from 'react';

import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';

import AlbumList from './containers/AlbumListView';

function App() {
  return (
    <div className="App">
        <CustomLayout>
            <AlbumList />
        </CustomLayout>
    </div>
  );
}

export default App;

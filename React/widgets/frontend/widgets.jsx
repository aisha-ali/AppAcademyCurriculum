import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const names = [
  'Aisha',
  'Ali'
];

const panes = [
  { title: 'one', content: 'First pane' },
  { title: 'two', content: 'Second pane' },
  { title: 'three', content: 'Third pane' }
];

function Root() {
  return (
    <div>
      <Clock />
      <div className='interactive'>
        <Tabs panes={panes} />
      </div>
    </div>
  );
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

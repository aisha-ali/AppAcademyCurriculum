import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './autocomplete';
import Weather from './weather';
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
      <Weather />
      <div className='interactive'>
        <Tabs panes={panes} />
        <AutoComplete names={names} />
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});

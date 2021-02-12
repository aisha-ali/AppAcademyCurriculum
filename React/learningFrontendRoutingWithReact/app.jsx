import React from 'react';

class Example extends React.Component {


<NavLink to={`users/${user.id}`}
  activeClassName="active">{user.name}</NavLink> 


<a href="#/users/123" class="active">Michael</a>

<a href="#/users/123">Michael</a>


<NavLink to={`users/${user.id}`}
  activeStyle={{ fontWeight: 'bold' }}>{user.name}</NavLink> 

<a href="#/users/123" style="font-weight:bold;"
  class="active">Michael</a> 

<a href="#/users/123">Michael</a>

<Switch>
  <Route path="some/url" component={SomeComponent} />

  <Route path="some/other/url" component={OtherComponent} />

  <Route component={DefaultComponent} />

</Switch>


// very basic example
<Route
  exact
  path="/"
  render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
/>

}




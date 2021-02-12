// Which comp renders when a user navigates to /profile?
<HashRouter>
  <div>
    <Route path="/" component={App} />
    <Route path="/profile" component={Profile} />
    <Route path="/album" component={Album} />
  </div>
</HashRouter>
// Profile AND App


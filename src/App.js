import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import CourseItemDetails from './components/CourseItemDetails'
import CourseList from './components/CourseList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={CourseList} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

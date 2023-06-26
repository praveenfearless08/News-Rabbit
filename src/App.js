import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News   from './Components/News'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


<components></components>

export class App extends Component {
  pageSize = 15;
   apiKey =  '3de8af2ff1e84c2e9493c03ac784e173'
  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
       <BrowserRouter>
      

        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey}  key="general" pageSize = {this.pageSize} country = "in" category = "general"/>}></Route>
        <Route exact path="/business" element = {<News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize = {this.pageSize} country = "in" category = "business"/>}></Route>
        <Route exact path="/entertaiment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey}  key="entertainment" pageSize = {this.pageSize} country = "in" category = "entertainment"/>}></Route>
        <Route exact path="/general" element={ <News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize = {this.pageSize} country = "in" category = "general"/>}></Route>
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" pageSize = {this.pageSize} country = "in" category = "health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" pageSize = {this.pageSize} country = "in" category = "science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize = {this.pageSize} country = "in" category = "sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize = {this.pageSize} country = "in" category = "technology"/>}></Route>
        </Routes>
      
        </BrowserRouter>

      </div>
    )
  }
}

export default App

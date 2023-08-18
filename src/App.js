import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {content: true, leftNavBar: true, rightNavBar: true}

  onToggleShowContent = () => {
    this.setState(preVal => ({content: !preVal.content}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(preVal => ({leftNavBar: !preVal.leftNavBar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(preVal => ({rightNavBar: !preVal.rightNavBar}))
  }

  render() {
    const {content, leftNavBar, rightNavBar} = this.state
    console.log(content)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent: content,
          showLeftNavbar: leftNavBar,
          showRightNavbar: rightNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="bg-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App

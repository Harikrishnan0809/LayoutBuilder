// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-container">
              <h1 className="side-heading">Left Navbar Menu</h1>
              <ul className="ul-item-container">
                <li className="left-nav-item">Item 1</li>
                <li className="left-nav-item">Item 2</li>
                <li className="left-nav-item">Item 3</li>
                <li className="left-nav-item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="side-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-nav-container">
              <h1 className="side-heading">Right Navbar</h1>
              <ul className="ul-ad-box-container">
                <li className="ad-box">
                  <p className="content-para">AD 1</p>
                </li>
                <li className="ad-box">
                  <p className="content-para">AD 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  console.log('controller')

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
          showContent,
          showLeftNavbar,
          showRightNavbar,
        } = value
        const onChangeContent = () => {
          onToggleShowContent()
        }

        const onChangeLeftNav = () => {
          onToggleShowLeftNavbar()
        }

        const onChangeRightNav = () => {
          onToggleShowRightNavbar()
        }

        return (
          <div className="controller-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="check-box-container">
              <input
                checked={showContent}
                onChange={onChangeContent}
                type="checkbox"
                className="checkbox"
                id="content"
              />
              <label htmlFor="content" className="label-name">
                Content
              </label>
            </div>

            <div className="check-box-container">
              <input
                checked={showLeftNavbar}
                onChange={onChangeLeftNav}
                type="checkbox"
                className="checkbox"
                id="left-bar"
              />
              <label htmlFor="left-bar" className="label-name">
                Left Navbar
              </label>
            </div>

            <div className="check-box-container">
              <input
                checked={showRightNavbar}
                onChange={onChangeRightNav}
                type="checkbox"
                className="checkbox"
                id="right-bar"
              />
              <label htmlFor="right-bar" className="label-name">
                Right Navbar
              </label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController

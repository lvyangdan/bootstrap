import React from 'react'
import store from '../../../redux/store'
import { connect } from 'react-redux'

class AlertBox extends React.Component {

  componentDidMount = () => {
    var fixed = document.getElementById('fixed');
    fixed.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
    fixed.addEventListener('wheel', (e) => {
      e.preventDefault()
    });
  }

  render() {
    return(
      <div id="fixed" ref={value => { this.alertDiv = value }}
        className={this.props.showAlert ? "alert-box show": "alert-box"}>
        <div className="alert-box-card">
          { this.props.alertMessage }
          <div
            onClick={() => {
              store.dispatch({ type: 'HIDE_ALERT'})
            }}
            className="alert-actions">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAlert: state.alertbox.showAlert,
  alertMessage: state.alertbox.alertMessage
})

export default connect(mapStateToProps)(AlertBox)
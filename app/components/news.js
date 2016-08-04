import React from 'react'

export default React.createClass({
  render() {
    const { userName, repoName } = this.props.params

    return (
      <div>
        <h2>News</h2>
      </div>
    )
  }
})

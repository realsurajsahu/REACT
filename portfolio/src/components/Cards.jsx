import React from 'react'

function Cards(props) {
  return (
    <>
        <div className="job-card">
          <div className="card-top">
            <div className="company-info">
              <img src={props.logo} alt="Amazon" />
              <div>
                <h4>{props.company}</h4>
                <p>{props.post}</p>
              </div>
            </div>
            <button className="save-btn">Save</button>
          </div>

          <div className="tags">
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </div>

          <div className="card-bottom">
            <div>
              <h3>{props.pay}</h3>
              <small>{props.location}</small>
            </div>
            <button className="apply-btn">Apply now</button>
          </div>
        </div>
    </>
  )
}

export default Cards

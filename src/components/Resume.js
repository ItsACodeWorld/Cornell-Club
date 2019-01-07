import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">
            {/* <div className="three columns header-col">
               <h1><span>Mission (ED)</span></h1>
            </div> */}
            
            {/* 移除main-col 右侧padding 10% */}
            {/* <div className="ninesix columns main-col"> */}
            <div className="twelve columns">
              { 
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div key={item.MonthOfPassing} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>{item.UniversityName}</span></h1>
                          {/* <p className="info" style={{fontSize:20}}> */}
                          <br></br>
                          <p className="info">
                            {item.specialization}
                            {/* <span>&bull;</span> 
                            <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em> */}
                          </p>
                          {/* <p>
                            下面一行，你可以写一点什么
                          {item.Achievements}
                          </p> */}
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
{/* 
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Join(Wo)</span></h1>
            </div>
            <div className="twelve columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div key={item.CompanyName} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>
                  )
                })
              }
            </div> 
         </div> */}

         {/* <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
               </p>
   				<div className="bars">
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li key={item.skillname}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
   					</ul>
   				</div>
   			</div>
         </div> */}
      </section>
    );
  }
}
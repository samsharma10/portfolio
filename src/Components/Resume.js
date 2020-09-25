import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact, faNode,  faCss3,  faHtml5,  faJs, faWordpress, faDrupal} from "@fortawesome/free-brands-svg-icons";
import { Icon, InlineIcon } from '@iconify/react';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import herokuIcon from '@iconify/icons-logos/heroku';
import firebaseIcon from '@iconify/icons-logos/firebase';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

    <div className="row skill">
      <h1>{skillmessage}
            </h1>
      <div className="tech">
          <div className="tools">
            <h2>U.I.</h2>
            <div className="tools-icon">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>
          <div className="web-technologies">
            <h2>P.W.A</h2>
            <div className="web-icons">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <FontAwesomeIcon icon={faWordpress} />
              <Icon icon={mongodbIcon} color="green" />
              <Icon icon={herokuIcon} />
              <Icon icon={firebaseIcon} />
              </div>
          </div>
    </div>
      </div>
   </section>
    );
  }
}

export default Resume;

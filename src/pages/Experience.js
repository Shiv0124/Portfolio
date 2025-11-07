import { 
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>R R Vidyalaya, Jalgaon</h3>
          <p>High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2020-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Adv. S. A. Baheti College, Jalgaon</h3>
          <p>Junior College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2022 - 2026"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>SVKM's NMIMS, Mukesh Patel Technology Park, Shirpur</h3>
          <p>B.Tech in Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="May 2025 - July 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>C-TRON SYSTEM AND SOFTWARE Pvt. Ltd</h3>
          <p>Technical Support Executive Intern — resolved web app issues and improved reliability by 15%</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;

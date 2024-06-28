import Link from 'next/link';
import ProgressBar from 'react-bootstrap/ProgressBar';
import assign from '../../assets/images/assign.jpg';
import assignProfile from '../../assets/images/assign_profile.jpg';
import leaverating from '../../assets/images/icons/leave_rating.svg';
import Image from 'next/image';
import { Assignment } from '@/types/AssignmentTypes';

interface AssignmentCardProps {
  beginners: {
    assignments: Assignment[];
  };
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ beginners }) => {
  const now = 60;
  console.log(beginners);

  return (
    <div className="row">
      {beginners?.assignments?.map((assignment) => (
        <div key={assignment.id} className="col-xl-3 col-lg-4 col-md-6">
          <div className="assignments_items">
            <div className="assign_product">
              <Image
                src={assign}
                alt="product"
                className="img-fluid"
              />
            </div>
            <div className="assign_content">
              <Link href="">
                {assignment.group.join(', ')}
              </Link>
              <div className="assign_profile">
                <div className="assign_img">
                  <Image src={assignProfile} alt="icons" />
                </div>
                <div className="assign_title">{assignment.instructors.join(', ')}</div>
              </div>
              <div className="progress_assign">
                <ProgressBar now={now} label={`${now}%`} />
                <div className="process_com">
                  <div className="procees_percentage">{assignment.rating_count}% Complete</div>
                  <div className="leave_rating">
                    <div className="leave_rating_img">
                      <Image src={leaverating} alt="icons" />
                    </div>
                    Leave a rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;

import ProfileImage from '../components/userImage'
import User from '../components/tweetUser'
import Timestamp from '../components/tweetTimeStamp';
import Message from '../components/tweetMessage';
import Actions from '../components/tweetActions';

function Tweet(props) {

  return (
    <div className="tweet">

    <ProfileImage image = {props.tweet.user.image}/>

      <div className="body">

        <div className="top">
          <User user={props.tweet.user}/>
          <Timestamp timestamp ={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message}/>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions/>
        </div>

      </div>

    </div>
  );
}

export default Tweet;
import {Profile} from 'components/Profile/Profile'
import {Statistics} from '../Statistics/Statistics'
import {FriendList} from '../FriendList/FriendList'

// import {Container} from 'components/App/App.styled'
// import upcomingEvents from 'components/user.json'
import user from 'components/Profile/user';
import data from '../Statistics/data.json'
import friends from '../FriendList/friends.json'

export const App = () => {
  return (<div><Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics
         title="Upload stats" stats={data}
        
      />
      <FriendList friends={friends} />
      </div>)
};
   


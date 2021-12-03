import avatar from '../images/image-jeremy.png';

export const Profile = ({ changeTab, tab }) => {
  return (
    <div className='Profile'>
      <div className='MainProfile'>
        <div className='AvatarWrapper'><img className='Avatar' src={avatar} alt="Jeremy" /></div>
        <div className='ProfileText'>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul className='TabNav'>
        <li><button className={tab === 'daily' ? 'active' : 'base'}
                    id='daily'
                    onClick={changeTab}>Daily</button></li>
        <li><button className={tab === 'weekly' ? 'active' : 'base'}
                    id='weekly'
                    onClick={changeTab}>Weekly</button></li>
        <li><button className={tab === 'monthly' ? 'active' : 'base'}
                    id='monthly'
                    onClick={changeTab}>Monthly</button></li>
      </ul>
    </div>
  )
}
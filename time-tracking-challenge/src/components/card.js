import ellipsis from 'icon-ellipsis.svg';

export const Card = ({ title, timeframes, tab }) => {

    return (
      <div className='Card' id={title.replace(/ /g, '')}>
        <div className='imgWrapper'></div>
        <div className='ContentWrapper'>
          <div className='CardHeader'>
            <h2>{title}</h2>
            <img className='ellipsis' src={ellipsis} alt='See more'/>
          </div>
          <div className='timeframe'>
            <div className='mainTime'>{timeframes[tab].current}hrs</div>
            <div className='previousTime'>{'Last Week - ' + timeframes[tab].previous}hrs</div>
          </div>
        </div>
      </div>
    )
  }
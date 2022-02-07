import moment from "moment";
import './OpenPost.scss';

function OpenPost({ route }) {
  return (<>
        <div 
          className='post-container' 
          key={route.id}
        >
          <h2>{route.title}</h2>
          <p>{route.news}</p>
          <div><a href='elem.link'>{route.link}</a></div>
          <div className='container-tags'>{route.tags.map(elem=>{return <span>{route},</span>})}</div>
          <div>{moment(route.date).format('LTS')}</div>
        </div>
      </>)
}

export default OpenPost;
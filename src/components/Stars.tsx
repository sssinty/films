import Star from './Star';

interface Props {
  count: number
}
function  Stars (props : Props){
  if(props.count < 1 || props.count > 5) {
    return
  } 
  return <ul className="card-body-stars u-clearfix">
    {[...Array(props.count)].map((item, i) => {return <Star key={i}/>})}
  </ul>

}

Stars.defaultProps = {
  count : 0
}

export default Stars;
import Star from './Star';

interface Props {
  count: number
}
function  Stars ({count = 0} : Props) {
  if(count < 1 || count > 5) {
    return
  } 
  return <ul className="card-body-stars u-clearfix">
    {[...Array(count)].map((item, i) => (<Star key={i}/>))}
  </ul>

}
export default Stars;
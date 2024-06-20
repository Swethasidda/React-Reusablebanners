// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannercardDetails} = props
  const {headerText, description, className} = bannercardDetails
  return (
    <li className={className}>
      <div className="text-card">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCard

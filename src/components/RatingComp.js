import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import classes from './RatingComp.module.css'

const RatingComp = (props) => {

    return (
        <div className={props.selected ? classes.selected : ''}>
            {
                [...Array(5)].map((item, i) => {
                    return (
                        i < props.rate ? <AiFillStar color='#FFC300'/> : <AiOutlineStar color='#FFC300'/>
                    )
                })
            }
            <span>& up</span>
        </div>
    )
}

export default RatingComp

import { useState } from 'react'
import RatingComp from './RatingComp'

const Ratings = () => {
    const [filteredRating, setFilteredRating] = useState()
    const styleArr = []
    const selectRatingHandler = (i) => {
        setFilteredRating(i)
    }

    return (
        <div>
            <RatingComp rate={4} />
            <RatingComp rate={3} selected/>
            <RatingComp rate={2} />
            <RatingComp rate={1} />

            {/* {
                [...Array(4)].map((_, i) => {
                    return (<div className={styleArr.join(' ')} onClick={() => { selectRatingHandler(i + 1) }} key={i}>
                        {
                            [...Array(5)].map((_, j) => {
                                return (i + j < 4 ? <AiFillStar color='#FFC300' /> : <AiOutlineStar color='#FFC300' />)
                            })
                        }
                        <span>& up</span>
                    </div>)
                })

            } */}



            
        </div>
    )
}

export default Ratings
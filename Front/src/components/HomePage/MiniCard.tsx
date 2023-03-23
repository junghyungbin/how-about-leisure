import styled from "styled-components";


const MiniCard = () => {
  const thisRating = 3.75
  const percentRating = thisRating * 20
  const name = '스파크노래타운'
  const distance = '513'

  return (
    <CardBox>
      <img src="src\components\HomePage\card.PNG"/>
      <div>
        <Top>
          <Name>
            {name}
          </Name>
          <Distance>
            {distance}m
          </Distance>
        </Top>
        <Bottom>
          <Small>
            {thisRating}
          </Small>
          <StarRating>
            <StarRatingFill style={{ width: percentRating + '%' }}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </StarRatingFill>
            <StarRatingBase>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </StarRatingBase>
          </StarRating>
        </Bottom>
      </div>
    </CardBox>
  )
};

export default MiniCard

const CardBox = styled.div`
  width: 200px;
  margin-inline: 16px;
  > img {
    width: 170px;
    height: 140px;
    border-radius: 20px;
    margin: 10px auto;
  }
  > div {
    margin-bottom: 16px;
  }
`

const StarRating = styled.div`
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #2b2a29;
`

const StarRatingFill = styled.div`
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: var(--primary-color);
  > span {
    font-size: var(--title-2);
  }
`

const StarRatingBase = styled.div`
  z-index: 0;
  padding: 0;
  > span {
    font-size: var(--title-2);
  }
`

const Name = styled.div`
  width: auto;
  font-size: var(--title-2);
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Distance = styled.div`
  font-size: var(--caption);
  margin-inline: 5px;
  color: var(--primary-color);
`

const Small = styled.div`
  font-size: var(--body-text);
  margin-inline: 5px;
  width: 35px;
`

const Top = styled.div`
  height: 30px;
  justify-content: space-between;
  display: flex;
  margin-inline: 10px;
  align-items: baseline;
`

const Bottom = styled.div`
  justify-content: start;
  display: flex;
  margin-inline: 10px;
  align-items: baseline;
`
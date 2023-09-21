import styled from "styled-components"
import { ImageContainer } from "./ImageContainer"



const Cont = styled.div`
width:80%;
margin: auto;
`
const H1 = styled.h1`
font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin:0;
    margin-bottom:16px;
    color:lightblue;
    margin-top:20px;
    text-decoration:underline;

`
const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
`

export const NextTrip = () => {


    return (
        <Cont>
            <H1>Get Inspiration For Your Next Trip</H1>

            <FlexDiv>
                <ImageContainer wide="320px" img="https://prod-media-eng.dhakatribune.com/uploads/2016/03/paris-u.jpg">
                    <h1>Ahsan Manzil</h1>
                    <p>Known as the Pink Palace, Ahsan Manzil is situated in the midst of old town, just beside the bank of Buriganga River.</p>
                </ImageContainer>

                <ImageContainer wide="320px" img="https://www.musafir.com.bd/images/places/Jaflong.jpg">
                    <h1>Jaflong</h1>
                    <p>Jaflong is a tourist spot in Sylhet division. It is about 60 km from Sylhet town and takes two hours drive to reach there. </p>
                </ImageContainer>


                <ImageContainer wide="320px" img="https://content.r9cdn.net/rimg/dimg/c9/06/8d4fe0d8-city-28030-164fcc85915.jpg?crop=true&width=1020&height=498">
                    <h1>Lalbag Fort</h1>
                    <p>
                    Lalbagh Fort (Bengali: লালবাগ কেল্লা) is a fort in the old city of Dhaka, Bangladesh. Its name is derived from its neighborhood Lalbagh, which means Red Garden. 
                    </p>
                </ImageContainer>
            </FlexDiv>

            <FlexDiv>
                <ImageContainer wide="490px" img="https://sacredsites.com/images/asia/bangladesh/Dhakeshwari-Dhaka-Shiva-temples-H-1200.jpg">
                    <h1>Dhakeshwari Temple</h1>
                    <p>
                    Dhakeshwari National Temple is a Hindu temple in Dhaka, Bangladesh. It is state-owned, giving it the distinction of being Bangladesh's 'National Temple'.
                    </p>
                </ImageContainer>

                <ImageContainer wide="490px" img="https://i.ytimg.com/vi/uFg_iKts1UM/maxresdefault.jpg">
                    <h1>
                        Cox's Bazar Sea Beach
                    </h1>
                    <p>
                    Cox's Bazar Sea Beach also known as the longest natural sandy sea beach in the world, Cox's Bazar District,
                    </p>
                </ImageContainer>
            </FlexDiv>
        </Cont>
    )

}
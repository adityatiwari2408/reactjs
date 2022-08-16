import React from 'react'
import "./Banner.css"
import { SliderData } from './SliderData'
import SimpleImageSlider from 'react-simple-image-slider'





function Banner() {
    return (
        <div className='Banner'>
            <div className='banner'>
                <SimpleImageSlider
                    width={"100%"}
                    height={504}
                    images={SliderData}
                    showNavs={true}
                    showBullets={true}
                    autoPlay={true}
                    autoPlayDelay={0.5}
                    style={{
                        marginLeft: 10,
                        marginTop: 5,
                        //zIndex: -1,
                        //marginBottom: -50,
                    }}
                />
            </div>
        </div>
    )
}


export default Banner
import React from 'react'
import HomeBanner from './HomeBanner'
import Countup from './Countup'
import OurServices from './OurServices'
import OurClinets from './OurClinets'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Countup />
            <OurServices />
            <OurClinets />
            <Testimonials />
        </div>
    )
}

export default Home

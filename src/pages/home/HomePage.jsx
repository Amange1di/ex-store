
import Hero from '../../components/hero/Hero'
import Flash from '../../components/flash/Flash'

import CategoriesSection from '../CategoriesSection/CategoriesSection'

import Experience from '../../components/Experience/Experience'
import Best from '../../components/Best/Best'
import BestTwo from '../../components/Best/BestTwo'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Flash/>
      <CategoriesSection/>
     <Best/>
      <Experience/>
      <BestTwo/>
    </div>
  )
}

export default HomePage

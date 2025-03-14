import React from 'react'
import { stats } from '../constants';
import styles from '../style';
const Stats = () => (
  <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row  m-3`}>
        <h2 className='font-poppins font-semibold 
        xs:text-[40px] text-30px xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h2>
        <p className='font-poppins font-normal
        xs:text-[20px] text-15px xs:leading-[28px] leading-[21px] text-gradient uppercase ml-3 overflow-hidden'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats
import React from 'react'
// style
import styles from "../style";

// constants
import { stats } from '../constants'



const Stats = () =>  (
    <div className='flex flex-col'>
      <section className={`${styles.flexCenter} justify-between flex-wrap sm:mb-20 mb-6`}>
        {stats.map(item=>{
          return(
            <div key={item.id} className={`flex flex-1 m-3 justify-start items-center font-poppins`}>
              <h2 className='font-semibold text-white	xs:text-[48px] text-[30px] xs:leading-[53.16px] leading-[43.16px]'>{item.value}</h2>
               <span className='text-gradient text-xl	 xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] ml-3'>{item.title.toLocaleUpperCase()}</span>
            </div>
          )
        })}
      </section>
    </div>
  )


export default Stats
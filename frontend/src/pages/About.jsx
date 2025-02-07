import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ONBOARDING'} text2={'SECTION'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[550px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>This E-commerce platform built with React JS, Vite, MongoDB and Node JS</p>
          <p>The websites has functionalities such as allowing users to add and remove products from cart, create an account, login to an existing account and also use the forgot password feature.</p>
          <b className='text-gray-800'>Group Members Information</b>
          <p>1. Ojo Moses Adegoke - LCU/UG/22/23627 - Computer Science</p>
          <p>2. Abdulwaheed Aishat Omolara - LCU/UG/22/22925 - Software Engineering</p>  
          <p>3. Orisaremi Asushei Emmanuel - LCU/UG/21/19796 - Computer Science</p>  
          <p>4. Toluwalase Ifeoluwa Mercy - LCU/UG/22/24602 - Computer Science</p>  
          <p>5. Asulewon Dennis Olowo - LCU/UG/22/21777 - Computer Science</p>  
          <p>6. Aliyu Aminat Titilope - LCU/UG/22/23740 - Software Engineering</p>  
          <p>7. Ibeh Chidubem Gilbert - LCU/UG/21/19933 - Computer Science</p>  
          <p>8. Ola-Daniel Daniel Oluwagbemiga - LCU/UG/22/24830 - Computer Science</p>
          <p>9. Adole Adah Ebenezer - LCU/UG/22/21299 - Software Engineering</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'PROJECT'} text2={'INFORMATION'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Project Title:</b>
          <p className='text-gray-600'>The title of the project is E-commerce store with user accounts.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Course Code: </b>
          <p className='text-gray-600'>GST 306. This is a course that helps to create and improve the digital skills of students</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Group ID:</b>
          <p className='text-gray-600'>Group D - The team of the this project are identified with the group identity D.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About

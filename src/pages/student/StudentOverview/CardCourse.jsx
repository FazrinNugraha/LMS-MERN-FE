import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CardCourse({imageUrl,id,title,category}) {
  return (
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src={imageUrl} className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to={`/student/detail-courses/${id}`} className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">{title}</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#6a6a6a] text-sm md:text-base">{category}</p>
                            </div>
                        </div>
                    </div>
  )
}

CardCourse.PropTypes={
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,

}

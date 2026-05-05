import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function EmptyState({ 
  title = "No Data Found", 
  description = "There's nothing here yet", 
  actionText,
  actionLink,
  icon = "note-favorite"
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 px-4">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F8FAFB] flex items-center justify-center mb-6">
        <img 
          src={`/assets/images/icons/${icon}-purple.svg`}
          className="w-10 h-10 md:w-12 md:h-12 opacity-50"
          alt="empty icon"
        />
      </div>
      
      <h3 className="font-bold text-lg md:text-xl text-[#060A23] mb-2 text-center">
        {title}
      </h3>
      
      <p className="text-[#838C9D] text-sm md:text-base text-center max-w-md mb-6">
        {description}
      </p>
      
      {actionText && actionLink && (
        <Link 
          to={actionLink}
          className="rounded-full px-6 py-3 font-semibold text-sm md:text-base text-white bg-[#662FFF] hover:bg-[#5528CC] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {actionText}
        </Link>
      )}
    </div>
  )
}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  actionText: PropTypes.string,
  actionLink: PropTypes.string,
  icon: PropTypes.string
}

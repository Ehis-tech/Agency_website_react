function Title({text1, text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3 max-w-full overflow-hidden'>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-brandPrimary'></p>
     <p className='text-neutralDGrey'>{text1} <span className='text-neutralDGrey font-medium'>{text2}</span></p>
     <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-brandPrimary'></p>
      
    </div>
  )
}

export default Title
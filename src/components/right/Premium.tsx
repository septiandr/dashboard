import king from '../../assets/king.png'

function Premium() {
  return (
    <div className='my-5 mx-3 border-2 rounded-xl p-4'>
        <h2 className="font-bold text-center">Go To Premium</h2>
        <img src={king}/>
        <h2 className='font-bold text-xl'>Need more features?</h2>
        <p className='text-[#d9dddf]'>
            Update your account to premium to get more features
        </p>
        <button className='w-full bg-[#545de6] text-white rounded-lg p-4 mt-3'>
            Get Now
        </button>
    </div>
  )
}

export default Premium
import React from 'react'
import '../assets/Component.css'
import StoriesSec from './StoriesSec'
function Homecenter() {
  return (
    <div className='homecenter'>
        <StoriesSec />
        <div className='home_feed'>
            <div className='feed_cards'>
                <div className='feed_profilename'>
                    <p>name</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
                <div className='feed_media'>

                </div>
                <div className='feed_description_content'>
                    <div className='feed_reaction'>
                        <div style={{display:'flex', gap:'10%'}}>
                        {/* heart */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {/* chat */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    {/* planes */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    </div>
                    <div className='feed_bookmark'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    </div>
                    </div>
                    <div className='feed_likeslist'>
                        <p>Liked by <b>kovuri_sreelekha and 48 others</b></p>
                    </div>
                    <div className='feed_caption'>
                    <p><b>profile_name</b> a lot caption needed</p>
                    </div>
                    <div className='feed_commentcount'>
                      <button>  <p>View all 3 comments</p> </button>
                    </div>
                    <div className='feed_commentlist'>
                    <p><b>profile_name</b> ❤️❤️</p>
                    <p><b>profile_name</b> ❤️</p>
                    </div>
                    <div className='feed_commentInput'>
                        <input type="text" placeholder='Add a comment'/>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homecenter
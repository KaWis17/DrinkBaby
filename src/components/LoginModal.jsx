import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react';

export function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return(
    <div className="fixed left-0 w-full h-full bg-black/75">
              <div 
              className="h-full w-full md:h-fit md:w-fit fixed inset-0 top-16 m-auto z-50"
              >
                  <div className="w-full h-full md:h-fit flex flex-col bg-white rounded-xl">
              
                      <div className='px-5 pt-6 md:pt-3 pb-3 flex flex-row justify-end md:justify-between border-b-4'>
                          <div className='hidden md:flex flex-row items-center'>
                              <p>
                                  <FontAwesomeIcon icon={faHouse} className='pr-2'/>  
                                  DrinkBaby
                              </p>
                              <FontAwesomeIcon icon={faChevronRight} fontSize={20} className='px-2'/>
                              <p>
                                  Login
                              </p>

                          </div>
                          <button 
                              onClick={() => {props.modalOpen(false); console.log("closing")}} 
                              className=""
                          >
                              <FontAwesomeIcon icon={faCircleXmark} fontSize='25' />
                          </button>
                      </div>

                      <div className='pt-10 flex flex-col gap-10 h-full w-full'>
                        
                        <h3 className='text-center text-3xl'>Login to your account!</h3>
                        
                        <input
                          type="text" 
                          placeholder="e-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="text-white mx-5 p-5 md:w-2/3 md:mx-auto bg-secondary-color placeholder-gray-300 outline-none rounded-xl"
                        />

                        <input
                          type="password" 
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="text-white mx-5 p-5 md:w-2/3 md:mx-auto bg-secondary-color placeholder-gray-300 outline-none rounded-xl"
                        />

                        <div className='flex flex-col gap-3'>
                          <div className='flex justify-center'>
                            <button 
                              className="text-white px-4 py-2 rounded-xl border-2 bg-secondary-color bg-accent-color"
                            >
                              Login
                            </button>
                          </div>

                          <h3 className='text-center text-lg'>or</h3>

                          <div className='flex justify-center'>
                            <button 
                              className="text-white px-4 py-2 rounded-xl border-2 border-accent-color bg-accent-color"
                            >
                              Login with Google
                            </button>
                          </div>
                        </div>

                        

                        <p className=' text-center text-lg self-end m-auto mb-10 mx-20'>
                          Don't have an account? <a className='text-secondary-color underline'>Register for free!</a>
                        </p>
                       


                      </div>
                      
                  </div>
              </div>
      </div>
  )
}
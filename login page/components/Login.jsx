import React from 'react'
import { EyeSlashIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
   <>

<div class="form w-[78%] md:w-[600px] mx-auto px-7 md:px-[100px] py-3 md:py-11 ">
      
     
      
      <div class="tab-content rounded-2xl">
        <div id="signup ">   
          <h1 className='md:text-[30px] text-[20px] text-center font-[700] mb-1 text-[#ffffff]'>Create account</h1>
          <p className='text-[10px] md:text-[15px] text-center mb-4 text-[#ffffffc9]'>Already have an account? <a href="">Login</a> </p>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
             
              <input className='input text-[10px] md:text-[17px]' type="text" placeholder='First Name' />
            </div>
        
            <div class="field-wrap">
              
              <input className='input text-[10px] md:text-[17px]' type="text" placeholder='Last Name'/>
            </div>
          </div>

          <div class="field-wrap">
           
            <input className='input text-[10px] md:text-[17px]' type="email" placeholder='Email'/>
          </div>
          
          <div class="field-wrap ">
          <label>
          <EyeSlashIcon className="eye md:h-6 md:w-6 h-3 w-3   text-gray-500" />
          </label>
        <input className='input text-[10px] md:text-[17px]' type="password" placeholder='Password'/>
          </div>

          <div className='flex gap-3 mb-3 '>
            <input className='checkbox mt-1 mb-2 md:mb-7' type="checkbox" />
            <p className='md:text-[15px] text-[9px] text-[#ffffffc9]'>I agree to Dezenix <a href=""> Terms of service</a> and <a href="">Privacy policy</a> </p>
            
          </div>

 
          <button className='h-8 md:h-10 button-block text-black bg-[#B6FF9C] rounded-md text-[12px] md:text-[15px]  font-[700] w-[100%]'>Create Account</button>
      
          
          </form>

          <h5 className='text-[11px]  flex flex-row md:my-3 my-1'>ㅤOrㅤ</h5>

          <button className='flex items-center md:text-[15px] text-[10px] justify-center border-2 border-[#ffffffb0] h-8 md:h-10 button-block text-white  rounded-md w-[100%]'>
          <svg className='md:h-4 md:w-4 h-3 w-3 font-[500]' xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
            Continue with Google</button>

        </div>
        
        <div>   
        </div>
        
      </div>
     
</div> 
   </>
  )
}

export default Login
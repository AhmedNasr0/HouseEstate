import {Fragment} from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header=()=>{
        return(
            <Fragment>
                <div className='flex items-center bg-slate-300 justify-between p-3  sm:px-[100px] h-[60px] shadow-lg'>
                    <Link to='/'>
                        <div id='Logo' className='flex text-xl font-semibold'>
                            <span className='text-gray-500'>House</span>
                            <span className=''>Estate</span>
                        </div>
                    </Link>
                    <div>
                        <form action="POST" className='flex ml-4  md:min-w-[300px] items-center w-[150px] p-2 bg-gray-200 rounded-xl'>
                            <input type='text' placeholder='Search...' className='w-[110px] md:min-w-[270px] bg-transparent focus:outline-none'></input>
                            <FaSearch className=''></FaSearch>
                        </form>
                    </div>
                    <div className="nav ">
                        <ul className='flex gap-4 font-semibold'>
                            <Link to='/'>
                                <li className='hidden sm:inline  hover:underline'>Home</li>
                             </Link>   
                            <Link to='/About'>
                                <li className='hidden sm:inline hover:underline'>About</li>
                            </Link>
                            <Link to='/SignIn'>
                                <li className='hover:underline'>SignIn</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
}

export default Header
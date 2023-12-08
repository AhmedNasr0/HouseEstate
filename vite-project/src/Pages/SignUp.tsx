import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Link,useNavigate } from "react-router-dom"

interface Iprops{

}
const SignOut=(props:Iprops)=>{
    const [formData,setFormDate]=useState({});
    const [loading,SetLoading]=useState(false)
    const navigate=useNavigate();
    const handleInputs=(e:ChangeEvent<HTMLInputElement>)=>{
        setFormDate({
            ...formData,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            await fetch('/api/auth/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body: JSON.stringify(formData)
            }).then(res=>res.json())
            .then( data=> toast.success(data))
            setTimeout(()=>navigate('/signin'),1000)
        }
        catch(error){
            console.log(error)
        }
        
    }
    return(
        <>
            <div className="flex flex-col  my-7  gap-4 items-center">
                <h1 className="font-semibold text-2xl ">Sign Up</h1>
                <form onSubmit={handleSubmit} action="" className="w-full gap-4 px-5 flex flex-col" method="post">
                    <input id="username" type="text" placeholder="username"  className="focus:outline-none focus:border-gray-400 border h-[50px] rounded-lg p-1  w-full" onChange={handleInputs}/>
                    <input id="email" type="text" placeholder="email"  className="focus:outline-none focus:border-gray-400 border h-[50px] rounded-lg p-1  w-full" onChange={handleInputs}/>
                    <input id="password" type="password" placeholder="password"  className="focus:outline-none focus:border-gray-400 border h-[50px] rounded-lg p-1  w-full" onChange={handleInputs}/>
                    <button className="bg-gray-700 h-[50px] rounded-xl text-white hover:bg-gray-400 disabled:opacity-75">SIGN UP</button>
                    {/* <button className="bg-red-700 h-[50px] rounded-xl text-white hover:bg-red-400 disabled:opacity-75">CONTINUE WITH GOOGLE</button> */}
                </form>
                <div>
                    <p className="text-lg">Have an account?
                    <Link to='/signin'><span className="font-semibold px-1 text-blue-600 hover:border-b-2 hover:border-blue-600">Sign in</span></Link>
                    </p>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </>
    )
}
export default SignOut
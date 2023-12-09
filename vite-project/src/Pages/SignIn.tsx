import { ChangeEvent, EventHandler, FormEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Link,useNavigate } from "react-router-dom"

interface Iprops{

}
const SignIn=(props:Iprops)=>{
    const [formdata,Setformdata]=useState({})
    const [error,Seterror]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const res=await fetch('/api/auth/signin',{
                method:"POST" ,
                headers:{"Content-Type":"Application/json"}
                ,body:JSON.stringify(formdata)
            })
            .then(res=>res.json())
            .then(data=>toast.success("Welcome Back : "+data.username))
            setTimeout(()=>navigate('/'),2000);
        }   
        catch(error){
            console.log(error)
        }
    }
    const handleInputs=(event:ChangeEvent<HTMLInputElement>)=>{
        Setformdata({
            ...formdata,
            [event.target.id]:event.target.value
        })
    }
    return(
        <>
        <div className="flex flex-col  my-7  gap-4 items-center">
            <h1 className="font-semibold text-2xl ">Sign Up</h1>
            <form onSubmit={handleSubmit} action="" className="w-full gap-4 px-5 flex flex-col" method="post">
                <input id="email" type="text" placeholder="email"  className="focus:outline-none focus:border-gray-400 border h-[50px] rounded-lg p-1  w-full" onChange={handleInputs}/>
                <input id="password" type="password" placeholder="password"  className="focus:outline-none focus:border-gray-400 border h-[50px] rounded-lg p-1  w-full" onChange={handleInputs}/>
                <button className="bg-gray-700 h-[50px] rounded-xl text-white hover:bg-gray-400 disabled:opacity-75">SIGN IN</button>
                {/* <button className="bg-red-700 h-[50px] rounded-xl text-white hover:bg-red-400 disabled:opacity-75">CONTINUE WITH GOOGLE</button> */}
            </form>
            <div>
                <p className="text-lg">Donot Have an account?
                <Link to='/signup'><span className="font-semibold px-1 text-blue-600 hover:border-b-2 hover:border-blue-600">Sign up</span></Link>
                </p>
            </div>
        </div>
        <Toaster position="bottom-center"/>
    </>
    )
}
export default SignIn
import { useState } from "react";

const Login = ({ texts, setIsModal }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="absolute w-full h-full z-10 bg-black opacity-90 animate-fadeInBackground"></div>
            <div id="exit" onClick={(e) => e.target.id === 'exit' && setIsModal(false)} className="absolute w-screen h-screen z-20 flex items-center justify-center">
                <div className="w-[750px] h-[600px] flex flex-col rounded-xl px-6 py-4 bg-zinc-900 text-zinc-500 animate-fadeInModal">
                    <div className="relative w-full inline-flex justify-center text-4xl font-semibold">
                        <h6 className="w-fit tracking-widest uppercase">{texts["login-title"]}</h6>
                        <span onClick={() => setIsModal(false)} className="absolute right-0 cursor-pointer transition duration-300 hover:text-zinc-700">X</span>
                    </div>
                    <form onClick={handleSubmit} className="mt-48 relative flex-grow w-full flex flex-col items-center space-y-6 text-xl
                        [&>input]:bg-zinc-800 [&>input]:text-zinc-400 [&>input]:h-[38px] [&>input]:w-full [&>input]:rounded-lg [&>input]:px-2">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} maxLength={20} placeholder={texts["login-username-placeholder"]} className="animate-fadeInInput placeholder:text-zinc-700" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={texts["login-password-placeholder"]} className="animate-fadeInInput placeholder:text-zinc-700" />
                        <button type="submit" className="absolute bottom-0 w-full h-[38px] rounded-lg bg-zinc-800 transition duration-300 
                        hover:bg-zinc-700 active:bg-zinc-600 active:text-zinc-900 animate-fadeInInput">Logar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
const Login = ({texts, setIsModal}) => {
    return (
        <>
            <div className="absolute w-full h-full z-10 bg-black opacity-90 animate-fadeInBackground"></div>
            <div className="absolute w-screen h-screen z-20 flex items-center justify-center">
                <div className="w-[750px] h-[600px] rounded-xl px-6 py-4 bg-zinc-900 text-zinc-500 animate-fadeInModal">
                    <div className="relative w-full inline-flex justify-center text-4xl font-semibold">
                        <h6 className="w-fit tracking-widest uppercase">{texts["login-title"]}</h6>
                        <span onClick={() => setIsModal(false)} className="absolute right-0 cursor-pointer transition duration-300 hover:text-zinc-700">X</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
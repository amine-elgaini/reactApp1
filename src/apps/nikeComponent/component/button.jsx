function Button({text='button', bgColor='blue-700', logo='./'}) {
    return (
    <button className={`text-white ${bgColor} focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center`}>
        <p>{text}</p> <img src={logo} className="w-5 h-5 ml-5"/>
    </button>
    )
}

export default Button
import React from 'react'
import codeshotLogo from '../assets/codeshot-logo.png'
import Typed from 'react-typed'
const Home = () => {
    return (
        <div className = "p-8 w-full h-full bg-corn-silk bg-opacity-50 flex flex-col" >
            <div className="">
                <img src={codeshotLogo} alt="Codeshot Logo" width="200"/>
            </div>

            <div className="flex flex-col md:flex-row w-full h-full items-center">
                <div className="flex-1 text-steel-teal text-5xl opacity-75 font-bold cursor-default">
                    take aesthetic screenshots of
                    <Typed
                    className="font-code block"
                    strings={['snippets', 'functions', 'code']}
                    typeSpeed={120}
                    backSpeed={30}
                    loop={true}
                />
                </div>
                <div className="flex-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus laudantium, nemo hic iste tempore iusto cupiditate similique doloremque voluptatibus ea exercitationem fuga, temporibus impedit libero. Nesciunt corrupti architecto ratione cumque?
                </div>
            </div>
        </div>
    )
}

export default Home

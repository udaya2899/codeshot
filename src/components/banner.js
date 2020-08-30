import React from 'react';
import Typed from 'react-typed'
import codeInspection from '../assets/code_inspection.png'

const Banner = () => {
    return (
        <div className="md:flex md:p-8 md:mt-4 w-full h-full md:items-center">
                <div className="flex flex-col md:flex-1 h-full text-steel-teal text-3xl opacity-75 font-bold cursor-default justify-center">
                    <div className="sm:flex sm:justify-center">
                        <img className="" width={400} src={codeInspection}  alt=""/>
                    </div>
                    <div className="sm:m-auto">
                    Take{" "} 
                    <span className="bg-underline">
                        aesthetic
                    </span>
                    {" "}screenshots of
                    <Typed
                    className="font-code font-regular text-burnt-sienna text-5xl block"
                    strings={['snippets.', 'functions.', 'code.']}
                    typeSpeed={120}
                    backSpeed={35}
                    smartBackspace={true}
                    />
                    </div>
                    
                    
                </div>
                <div className="md:flex md:flex-1 h-full mt-12 md:items-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus laudantium, nemo hic iste tempore iusto cupiditate similique doloremque voluptatibus ea exercitationem fuga, temporibus impedit libero. Nesciunt corrupti architecto ratione cumque?
                </div>
            </div>
        
    )
}

export default Banner
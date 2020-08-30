import React from 'react';
import Typed from 'react-typed'
import codeInspection from '../assets/code_inspection.png'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full items-center">
                <div className="flex flex-col md:flex-1 h-full text-steel-teal text-3xl opacity-75 font-bold cursor-default justify-center">
                    <div className="">
                        <img className="m-auto" src={codeInspection} width={200} alt=""/>
                    </div>
                    <div>
                    Take{" "} 
                    <span className="bg-underline">
                        aesthetic
                    </span>
                    {" "}screenshots of
                    <Typed
                    className="font-code font-regular text-burnt-sienna text-5xl block"
                    strings={['snippets', 'functions', 'code']}
                    typeSpeed={120}
                    backSpeed={35}
                    smartBackspace={true}
                    />
                    </div>
                    
                    
                </div>
                <div className="md:flex-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus laudantium, nemo hic iste tempore iusto cupiditate similique doloremque voluptatibus ea exercitationem fuga, temporibus impedit libero. Nesciunt corrupti architecto ratione cumque?
                </div>
            </div>
        
    )
}

export default Banner
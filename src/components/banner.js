import React from 'react';
import Typed from 'react-typed'
import codeInspection from '../assets/code_inspection.png'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-1 h-full text-steel-teal text-3xl opacity-75 font-bold cursor-default justify-center">
                    <div className="sm:flex sm:justify-center">
                        <img className="" width={400} src={codeInspection}  alt=""/>
                    </div>
                    <div className="sm:m-auto">
                        Take{" "} 
                            <span className="bg-underline">aesthetic</span>
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
               
        
    )
}

export default Banner
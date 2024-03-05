"use client";    
import {motion} from 'framer-motion';

const PortfolioPage = () => {


    return (
        <motion.div 
            className="h-full" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%" }} 
            transition={{ duration: 0.6 }}
        >
        <div className="">
            <div className="flex items-center justify-center text-4xl text-center">My Works</div>
        </div>
        </motion.div>
    );
}

export default PortfolioPage;
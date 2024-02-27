"use client";    
import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

const PortfolioPage = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return (
        <motion.div 
            className="h-full" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%" }} 
            transition={{ duration: 0.6 }}
        >
        <div className="h-[600vh]" ref={ref}>
            <div className="w-screen h-calc[(100vh-6rem)] flex items-center justify-center text-4xl text-center">My Works</div>
        </div>
        </motion.div>
    );
}

export default PortfolioPage;
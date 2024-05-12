import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HappyCustomer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/customer")
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
            })
    }, [])

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (idx) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * idx,
            },
        }),
    };

    return (
        <div className="mt-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-500">Our Happy Customer</h2>
                <p className="max-w-2xl mx-auto my-3 text-center text-gray-500">Discover what our satisfied customers have to say! Dive into our collection of testimonials and find out why our service leaves a lasting impression.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {
                    customers.map((customer, idx) => <motion.div
                        key={idx} 
                        variants={fadeInAnimationVariants} 
                        initial="initial" 
                        whileInView="animate" 
                        viewport={{
                            once: true,
                        }}
                        custom={idx} 
                        className="p-4 card bg-neutral text-neutral-content">
                        <div className=" items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={customer.image} />
                                </div>
                            </div>
                            <p className="my-2">{customer.satisfaction}</p>
                            <h2 className="text-xl font-black">{customer.name}</h2>
                            <p>{customer.job_title}</p>
                        </div>
                    </motion.div>)
                }
            </div>

        </div>
    );
};

export default HappyCustomer;
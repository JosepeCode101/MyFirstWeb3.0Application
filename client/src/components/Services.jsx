//    SERVICIOS

// Import de iconos
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

// cartas de servicio UN COMPONENTE REUTILIZABLE 
// Es un componente con un retorno instantaneo
const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-2 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex-col flex">
            <h3 className="mt-2 text-white text-lg" >{title}</h3>
            <p className="mt-2 text-white text-sm md:w-9/12" >{subtitle}</p>
        </div>
    </div>

)
// 2h 20' 30''
const Services = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center item-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that We
                        <br/>
                        continue to improve

                    </h1>
                </div>
            </div>
            {/* AQUÍ ALOJAREMOS LAS CARTAS DE SERVICIO */}
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color='bg-[#00A79D]'
                    title='Security Guaranteed'
                    icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and the quality of our products'
                />
                <ServiceCard
                    color='bg-[#4B41F2]'
                    title='Best exchange Rates'
                    icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and the quality of our products'
                />
                <ServiceCard
                    color='bg-[#DF2C20]'
                    title='Fastest transactions'
                    icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and the quality of our products'
                />
            </div>
        </div>

    );
}

export default Services;
// Con las siguientes dos lineas importaremos iconos react para
// utilizar en nuestra aplicación, de 'Heroicons' https://react-icons.github.io/react-icons/icons?name=hi  
// y 'Ant Design Icons' https://react-icons.github.io/react-icons/icons?name=ai
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

// import a la libreria de métodos de react
import { useState } from 'react';

// Con esta línea importaremos nuestra imagen corporativa
// como logo de nuestra app
import logo from '../../images/logo.png';

// Función con la que imprimiremos los items de la lista definidos en un 'ul'
// esta imprimirá los elementos mapeados y e imprimirá los titulos como items 
// de la lista declarada en el JSX 
const NavbarLista = ({ title, classProps }) => {
    return(
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    )
}


const Navbar = () => {
    // CONSTANTE DE ESTADO que nos retorna el estado de la lista para 
    // desplegarla o recogerla, utiliza el import del react  
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'> 
            <div className='md:flex-[0.5] flex-initial justify-center intems-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between intems-center flex-initial'>
                {[ "Market", "Exchanges", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarLista key={item + index} title={item} />
                ))}
                <li className='bg-[#48C9B0] py-2 px-7 mx-4 rounded-full cursor-ponter hover:bg-[#00A79D]'>
                    Login
                </li>
            </ul>
            <div className='flex relative'> 
    {/* con { abrimos bloque dinámico y en funcion del estado de "toggleMenu ejecutamos un icono un otro" 
    se definen tamaño  estilos TailwindCSS y seteamos el estado de toggleMenu en caso de click*/}
                   {!toggleMenu && (
                       <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}/>
                   )}
                   
                   {toggleMenu && (
                       <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/>
                   )}
    {/* Con la funcion de estado desplegada en afirmativo, se despliega una lista. Se definen estilos de contenedor(ul)
    y se abre una (li) linea para el icono de cerar la NAVBAR. Se llama a un bloque dinámico que mapea un array para 
    imprimr contenidos llamando a la funciín NavbarLista  */}
                    {toggleMenu && (
                        <ul
                            className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animated-slide-in'
                        >
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/></li>
                                {[ "Market", "Exchanges", "Tutorials", "Wallets"].map((item, index) => 
                                 <NavbarLista key={item + index} title={item} classProps='my-2 text-lg' />,
                                )}
                            <li className='bg-[#48C9B0] py-2 px-7 mx-4 rounded-full cursor-ponter hover:bg-[#00A79D]'>
                                Login
                            </li>
                        </ul>

                    )}
            </div>
        </nav>
    )
}

export default Navbar;

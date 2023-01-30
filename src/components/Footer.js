
export const Footer = () => {
    return (
        <>
       <footer className="w-full  p-3" style={{backgroundColor:"#1b043b" ,color:"white"}}>


            <div className="flex flex-row items-center mt-3 ">

                    <div > 
                    <i className="fa-brands fa-facebook"></i>
                    
                    
                    
                    </div>
                    <div className="mx-2">
                   
                       
                    <i className="fa-brands fa-instagram" ></i>
                    </div>
            </div>

            <div className="md:flex  md:flex-row md:justify-between text-xs">

                <div>
                    <p> Copyright © All rights reserved |Kits-Ecell ,Guntur</p>
                </div>

                <div >
                    <p >@Developed by ECell Gen-5 [2016-2020].</p>
                </div>
            </div>

       </footer>
        </>
    );
}
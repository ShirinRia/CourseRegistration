import { useState } from "react";
import Regcourse from "./Regcourse";

const Cart = ({regcourse,credit}) => {
    

    
    return (
        <div className="bg-white h-max  px-4 pb-6 rounded-lg">
            <div className="py-6 w-max border-b-2 text-lg font-bold text-[#2F80ED]">
                <h3>Credit Hour Remaining {20-credit} hr</h3>
            </div>

            <div className="py-4 border-b-2">
                <div className="w-max ">
                <h3 className="text-xl font-bold">
                     Course Name
                </h3>
                </div>
                
                <ol className="list-decimal ml-5 text-base font-normal">
                {
                    regcourse.map(rcourse=>
                        <Regcourse
                        key={rcourse.id}
                        showcourse={rcourse}
                        >

                        </Regcourse>
                        
                        )
                }
                 </ol>
            </div>

            <div className="py-4 border-b-2">
                <h3>
                    Total Credit Hour : {credit}
                </h3>
            </div>
            
        </div>
    );
};

export default Cart;
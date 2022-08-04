// import React from 'react';
// import lottie from 'lottie-web';
// import './Loader.css'

// const Loader = () => {

//     const Select = function (s) {
//         return document.querySelector(s);
//     },
//         animationWindow = Select("#animationWindow"),
//             anim = lottie.loadAnimation({
//             container: animationWindow,
//             renderer: "svg",
//             // loop: true,
//             autoplay: true,
//             path: "https://assets.codepen.io/35984/space+knot.json"
//         });


//     return (
//         <div className="loaddd">
//             <div id="animationWindow">

//             </div>
//         </div>
//     )
// }

// export default Loader


import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className="load">
            <div class="loader">
                <div class="big-circle">
                    <div class="small-circle">
                        <div class="small-circle1">
                            <div class="small-circle2">
                                <div class="small-circle3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
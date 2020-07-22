
// import React, { useState, useEffect } from "react";
// import "@public/styles/context-menu.css"




// const ContextMenu: React.FC = () => {

//     useEffect(() => {
//         document.getElementsByTagName("body")[0].addEventListener("onmouseup", (e) => {



//             if (e.which === 2) {
//                 setShowen(true);
//                 const newPosition = { x: e.x, y: e.y };
//                 setPosition(newPosition);
//             } else if (e.which === 0) {
//                 setShowen(false);
//             }

//             console.log(e);





//         });
//     }, [])

//     const [positon, setPosition] = useState({ x: 0, y: 0 });
//     const [showen, setShowen] = useState(false);

//     const style = { zIndex: showen ? 100 : -100, top: positon.y, left: positon.x }


//     return <div id="context-menu" style={style}>
//         <div className="context-menu-item">Copy </div>
//         <div className="context-menu-item">Paste</div>
//         <div className="context-menu-item">Cut</div>
//         <div className="context-menu-divider"></div>
//         <div className="context-menu-item">Copy </div>
//         <div className="context-menu-item">Paste</div>
//         <div className="context-menu-item">Cut</div>
//     </div>
// }

// export default ContextMenu;
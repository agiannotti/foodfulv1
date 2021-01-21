// import React, { Component } from 'react';
// import '../Main/Main.css';
// import './Resources.css';
// import Nav from '../Nav/Nav';
// import { Link } from 'react-router-dom';
// import { ResourceContext } from '../../Context/ResourcesContext';

// export default class Resources extends Component {
//   static contextType = ResourceContext;
//   render() {
//     const resource = this.context.resource;
//     console.log('resource', resource);

//     return (
//       <div>
//         <Nav />
//         <div className='Resource__main'>
//           <h2>Sort</h2>
//           <div>
//             <form className='Resource__radio'>
//               <label>Card Type</label>
//               <div>
//                 <input type='radio' name='shelter'></input>
//                 <label htmlFor='FoodBank'>Food Bank</label>
//               </div>
//               <div>
//                 <input type='radio' name='shelter'></input>
//                 <label htmlFor='DropPoint'>Food Drive</label>
//               </div>
//               <div>
//                 <input type='radio' name='shelter'></input>
//                 <label htmlFor='PublicParks'>PublicParks</label>
//               </div>
//               <div>
//                 <input type='radio' name='shelter'></input>
//                 <label htmlFor='dropPoint'>Custom</label>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

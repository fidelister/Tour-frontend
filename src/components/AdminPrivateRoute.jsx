// import React from 'react'
// import { useSelector } from 'react-redux'
// import RedirectToAdmin from './RedirectToAdmin'

// function AdminPrivateRoute({ children }) {
//     const { user } = useSelector((state) => state.auth)
//     console.log(user ? user.result.roles : "")
//     return user ? user.result.roles : "" === "user" ? children : <RedirectToAdmin />
// }

// module.exports = function override(webpackConfig) {
//     webpackConfig.module.rules.push({
//       test: /\.mjs$/,
//       include: /node_modules/,
//       type: "javascript/auto"
//     });
  
//     return webpackConfig;
//   }

// export default AdminPrivateRoute
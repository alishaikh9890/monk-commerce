import React,{ useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'

function App() {


//   const [loading, setLoading]  = React.useState(false)
//   const [error, setError] = React.useState(false)
//   const [data, setData] = React.useState([])
//   const [count, setCount]= React.useState(1)


//   useEffect(() => {   
//   fetchAndUpdateData()
      
// }, [count])



//   const fetchAndUpdateData = () => {
//     setLoading(true)
//     fetch(`https://stageapibc.monkcommerce.app/admin/shop/product?search=Hat&page=1`,{
//       method:'GET',
//       headers:{
//         "Content-Type":"application/json"
//       }
//     })
//     .then((res) => res.json())
//     .then((res) => setData(res))
//     .catch((err) => setError(true))
//     .finally(() => setLoading(false))
// }

  return (
   <div>
    <ProductList/>
   </div>
  )
}

export default App

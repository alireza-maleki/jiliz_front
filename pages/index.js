import React, { useState, useEffect, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import Header from '../components/header/Header';
import HomePage from '../components/home/HomePAge';
import Product from '../components/product1/Product1';
import Search from '../components/search/Search';
import TopScroll from '../components/topscroll/TopScroll';
import Footer from '../components/footer/Footer';

import { loadData, loadProducts } from '../components/getalldata/GetAllData';
import NavbarFixed from '../components/navbar fixed/NavbarFixed';

import { RegisterContextProvider } from '../components/contexts/RegisterContext';

const index = (props) => {

  return (
    <RegisterContextProvider>
      <Search />
      <TopScroll />
      <HomePage data={props.data} />
      <NavbarFixed />
    </RegisterContextProvider>
  )
}



export async function getStaticProps(context) {


  const data = await loadData();

  return {
    props: {

      data
    },
    revalidate: 60,
  }
}



// export async function getServerSideProps() {

//   let offset = 1;
//   const [pokemon, setPokemon] = useState([]);


//   const loadMorePokemon1 = () => {

//     axios.get(`http://192.168.0.206:1212/v1/scrol-data/${offset1}/7`).then(({ data }) => {

//       const newPokemon1 = [];
//       data.forEach((item) => newPokemon1.push(item));
//       setPokemon1(newPokemon1);

//     });

//     offset1 += 5;

//   };

//   // #####  
//   const handelScroll1 = (e) => {

//     if (
//       window.innerHeight + e.target.documentElement.scrollTop + 1 >=
//       e.target.documentElement.scrollHeight
//     ) {
//       loadMorePokemon1(window.innerHeight);
//     }

//     console.log()

//   }

//   useEffect(() => {

//     loadMorePokemon();

//     window.addEventListener('scroll', handelScroll);

//   }, [])

//   return {
//     props: {},
//   }
// }

export default index;
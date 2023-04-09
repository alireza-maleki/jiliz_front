import { Fragment, useState, useEffect } from "react";

import KharidKhadamat from "../../components/kharid-khadamat/KharidKhadamat";

import axios from "axios";

const Kharid = ({ newData }) => {

  // const [scrollData, setScrollData] = useState();

  // console.log(scrollData)


  // // ###
  // useEffect(() => {

  //   console.log("useEffect")
  //   loadMorePokemon();

  //   window.addEventListener('scroll', handelScroll)

  // }, []);


  // // ###
  // const handelScroll = (e) => {

  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     loadMorePokemon(window.innerHeight);
  //   }

  //   console.log()

  // }


  // let offset = 1;
  // // ###
  // const loadMorePokemon = () => {

  //   axios.get(`http://94.139.163.188:1313/search/v1/goods-search/${offset}/`).then(({ data }) => {

  //     let newData = [];
  //     data.forEach((item) => newData.push(item));
  //     setScrollData(newData);
  //   });

  //   offset += 1;

  // };

  return (
    <Fragment>

      <KharidKhadamat />


    </Fragment>
  )
}

export async function getServerSideProps(context) {

  // let offset = 1;
  // const [scrollData, setScrollData] = useState();

  // let newData = []


  // const loadMorePokemon = () => {

  //   axios.get(`http://192.168.0.112:1313/search/v1/goods-search/${offset}/`).then(({ data }) => {

  //     // let newData = [];
  //     data.forEach((item) => newData.push(item));
  //     // setScrollData(() => ([...scrollData], newData));
  //   });

  //   offset += 1;

  // };


  // ### Scroll Control
  // const handelScroll = (e) => {

  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     loadMorePokemon(window.innerHeight);
  //   }

  //   console.log()

  // }


  // ### Window Scroll ###
  // useEffect(() => {

  //   loadMorePokemon();

  //   window.addEventListener('scroll', handelScroll)

  // }, []);

  return {
    props: {

    }
  }

}

export default Kharid;





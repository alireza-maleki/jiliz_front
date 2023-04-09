
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import axios from 'axios';

import classes from "./AutomaticScrollButton.module.css";

import Gifts from '../gifts/Gifts';
import Tools from '../tools & hardware/Tools';
import Energy from '../energy/Energy';
import Accessory from '../accessory/Accessory';
import Cunsumer from '../cunsumer/Cunsumer';
import Category from "../category/Category";



export default function AutomaticScrollButton(props) {
  const [value, setValue] = React.useState(0);

  const [categorys, setCategorys] = useState();

  const [gifts, setGifts] = useState(false);
  const [tools, setTools] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [accessory, setAccessory] = useState(false);
  const [cunsumer, setCunsumer] = useState(false);
  const [category, setCategory] = useState(false);

  // ##### Sard Function
  let offset1 = 5;
  const [pokemon1, setPokemon1] = useState([]);


  const loadMorePokemon1 = () => {


    axios.get(`https://api.vipkitchen.ir/v1/scrol-data/${offset1}/7`).then(({ data }) => {
      
      const newPokemon1 = [];
      data.forEach((item) => newPokemon1.push(item));
      setPokemon1(newPokemon1);

    });

    offset1 += 5;

  };

  // #####  
  const handelScroll1 = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon1(window.innerHeight);
    }

    console.log()

  }


  // ##### Garm Function
  let offset2 = 5;
  const [pokemon2, setPokemon2] = useState([]);


  const loadMorePokemon2 = () => {


    axios.get(`https://api.vipkitchen.ir/v1/scrol-data/${offset2}/4`).then(({ data }) => {


      const newPokemon2 = [];
      data.forEach((item) => newPokemon2.push(item));
      setPokemon2(newPokemon2);

    });

    offset2 += 5;

  };

  // #####
  const handelScroll2 = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon2(window.innerHeight);
    }

    console.log()

  }


  // ##### Cafe Function
  let offset3 = 5;
  const [pokemon3, setPokemon3] = useState([]);


  const loadMorePokemon3 = () => {

    axios.get(`https://api.vipkitchen.ir/v1/scrol-data/${offset3}/5`).then(({ data }) => {


      const newPokemon3 = [];
      data.forEach((item) => newPokemon3.push(item));
      setPokemon3(newPokemon3);

    });

    offset3 += 5;

  };

  // #####
  const handelScroll3 = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon3(window.innerHeight);
    }

    console.log()

  }

  // ##### Khadamat Function
  let offset4 = 5;
  const [pokemon4, setPokemon4] = useState([]);


  const loadMorePokemon4 = () => {

    axios.get(`https://api.vipkitchen.ir/v1/scrol-data/${offset4}/4`).then(({ data }) => {


      const newPokemon4 = [];
      data.forEach((item) => newPokemon4.push(item));
      setPokemon4(newPokemon4);

    });

    offset4 += 5;

  };

  // #####
  const handelScroll4 = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon4(window.innerHeight);
    }

    console.log()

  }


  // ##### Adamde-Sazi Function
  let offset5 = 5;
  const [pokemon5, setPokemon5] = useState([]);


  const loadMorePokemon5 = () => {


    axios.get(`https://api.vipkitchen.ir/v1/scrol-data/${offset5}/5`).then(({ data }) => {


      const newPokemon5 = [];
      data.forEach((item) => newPokemon5.push(item));
      setPokemon5(newPokemon5);

    });

    offset4 += 5;

  };

  // #####
  const handelScroll5 = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon5(window.innerHeight);
    }

    console.log()

  }



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {

    setCategorys(props.products);
    setGifts((true));

    loadMorePokemon1();

    window.addEventListener('scroll', handelScroll1)
    window.addEventListener('scroll', handelScroll2)
    window.addEventListener('scroll', handelScroll3)
    window.addEventListener('scroll', handelScroll4)
    window.addEventListener('scroll', handelScroll5)


  }, [])



  const giftHandler = () => {
    // console.log(categorys)

    setEnergy(false);
    setAccessory(false);
    setTools(false);
    setCunsumer(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setGifts(true);
  }

  const toolsHandler = () => {
    // console.log(categorys)

    setGifts(false);
    setEnergy(false);
    setAccessory(false);
    setCunsumer(false);
    setCategory(false);

    loadMorePokemon2();

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setTools(true);
  }

  const energyHandler = () => {
    // console.log(category)

    setGifts(false);
    setTools(false);
    setAccessory(false);
    setCunsumer(false);
    setCategory(false);

    loadMorePokemon3();

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setEnergy(true);
  }

  const accessorysHandler = () => {
    // console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setCunsumer(false);
    setCategory(false);

    loadMorePokemon4();

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setAccessory(true);

  }

  const cunsumerHandler = () => {
    // console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setAccessory(false);
    setCategory(false);

    loadMorePokemon5();

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setCunsumer(true);
  }



  return (
    <>
      <div className={classes.tabs}>

        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab className={classes.tab} onClick={giftHandler} label="لاین گرم" />
            <Tab className={classes.tab} onClick={toolsHandler} label="لاین سرد" />
            <Tab className={classes.tab} onClick={energyHandler} label="کافی شاپ" />
            <Tab className={classes.tab} onClick={accessorysHandler} label="خدمات مرتبط" />
            <Tab className={classes.tab} onClick={cunsumerHandler} label="آماده سازی" />


          </Tabs>
        </Box>

      </div>

      {gifts ? <Gifts products={pokemon1} /> : ''}
      {tools ? <Tools products={pokemon2} /> : ''}
      {energy ? <Energy products={pokemon3} /> : ''}
      {accessory ? <Accessory products={pokemon4} /> : ''}
      {cunsumer ? <Cunsumer products={pokemon5} /> : ''}

    </>

  );
}





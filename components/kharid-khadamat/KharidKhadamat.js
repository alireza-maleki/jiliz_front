import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import classes from './KharidKhadamat.module.css';

import ListData from "../listdata/ListData";


const KharidKhadamat = () => {

    const [scrollData, setScrollData] = useState([]);
    const [updateData, setUpdateData] = useState([]);

    // ### Save Ostan Category
    const [getOstan, setGetOstan] = useState();

    // === Ostan ID ===
    const [ostanId, setOstanId] = useState();

    // ### Save Beand Category
    const [getBrand, setGetBrand] = useState();

    // === Brand ID ===
    const [brandId, setBrandId] = useState();

    // ### Save Made By Contry
    const [getMadeBy, setGetMadeBy] = useState();

    // === Made By ID ===
    const [madeById, setMadeById] = useState();

    // ### Save Category 
    const [getCategory, setGetCategory] = useState();

    // ### Save Category Items 
    const [categoryItems, setCategoryItems] = useState();

    // === Category ID ===
    const [categoryId, setCategoryId] = useState();

    // === Product ID ===   
    const [productId, setProductId] = useState();

    // ### Save Status Change 
    const [statusChange, setStatusChange] = useState();

    // ### Save Input Text
    const [inputText, setInputText] = useState();

    // ### Set Error For Search Filed ###
    const [error, setError] = useState(false);



    // ### Mount Component
    useEffect(() => {

        loadMorePokemon();

        window.addEventListener('scroll', handelScroll)

    }, []);


    let offset = 1;
    // ###
    const loadMorePokemon = useCallback(() => {

        let newData = [];
        axios.get(`https://api.vipkitchen.ir/search/v1/goods-search/${offset}/`).then(({ data }) => {

            // console.log(newData);

            // if (newData) {
            data.forEach((item) => newData.push(item));
            setScrollData(newData);
            // }
        });

        offset += 1;

    }, [scrollData]);


    console.log(scrollData);

    // ###
    const handelScroll = (e) => {

        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            loadMorePokemon(window.scrollY);
        }

        console.log()

    }



    // ### Ostan Select Handler ###
    const ostanHandler = async (e) => {

        if (!getOstan) {
            const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/citys/");
            setGetOstan(data);
            console.log(data)
        }

    }

    // === Ostan ID Handler ===
    const ostanChangeHandler = (e) => {
        setOstanId(e.target.value);
    }

    // ### Brand Select Handler ###
    const brandHandler = async () => {

        if (!getBrand) {
            const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/brands/");
            setGetBrand(data);
            console.log(data);
        }

    }

    // === Brand ID Handler ===
    const brnadChangeHandler = (e) => {
        setBrandId(e.target.value);
    }

    // ### Made By Select Handler ###
    const madeByHandler = async (e) => {

        if (!getMadeBy) {
            const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/countrys-made-by/");
            setGetMadeBy(data);
            console.log(data)
        }

    }

    // === Made By Id ===
    const madeByChangeHandler = (e) => {
        setMadeById(e.target.value)
    }

    // ### Category Select Handler ###
    const categoryHandler = async (e) => {

        if (!getCategory) {
            const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/get-good-categorys/");
            setGetCategory(data);
            console.log(data)
        }

    }

    // ### Category Change Handler 
    const categoryChangeHandler = async (e) => {

        setCategoryId(e.target.value);

        // if (!categoryItems) {

            try {
                const category = await axios.get(`https://api.vipkitchen.ir/advert/v1/category-childs/${e.target.value}/`)
                
                console.log(category.data.products);
                
                setCategoryItems(category.data.products);
                
            } catch (error) {
                
                // console.log(error.message)
                
            }
            
        // }

    }

    // === Product ID ===
    const productChangeHandler = (e) => {
        setProductId(e.target.value);
    }


    // ### Status Change Handler
    const statusChangeHandler = (e) => {
        console.log(e.target.value)
    }


    // Input Change Handler 
    const inputChangeHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    let detailForFilterData = {
        ostan: ostanId,
        brand: brandId,
        madeBy: madeById,
        category: categoryId,
        status: statusChange,
        categoryItems: productId,
        search: inputText
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        // setScrollData([]);

        if (
            !ostanId &&
            !brandId &&
            !madeById &&
            !categoryId &&
            !statusChange &&
            !productId &&
            !inputText
        ) {
            alert("لطفا تمام فیلد ها را پر کنید");
            setError(true);
        } else if (
            ostanId ||
            brandId ||
            madeById ||
            categoryId ||
            statusChange ||
            productId ||
            inputText
        ) {
            let newOffset = 4;

            axios.get(`https://api.vipkitchen.ir/search/v1/goods-search/${newOffset}/`, {

                params: {
                    detailForFilterData
                }
            })
                .then((response) => {
                    console.log(response);
                    if (response.data.length > 0) {
                        setScrollData(response.data)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            setGetOstan("");
            setGetBrand("");
            setGetMadeBy("");
            setGetCategory("");
            setStatusChange("")
            setCategoryItems("");
            setInputText("");
            setError(false);

        }

        console.log(error)

        console.log(ostanId)
        console.log(brandId)
        console.log(madeById)
        console.log(categoryId)
        console.log(statusChange)
        console.log(productId)


    }



    return (
        <div className={` ${classes.kharid} `}>

            <div className="container">

                <div className="row">

                    <div className="col-3 ">

                        <div className={`row my-5 rounded shadow ${classes['form-control']} `}>


                            <div className="p-4">

                                <div className="my-2">
                                    <lable>استان</lable>
                                    <div>
                                        <select required onChange={(e) => ostanChangeHandler(e)} onClick={(e) => ostanHandler(e)}>
                                            <option value="0">-----</option>

                                            {
                                                getOstan ? (
                                                    <>
                                                        {
                                                            getOstan.map((item) => (
                                                                <option key={item.id} value={item.id}>{item.name_city}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    ""
                                                )
                                            }

                                        </select>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <lable>برند</lable>
                                    <div>
                                        <select required onChange={(e) => brnadChangeHandler(e)} onClick={brandHandler}>
                                            <option value="0">-----</option>

                                            {
                                                getBrand ? (
                                                    <>
                                                        {getBrand.map((item) => (
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        ))}
                                                    </>
                                                ) : (
                                                    ""
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <lable>ساخت</lable>
                                    <div>
                                        <select required onChange={(e) => madeByChangeHandler(e)} onClick={madeByHandler}>
                                            <option value="0">-----</option>

                                            {
                                                getMadeBy ? (
                                                    <>
                                                        {
                                                            getMadeBy.map((item) => (
                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    ""
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <lable>گروه</lable>
                                    <div>
                                        <select required onClick={categoryHandler} onChange={categoryChangeHandler}>
                                            <option value="0">-----</option>

                                            {
                                                getCategory ? (
                                                    <>
                                                        {
                                                            getCategory.map((item) => (
                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    ""
                                                )
                                            }

                                        </select>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <lable>وضعیت</lable>
                                    <div>
                                        <select required onChange={(e) => statusChangeHandler(e)}>
                                            <option value="0">-----</option>
                                            <option value="نو">نو</option>
                                            <option value="کارکرده">کارکرده</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <lable>محصول</lable>
                                    <div>
                                        <select required onChange={(e) => productChangeHandler(e)}>
                                            <option value="0">-----</option>

                                            {
                                                categoryItems ? (
                                                    <>
                                                        {
                                                            categoryItems.map((item) => (
                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                            ))
                                                        }
                                                    </>
                                                ) : (
                                                    ""
                                                )
                                            }

                                        </select>
                                    </div>
                                </div>



                            </div>

                            <div className={` px-4 ${classes.filtered} `}>

                                <div>
                                    <label>جستجو</label>
                                    <input onChange={(e) => inputChangeHandler(e)} type="text" placeholder='' />
                                </div>

                                <div onClick={(e) => submitFormHandler(e)} className="mt-2 py-3">
                                    <button>فیلتر</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-9">

                        <ListData events={scrollData} />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default React.memo(KharidKhadamat);
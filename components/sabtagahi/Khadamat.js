import React, { useState } from 'react';
import Link from 'next/link';

import classes from "./Khadamat.module.css";


import axios from 'axios';



const Khadamat = () => {

    // ### Products Group UseState ###
    const [selectData, setSelectData] = useState([]);
    const [postId, setPostId] = useState();
    const [productId, setProductId] = useState();

    // ### Products UseState ###
    const [getCategory, setGetCategory] = useState();
    const [categoryId, setCategoryId] = useState();

    // ### Sakht UseState ###
    const [getSakht, setGetSakht] = useState([]);
    const [sakht, setSakht] = useState();

    // ### Ostan UseState ###
    const [getOstan, setGetOstan] = useState([]);
    const [ostan, setOstan] = useState();

    // ### Brand UseState ###
    const [getBrand, setGetBrand] = useState([]);
    const [brand, setBrand] = useState();

    // ### Moxo UseState ###
    const [mozo, setMozo] = useState();

    // ### Status Products ###
    const [statusProduct, setStatusProduct] = useState();

    // ### TextArea ###
    const [textArea, setTextArea] = useState();

    // ### Input Disabled ###
    const [showInput, setShowInput] = useState(false);

    // ### Monay Status ###
    const [monayStatus, setMonayStatus] = useState();

    // ### Product Price ###
    const [productPrice, setProductPrice] = useState();

    // ### Get Prodeucts Group ###
    const getApiHandler = async (e) => {

        // console.log("ali");

        setProductId(e.target.value)

        if (selectData.length == 0) {

            try {

                const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/get-good-categorys/");
                setSelectData(data);

            } catch (error) {

                console.log(error.message)

            }
            console.log(selectData)

        }

    }

    // ### Get Products ###
    const OptionChangeHandler = async (e) => {

        setPostId(e.target.value);

        if (e.target.value == '0') {

            console.log("zero")

        } else {
            try {
                const category = await axios.get(`https://api.vipkitchen.ir/advert/v1/category-childs/${e.target.value}/`)

                console.log(category.data.products)

                setGetCategory(category.data.products)

            } catch (error) {

                // console.log(error.message)

            }

        }
        console.log(postId)

    }

    // ### Save Products Data ###
    const categoryOnclick = (e) => {
        setCategoryId(e.target.value)
    }

    // ### Get Contry ###
    const sakhtDataOnclick = async () => {

        const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/countrys-made-by/");
        setGetSakht(data);
        console.log(data);
    }

    // ### Save Sakht Data ###
    const sakhtDataOnchange = (e) => {
        setSakht(e.target.value);
    }


    // ### Get Ostan ###
    const ostanDataOnclick = async () => {
        const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/citys/");
        setGetOstan(data);
        console.log(data);
    }

    // ### Save Ostan Data ### 
    const ostanDataOnchange = (e) => {
        setOstan(e.target.value);
    }

    // ### Get Brand ###
    const brandOnclick = async () => {
        const { data } = await axios.get("https://api.vipkitchen.ir/advert/v1/brands/");
        setGetBrand(data);
        console.log(data);
    };

    // ### Save Brand Data ###
    const brandOnchange = (e) => {
        setBrand(e.target.value);
    };


    // ### Save Mozo Data ###
    const mozoOnchange = (e) => {
        setMozo(e.target.value)
    };

    // ### Save Product Status ###
    const statusHandler = (e) => {
        setStatusProduct(e.target.value)
    };

    // ### Save TextArea ###
    const textAreaHandler = (e) => {
        setTextArea(e.target.value)
    };

    // ### Save Monay Status ###
    const monayHandler = (e) => {
        setMonayStatus(e.target.value);

        if (e.target.value == "تومان") {
            setShowInput(true)
        } else {
            setShowInput(false)
        }

    };

    // ### Save Price ###
    const priceHandler = (e) => {
        setProductPrice(e.target.value);
    }


    (parseInt(productId));
    (parseInt(categoryId));

    let agahiDetail = {
        categorys: [productId, categoryId],
        title: mozo,
        description: textArea,
        agreement_price: showInput,
        city: ostan,
        status_type: statusProduct
    }

    const submitDataHandler = (e) => {

        e.preventDefault();

        axios.post("https://api.vipkitchen.ir/advert/v1/make-advert/", agahiDetail)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });


        setMozo("");
        setSelectData("");
        setGetCategory("");
        setGetSakht("");
        setGetBrand("");
        setGetOstan("");


    }

    return (

        <form onSubmit={submitDataHandler}>

            <div className={classes.khadamt}>

                {/* <div className={classes.rightcontrol}>
    
</div> */}

                <div className={classes.container}>

                    <div className={classes.mozo}>

                        <label>
                            موضوع
                            <span>*</span>
                        </label>

                        <input type='text' placeholder='موضوع آگهی را ثبت نمایید' value={mozo} onChange={mozoOnchange} required />
                    </div>

                    <div className={classes.rightcontrol}>

                        <div className={classes.text}>

                            <label>
                                گروه کالایی
                                <span>*</span>
                            </label>

                            <label>
                                محصول
                                <span>*</span>
                            </label>

                            <label>
                                ساخت
                                <span></span>
                            </label>

                            <label>
                                آدرس
                                <span></span>
                            </label>


                        </div>

                        <div className={classes.control}>
                            <div className={classes.select1}>

                                <select onClick={getApiHandler} value={selectData} onChange={(e) => OptionChangeHandler(e)} required>
                                    <option> ------ </option>

                                    {selectData ? (
                                        <>
                                            {selectData.map((item) => (
                                                <option value={item.id} key={item.id}> {item.name} </option>
                                            ))}
                                        </>
                                    ) : ""}


                                </select>

                                <select required value={getCategory} onChange={categoryOnclick}>
                                    <option value="0">-----</option>

                                    {getCategory ? (
                                        <>
                                            {getCategory.map((item) => (
                                                <option value={item.id} key={item.id}> {item.name} </option>
                                            ))}
                                        </>
                                    ) : ""}

                                </select>

                                <select onClick={sakhtDataOnclick} value={getSakht} onChange={(e) => sakhtDataOnchange(e)}>
                                    <option>-----</option>

                                    {getSakht ? (
                                        <>
                                            {getSakht.map((item) => (
                                                <option value={item.id} key={item.id}> {item.name} </option>
                                            ))}
                                        </>
                                    ) : ""}

                                </select>

                            </div>

                            <div className={classes.select24}>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className={classes.leftcontrol}>

                        <div className={classes.textleft} >


                            <label>
                                برند
                                <span></span>
                            </label>

                            <label>
                                قیمت
                                <span></span>
                            </label>

                            <label>
                                وضعیت
                                <span>*</span>
                            </label>

                            <label>
                                استان
                                <span></span>
                            </label>


                        </div>
                        <div className={classes.controlleft}>
                            <div className={classes.selectleft}>
                                <div>
                                    <select onClick={brandOnclick} value={getBrand} onChange={(e) => brandOnchange(e)}>
                                        <option>-----</option>

                                        {getBrand ? (
                                            <>
                                                {getBrand.map((item) => (
                                                    <option value={item.id} key={item.id}> {item.name} </option>
                                                ))}
                                            </>
                                        ) : ""}

                                    </select>
                                </div>


                                <div>
                                    <div className={classes.select30}>
                                        <input disabled={!showInput} value={productPrice} onChange={(e) => priceHandler(e)} type="text" placeholder="قیمت را ثبت نمایید" />
                                        <div className={classes.sel31}>
                                            <select onChange={(e) => monayHandler(e)}>
                                                <option>توافقی</option>
                                                <option>تومان</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <select required onChange={(e) => statusHandler(e)}>
                                        <option value="">-----</option>
                                        <option>نو</option>
                                        <option>کارکرده</option>
                                    </select>
                                </div>



                                <div>
                                    <select onClick={ostanDataOnclick} value={getOstan} onChange={(e) => ostanDataOnchange(e)}>
                                        <option>-----</option>

                                        {getOstan ? (
                                            <>
                                                {getOstan.map((item) => (
                                                    <option value={item.id} key={item.id}> {item.name_city} </option>
                                                ))}
                                            </>
                                        ) : ""}

                                    </select>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.textarea} >
                        <div>
                            <label>
                                توضیحات <span>*</span>
                            </label>
                        </div>
                        <div className={classes.textarea2}>
                            <textarea required value={textArea} onChange={(e) => textAreaHandler(e)} rows="12" cols="120" placeholder="توضیحات خود را ثبت نمایید"></textarea>
                        </div>
                    </div>

                    <div className='row col-12 align-items-center justify-content-center'>

                        <div className='col-lg-6 mt-5'>
                            <button className='btn btn-success text-white w-100 fw-bold' >ذخیره اطلاعات</button>
                        </div>

                    </div>


                </div>
            </div>

        </form>

    );
};


export default Khadamat;


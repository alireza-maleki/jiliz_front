import React from 'react';

import classes from "./Search.module.css";

const Search = () => {

    const ostanHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className={classes.search}>
            <div className={classes.items}>
                <div className={classes.item}>
                    <select onChange={ostanHandler}>
                        <option value="0">همه استان ها -----</option>
                        <option value="8">تهران</option>
                        <option value="4">اصفهان</option>
                        <option value="5">البرز</option>
                        <option value="11">خراسان رضوی</option>
                        <option value="25">گیلان</option>
                        <option value="13">خوزستان</option>
                        <option value="1">آذبایجان شرقی</option>
                        <option value="27">مازندران</option>
                        <option value="17">فارس</option>
                        <option value="2">آذربایجان غربی</option>
                        <option value="22">کرمانشاه</option>
                        <option value="31">یزد</option>
                        <option value="24">همدان</option>
                        <option value="29">هرمزکان</option>
                        <option value="21">کرمان</option>
                        <option value="3">اردبیل</option>
                        <option value="19">قم</option>
                        <option value="7">بوشهر</option>
                        <option value="26">لرستان</option>
                        <option value="28">مرکزی</option>
                        <option value="18">قزوین</option>
                        <option value="15">سمنان</option>
                        <option value="14">زنجان</option>
                        <option value="16">سیستان و بلوچستان</option>
                        <option value="12">خراسان شمالی</option>
                        <option value="6">ایلام</option>
                        <option value="20">کردستان</option>
                        <option value="23">کهگلویه و بویراحمد</option>
                        <option value="10">خراسان جنوبی</option>
                        <option value="9">چهار محال و بختیاری</option>
                    </select>
                    <select>
                        <option value="0">گروه کالایی -----</option>
                        <option value="1">کافی شاپ</option>
                        <option value="2">لاین گرم</option>
                        <option value="3">لاین سرد</option>
                        <option value="4">آماده سازی</option>
                        <option value="5">خدمات مرتبط</option>
                    </select>
                    <select>
                        <option value="0">همه موارد-----</option>
                        <option vlaue="64">آکبند</option>
                        <option vlaue="61">کارکرده</option>
                    </select>
                    <input type="text" placeholder='جستجوی کلمه کلیدی' />
                    <button>جستجو</button>
                </div>
            </div>
        </div>
    )
}

export default Search
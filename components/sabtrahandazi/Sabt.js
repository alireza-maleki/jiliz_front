import React from 'react';

import classes from "./Sabt.module.css";

import { FaUserAlt } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { GiRotaryPhone } from 'react-icons/gi';
import { BsPhoneVibrate } from 'react-icons/bs';
import { GrMap } from 'react-icons/gr';
import { BiMapPin } from 'react-icons/bi';
import { BiMap } from 'react-icons/bi';

const Sabt = () => {
    return (
        <div className={classes.sabt}>

            <div className={` d-flex align-items-center justify-content-center flex-column ${classes.contanier}`}>

                <div className={`row pt-4 col-lg-6 col-10 ${classes.heading} `}>
                    <h5 className={` text-center text-white p-2 rounded   ${classes.paragraph} `}>ثبت جزئیات آگهی راه اندازی و طراحی منو</h5>
                </div>

                <div className={`row col-lg-6 col-10 rounded h-50 p-3 p-lg-0 bg-white  ${classes.body}`}>

                    <div className='col-md-2 fs-1  d-flex align-items-center justify-content-center'>
                        <FaUserAlt />
                    </div>

                    <div className={` col-md-10 w-75 p-3 m-4 border border-dark rounded fs-6 d-flex flex-lg-row flex-column ${classes.card}`}>

                        <div className='col-md-4 col-sm-6 '>

                            <table className='w-100 pt-2'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <BiUser />
                                        </td>
                                        <td className='w-75'>
                                            آقای ...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className='w-100  p-2'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <GiRotaryPhone />
                                        </td>
                                        <td className='w-75'>
                                            77111101
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className='w-100'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <BsPhoneVibrate />
                                        </td>
                                        <td className='w-75'>
                                            09121234567
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className='col-md-4 col-sm-6 g-5'>

                            <table className='w-100'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <GrMap />
                                        </td>
                                        <td className='w-75'>
                                            09121234567
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className='w-100'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <BiMapPin />
                                        </td>
                                        <td className='w-75'>
                                            09121234567
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className='w-100'>
                                <tbody>
                                    <tr>
                                        <td className='w-25'>
                                            <BiMap />
                                        </td>
                                        <td className='w-75'>
                                            09121234567
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>


                </div>

            </div>


            <div className={` contanier my-3 d-flex align-items-center justify-content-center ${classes.form}`}>

                <div className='row p-3 col-lg-6 col-10 bg-white rounded'>

                    <form>

                        <div className={` row col-lg-12 text-end text-lg-center ${classes.s}`}>
                            <div className={`form-group d-flex flex-column flex-lg-row  ${classes.head}`}>

                                {/* <div className='d-flex align-items-center col-lg-2 col-12'>
                                </div> */}

                                <div className='col-lg-12 col-12'>
                                    <label className='fw-bold' for="موضوع"> موضوع آگهی</label>
                                    <span className='text-danger fw-bold fs-3 px-2'>*</span>
                                    <input type="text" className={classes.input} />
                                </div>

                            </div>
                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>گروه خدماتی</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>نوع فعالیت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>سابقه فعالیت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>فعالیت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>حوزه تخصصی</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>تخصص</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>گارانتی/ضمانت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label} >تحصیلات</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>استان محل فعالیت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>شهر محل فعالیت</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='form-group col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>نوع قرارداد</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className='form-group gy-3 gy-lg-0 col-lg-6 d-flex flex-column flex-lg-row align-items-center justify-content-center'>

                                <div className='d-flex align-items-center col-lg-3 col-12'>
                                    <label for="موضوع" className={classes.label}>انتخاب نوع آگهی</label>
                                    <span className='text-danger fs-3 fw-bold'>*</span>
                                </div>

                                <div className='col-lg-9 col-12'>
                                    <select className={classes.select}>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='col-lg-1 '>
                                <label for="توضیحات" className='fw-bold' >توضیحات</label>
                            </div>
                            <div className=' col-lg-11'>
                                <textarea className={` form-control  ${classes.area}`}></textarea>
                            </div>

                        </div>

                        <div className='row my-3'>

                            <div className='col-lg-3 col-6'>
                                <input className="form-control" type="file" id="formFile" title='انتخاب' />
                            </div>

                            <div className='col-lg-3 col-6'>
                                <input className="form-control" type="file" id="formFile" />
                            </div>

                            <div className='col-lg-3 col-6'>
                                <input className="form-control" type="file" id="formFile" />
                            </div>

                            <div className='col-lg-3 col-6'>
                                <input className="form-control" type="file" id="formFile" />
                            </div>

                        </div>
                        
                        <div className='row'>
                            <hr />
                        </div>

                        <div className='row d-flex align-items-center justify-content-center mb-3'>
                            <button className='btn btn-success fw-bold text-dark col-lg-8 ' >ذخیره اطلاعات</button>
                        </div>

                    </form>

                </div>


            </div >

        </div >
    )
}

export default Sabt
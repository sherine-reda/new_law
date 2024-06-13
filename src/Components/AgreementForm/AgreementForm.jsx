// import { Field, Formik } from "formik";
// import React, { useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import "animate.css";
// import $ from "jquery";
// import i18next from "i18next";
// import { langContext } from "../../Context/LangContext";
// import axios from "axios";
// import { json } from "react-router-dom";
// import { DataApi } from "../../Api";
// function AgreementForm({ Id }) {
//   const { Lang, setLang } = useContext(langContext);
//   // (Id);
//   const [responsibilities, setresponsibilities] = useState([]);
//   const [itemValue, setitemValue] = useState(null);
//   const [totalPrice, settotalPrice] = useState(0);
//   const [Taxes, setTaxes] = useState(0);
//   const [isCheckedItem, setisCheckedItem] = useState(false);
//   const [QuestionsService, setQuestionsService] = useState([]);
//   const [myData, setmyData] = useState([]);
//   let arr = [];

//   function add(e) {
//     // (e.target.nextSibling.value);
//     let x = document.getElementById("inputText").value;
//     setresponsibilities((prevStateArray) => [...prevStateArray, x]);
//     // setresponsibilities(arr)
//     (responsibilities);
//     // e.target.nextSibling.value = ""
//   }
//   function deleteRes(i) {
//     setresponsibilities(
//       responsibilities.filter((ele) => ele !== responsibilities[i])
//     );
//   }
//   let index;
//   function setUpdateRes(i) {
//     index = i;
//     document.getElementById("inputText").value = responsibilities[i];
//     document.getElementById("plusIcon").classList.add("d-none");
//     document.getElementById("editIcon").classList.remove("d-none");
//     (i);
//   }
//   function editRes() {
//     // (e.target.nextSibling.value);
//     let x = document.getElementById("inputText").value;
//     setresponsibilities(
//       responsibilities.map((ele) => (ele == responsibilities[index] ? x : null))
//     );
//     document.getElementById("plusIcon").classList.remove("d-none");
//     document.getElementById("editIcon").classList.add("d-none");

//     (x);
//     // clear()
//   }
//   async function getQuestionsService() {
//     let url = `http://192.168.1.108/api/questions?lang=${Lang.toLowerCase()}&service_id=${Id}`;
//     // (url);
//     let { data } = await axios.get(url, {
//       headers: { accept: "application/json" },
//     });
//     (DataApi);
//     // (data);
//     setQuestionsService(DataApi);
//     // (QuestionsService);
//   }

//   function dd(e) {
//     let dodo = e.target;

//     let items = Array.from(
//       e.target?.nextSibling?.querySelectorAll(".dropdown-item")
//     );
//     // (items);
//     items.map((e, i) =>
//       e.addEventListener("click", function (e) {
//         setitemValue(e.target.innerHTML);
//         dodo.innerHTML = e.target.innerHTML;
//       })
//     );

//   }
//   function handleSubmit(event) {
//     event.preventDefault(); // prevent the form from submitting
//   }
//   function isChecked(i, e) {
//     let x = !document.getElementById(i).checked;
//     (x);
//     setisCheckedItem(x);
//     (isCheckedItem);
//     x
//       ? e.target.classList.add("bg-main", "text-white")
//       : e.target.classList.remove("bg-main", "text-white");
//     // x?:null
//     if (x) {
//       amoumt(e);
//     } else {
//       subtractAmount(e);
//     }

//   }
//   function amoumt(e) {
//     (e.target.innerHTML);
//     let x = e.target.innerHTML.indexOf("+");
//     let y = e.target.innerHTML.indexOf("SAR");
//     // (x,y);
//     // (e.target.innerHTML.slice(x+1,y));
//     let z = totalPrice + Number(e.target.innerHTML.slice(x + 1, y));
//     let tax = (z * 15) / 100;
//     //  (z,tax);
//     settotalPrice(z);
//     setTaxes(tax);
//   }
//   function subtractAmount(e) {
//     (e.target.innerHTML);
//     let x = e.target.innerHTML.indexOf("+");
//     let y = e.target.innerHTML.indexOf("SAR");
//     // (x,y);
//     // (e.target.innerHTML.slice(x+1,y));
//     let z = totalPrice - Number(e.target.innerHTML.slice(x + 1, y));
//     let tax = (z * 15) / 100;
//     settotalPrice(z);
//     setTaxes(tax);
//   }
//   async function submit() {
//     const form = document.getElementById("form");
//     const submitter = document.querySelector("button[value=save]");
//     const formData = new FormData(form, submitter);
//     (formData);
//     // const output = document.getElementById("output");

//     // formData.append('id',"sdsad")
//   ("hello");
//     for (const [key, value] of formData) {
//       (key +":" +value);
//     }
//   }
//   useEffect(() => {
//     getQuestionsService();
//   }, [Lang, Id]);
//   return (
//     <>
//       <section className="mb-5 " id="ArForm">
//         <div className="container shadow p-5">
//           <form onSubmit={handleSubmit} id="form">
//             <div className="row  g-md-5 gy-5 p-5 text-center">
//               {QuestionsService?.map((ele, i) => (
//                 <div className="col-md-12" key={i}>
//                   <div className="item">
//                     <label htmlFor="lang "> {ele.question.name}</label>
//                     {ele?.question?.answers[0]?.type == "select" ? (
//                       <div className="dropdown">
//                         <a
//                           onClick={(e) => dd(e)}
//                           className="btn btn-secondary dropdown-toggle btn btn-outline-form rounded-pill bg-transparent"
//                           href="#"
//                           role="button"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           {i18next.t("chose")}
//                         </a>

//                         <ul className="dropdown-menu form-menu">
//                           {ele?.question?.answers?.map((q, i) =>
//                             q.options.map((qq, i) => (
//                               <li key={i} className="">
//                                 <a className="dropdown-item d-flex justify-content-between  align-items-center  position-relative fs-5">
//                                   <span className="fs-6">{qq.name} </span>
//                                   {q.price > 0 ? (
//                                     <span className="text-end  position-absolute price-Check start-5">
//                                       +{q.price} SAR
//                                     </span>
//                                   ) : null}
//                                 </a>
//                                 {/* <span className="ps-5 d-none">{q.description}</span> */}
//                               </li>
//                             ))
//                           )}
//                         </ul>
//                       </div>
//                     ) : (
//                       <>
//                         {
//                           ele?.question?.answers[0]?.type == "checkbox" ? (
//                             <div className="row">
//                               {ele?.question?.answers?.map((q, i) => (
//                                 <div className="col-md-4 m-auto">
//                                   <div className="item">
//                                     <label
//                                       htmlFor={i}
//                                       onClick={(e) => isChecked(i, e)}
//                                       className="checkboxItem btn btn-outline-form position-relative rounded-pill fs-5"
//                                     >
//                                       {q.name}
//                                       <span className="position-absolute price-Check start-5 fs-6 fw-bold">
//                                         +{q.price} SAR
//                                       </span>
//                                     </label>
//                                     <input
//                                       id={i}
//                                       key={i}
//                                       type={q.type}
//                                       name={q.input_name}
//                                       value={q.name}
//                                       hidden
//                                       aria-hidden
//                                     />
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           ) :
//                           (ele?.question?.answers).map((q,i)=> <input key={i} type={q.type} className="form-control" name={ele.question.answers.input_name} value={ele.question.answers.name} placeholder={ele.question.answers.name}/> )
//                         }
//                       </>
//                     )}
//                   </div>
//                 </div>
//               ))}
//               {/* ///////////////////////////// */}

//               <div className="col-md-12">
//                 <div className="row my-5 text-center m-auto  w-50 gy-3 ">
//                   <div className="col-6 ">
//                     <div className="item ">
//                       <h6 className="text-end">المبلغ</h6>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="item">
//                       <h6> {totalPrice} SAR </h6>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="item">
//                       <h6 className="text-end">الضريبة</h6>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="item">
//                       <h6> {Taxes} SAR </h6>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="item">
//                       <h6 className="text-end">المجموع</h6>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="item">
//                       <h6>{totalPrice + Taxes} SAR </h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-12 ">
//                 <div className="item  text-center">
//                   <button
//                     className="btn btn-outline-gray rounded-pill w-lg-50  "
//                        name="intent"
//                       value="save"
//                     onClick={() => submit()}

//                   >
//                     {i18next.t("BuyAgreement")}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AgreementForm;
import { Field, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import $ from "jquery";
import i18next from "i18next";
import { langContext } from "../../Context/LangContext";
import axios from "axios";
import { json } from "react-router-dom";
import { DataApi } from "../../Api";
import { type } from "@testing-library/user-event/dist/type";
function AgreementForm({ Id }) {
  const { Lang, setLang } = useContext(langContext);
  // (Id);
  const [responsibilities, setresponsibilities] = useState([]);
  const [itemValue, setitemValue] = useState(null);
  const [totalPrice, settotalPrice] = useState(0);
  const [Taxes, setTaxes] = useState(0);
  const [isCheckedItem, setisCheckedItem] = useState(false);
  const [QuestionsService, setQuestionsService] = useState([]);
  const [myData, setmyData] = useState([]);
  const [inputTextInfo, setinputTextInfo] = useState({});
  const [typeInput, settypeInput] = useState("");
  let arr = [];

  function add(e) {
    let x = document.getElementById("inputText").value;
    setresponsibilities((prevStateArray) => [...prevStateArray, x]);
  }
  function deleteRes(i) {
    setresponsibilities(
      responsibilities.filter((ele) => ele !== responsibilities[i])
    );
  }
  let index;
  function setUpdateRes(i) {
    index = i;
    document.getElementById("inputText").value = responsibilities[i];
    document.getElementById("plusIcon").classList.add("d-none");
    document.getElementById("editIcon").classList.remove("d-none");
  }
  function editRes() {
    let x = document.getElementById("inputText").value;
    setresponsibilities(
      responsibilities.map((ele) => (ele == responsibilities[index] ? x : null))
    );
    document.getElementById("plusIcon").classList.remove("d-none");
    document.getElementById("editIcon").classList.add("d-none");
  }
  async function getQuestionsService() {
    let url = `http://192.168.1.108/api/questions?lang=${Lang.toLowerCase()}&service_id=${Id}`;
    let { data } = await axios.get(url, {
      headers: { accept: "application/json" },
    });
    console.log(data);
    setQuestionsService(data);
  }

  function dd(e) {
    let dodo = e.target;

    let items = Array.from(
      e.target?.nextSibling?.querySelectorAll(".dropdown-item")
    );
    items.map((e, i) =>
      e.addEventListener("click", function (e) {
        setitemValue(e.target.innerHTML);
        dodo.innerHTML = e.target.innerHTML;
      })
    );
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevent the form from submitting
    let x = event?.target?.querySelector('input[type="text"]');
    if (x) {
      console.log("hi1");
      let y = { id_Ans: x?.getAttribute("id") };
      y[`${x?.getAttribute("name")}`] = x?.value;
      settypeInput("text");
      setinputTextInfo(y);
    }
    submit();
  }
  function isChecked(i, e) {
    let x = !document.getElementById(i).checked;
    setisCheckedItem(x);
    x
      ? e.target.classList.add("bg-main", "text-white")
      : e.target.classList.remove("bg-main", "text-white");
    if (x) {
      amoumt(e);
    } else {
      subtractAmount(e);
    }
  }
  function amoumt(e) {
    let x = e.target.innerHTML.indexOf("+");
    let y = e.target.innerHTML.indexOf("SAR");
    let z = totalPrice + Number(e.target.innerHTML.slice(x + 1, y));
    let tax = (z * 15) / 100;
    settotalPrice(z);
    setTaxes(tax);
  }
  function subtractAmount(e) {
    let x = e.target.innerHTML.indexOf("+");
    let y = e.target.innerHTML.indexOf("SAR");
    let z = totalPrice - Number(e.target.innerHTML.slice(x + 1, y));
    let tax = (z * 15) / 100;
    settotalPrice(z);
    setTaxes(tax);
  }
  async function submit() {
    const form = document.getElementById("form");
    const submitter = document.querySelector("button[value=save]");
    const formData = new FormData(form, submitter);
    let arr = [];
    let ids = [];
    QuestionsService.map((q, i) => ids.push(q.question.id));
    console.log(typeInput);
    if (typeInput != "text") {
      for (const [key, value] of formData) {
        // let zz = value
        let xx = {};
        let start = value.indexOf("_");
        let idAnswer = value.slice(start + 1);
        let i_name = value.slice(0, start);
        xx[`${i_name}`] = idAnswer;
        xx.id_Ans = idAnswer;
        arr.push(xx);
      }
    } else {
      arr.push(inputTextInfo);
    }

    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      obj.id_Q = ids[i];
    }
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].nameQ == arr[j].nameQ) {
          console.log(arr[i].id_Q);
          arr[j].id_Q = arr[i].id_Q;
        }
      }
    }
    setmyData(arr);
    console.log(arr);
  
  }
  useEffect(() => {
    getQuestionsService();
  }, [Lang, Id]);
  return (
    <>
      <section className="mb-5  " id="ArForm">
        <div className="container shadow  w-lg-50  justify-content-center  d-flex ">
          <form onSubmit={handleSubmit} id="form" className="p-5 w-100 ">
            <div className="row  g-md-5 gy-5 p-lg-5 text-center  ">
              {QuestionsService?.map((q, i) => (
                <div className="col-md-12 m-auto text-center" key={i}>
                  <div className="item">
                    <label htmlFor={q.question.id}> {q.question.name}</label>
                    {q.question.answers.map((a, i) =>
                      a.type == "select" ? (
                        <div className="custom-select  w-100" key={i}>
                          <select
                            className=" btn btn-outline-form w-100 rounded-pill h-100"
                            name={q.question.name}
                          >
                            {a.options.map((o, i) => (
                              <option key={i} value={`${a.input_name}_${o.id}`}>
                                {o.name}
                              </option>
                            ))}
                          </select>
                          <span className="custom-arrow"></span>
                        </div>
                      ) : a.type == "checkbox" ? (
                        <div className="d-lg-inline-block w-50 ps-3" key={i}>
                          <div className=" m-auto w-100">
                            <div className="item">
                              <label
                                htmlFor={i}
                                onClick={(e) => isChecked(i, e)}
                                className="checkboxItem btn btn-outline-form position-relative rounded-pill fs-5"
                              >
                                {a.name}
                                <span className="position-absolute price-Check start-5 fs-6 fw-bold">
                                  +{a.price} SAR
                                </span>
                              </label>
                              <input
                                id={i}
                                key={i}
                                type={a.type}
                                name={a.name}
                                value={`${a.input_name}_${a.id}`}
                                hidden
                                aria-hidden
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <input
                          key={i}
                          name={a.input_name}
                          id={a.id}
                          type={a.type}
                          className="form-control btn btn-outline-form rounded-pill"
                        ></input>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* ///////////////فاتورة////////////// */}

              <div className="col-md-12">
                <div className="row my-5 text-center m-auto w-50  gy-3 ">
                  <div className="col-6 ">
                    <div className="item ">
                      <h6 className="text-end"> {i18next.t("Amount")}</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6> {totalPrice} SAR </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6 className="text-end"> {i18next.t("Taxes")}</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6> {Taxes} SAR </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6 className="text-end"> {i18next.t("Total")}</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6>{totalPrice + Taxes} SAR </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 ">
                <div className="item  text-center">
                  <button
                    className="btn btn-outline-gray rounded-pill w-lg-50  "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    // name="intent"
                    value="save"
                    // onClick={() => submit()}
                  >
                    {i18next.t("BuyAgreement")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Modellllllllllllll */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Confirm Agreement
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-diss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="">Personal Data</h4>
                <div className="ms-3">
                  <h5>
                    Full Name :{" "}
                    <span className="text-muted fs-5">Ahmed Mohamed</span>
                  </h5>
                  <h5>
                    Email :{" "}
                    <span className="text-muted fs-5">Ahmed@gmail.com</span>
                  </h5>
                  <h5>
                    Gender : <span className="text-muted fs-5">Male</span>
                  </h5>
                  <h5>
                    Phone : <span className="text-muted fs-5">84848484848</span>
                  </h5>
                </div>
                <h4 className="">Agreement</h4>
                <div className="row ms-3">
                  <div className="col-md-6">
                    <h5>
                      Name :{" "}
                      <span className="text-muted fs-5">Service Policy</span>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">English</span>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">English</span>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">English</span>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">English</span>
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">English</span>
                    </h5>
                  </div>
                  <div className="col-md-12">
                    <h5>
                      Language :{" "}
                      <span className="text-muted fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, similique.
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="modal-footer m-auto justify-content-center">
                <div className="">
                  <div className="row my-5 text-center m-auto  w-50 gy-3 ">
                    <div className="col-6 ">
                      <div className="item ">
                        <h6 className="text-end"> {i18next.t("Amount")}</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item">
                        <h6> {totalPrice} SAR </h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item">
                        <h6 className="text-end"> {i18next.t("Taxes")}</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item">
                        <h6> {Taxes} SAR </h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item">
                        <h6 className="text-end"> {i18next.t("Total")}</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="item">
                        <h6>{totalPrice + Taxes} SAR </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn bg-main text-white w-75"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModal2Label"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Payment
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgreementForm;

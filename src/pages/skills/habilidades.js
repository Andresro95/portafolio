// import React, { Fragment, useEffect, useState } from "react";
// import "./habilidades.css"



// // import {
// //   createTestimonial,
// //   deleteTestimonial,
// //   getTestimonialsByUserId,
// //   setTestimonialToEditAction,
// //   updateTestimonial,
// // } from "../../../../imports/ui/app/actions/testimonial";


// // -------------------------------------------------------------

// const Habilidades = () => {
//   const { id } = useParams();
//   const { realtor, loading } = useSelector((state) => state.realtor);
//   // console.log("realtor", realtor);
//   const [social, setSocial] = useState([]);
//   // console.log("social",social)

//   const { loadingContact } = useSelector((state) => state.contact);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const { getFieldProps, handleSubmit, errors, touched } = useFormik({
//     initialValues: {
//       to: (realtor && realtor.emails[0].address) || "",
//       employeeName: (realtor && realtor.profile.nombre + " ") || "",
//       userName: user && user.profile.nombre,
//       userEmail: user && user.emails[0].address,
//       userConfirmEmail: user && user.emails[0].address,
//       mensaje: "",
//       subject: "",
//     },
//     validationSchema: ContactValidationSchema,
//     enableReinitialize: true,
//     onSubmit: async (formValues) => {
//       dispatch(sendContactRequest(formValues));
//     },
//   });

//   useEffect(() => {
//     dispatch(getRealtorById(id));
//     dispatch(getTestimonialsByUserId(id));
//   }, [dispatch]);

//   // const { testimonial} = useSelector(

//   //   (state) => state.testimonial

//   // );
//   const { testimonial, testimonials: testimonialsFromStore } = useSelector(
//     (state) => state.testimonial
//   );

//   const initialTestimonials = {
//     clientName: "",
//     photo: "",
//     testimonial: "",
//   };

//   return (
//     <>
//       {loading ? (
//         <div style={{ width: "100%", marginTop: 30, textAlign: "center" }}>
//           <Spinner animation="border" variant="dark" as="span" />
//         </div>
//       ) : (
//         <>
//           {!realtor ? (
//             <p>No existeun realtor asociado.</p>
//           ) : (
//             <Fragment>
//               <div className="cont-description-perf-consultor">
//                 <div className="description-consultor">
//                   <b>
//                     {realtor.profile.nombre} {realtor.profile.apellidos}
//                   </b>
//                   <div style={{ display: "flex", flexDirection: "row" }}>
//                     {/* <label>REALTOR :</label> */}
//                     <label>{realtor.profile.position}</label>
//                   </div>
//                   <div className="cont-label-information">
//                     <div
//                       style={{
//                         width: "98%",
//                         height: "auto",
//                         wordWrap: "break-word",
//                         overflow: "hidden",
//                       }}
//                     >
//                       <pre className="label-information">
//                         {realtor.profile.information
//                           ? realtor.profile.information
//                           : "No hay información disponible"}
//                       </pre>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="foto-consultor-perfil">
//                   <div className="cont-imagen-consultor">
//                     <img
//                       src={
//                         realtor.profile.imagen ||
//                         "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-aucune-image-disponible-ic%C3%B4ne-plat-illustration-vectorielle.jpg"
//                       }
//                     ></img>
//                   </div>
//                 </div>
//               </div>
//               {testimonialsFromStore.length > 0 ? (
//                 <div className="cont-carousel-contact00022">
//                   <Carousel
//                     autoPlay={true}
//                     infiniteLoop={true}
//                     swipeable={true}
//                     showThumbs={true}
//                     showIndicators={true}
//                     showStatus={false}
//                     emulateTouch={true}
//                     autoFocus={true}
//                     showArrows={true}
//                     stopOnHover={true}
//                     interval={10000}
//                     transitionTime={1500}
//                     swipeScrollTolerance={5}
//                   >
//                     {testimonialsFromStore.map((item, index) => (
//                       <div key={index}>
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             textAlign: "center",
//                             justifyContent: "center",
//                             margin: "30px",
//                             // background:"orange"
//                           }}
//                         >
//                           <div className="contenedor-carrusel-consultor-principal01">
//                             <div className="cont-carousel-img-consultor">
//                               <img
//                                 className="d-block w-100"
//                                 src={item.photo}
//                                 alt="First slide"
//                               />
//                             </div>
//                           </div>

//                           <div
//                             style={{
//                               display: "flex",
//                               flexDirection: "column",
//                               paddingTop: "10px",
//                             }}
//                           >
//                             <h3 style={{ fontSize: "18px" }}>
//                               {item.clientName}
//                             </h3>
//                             <div
//                               style={{
//                                 width: "100%",
//                                 height: "auto",
//                                 paddingBottom: "15px",
//                               }}
//                             >
//                               <pre
//                                 style={{
//                                   textAlign: "center",
//                                   color: "white",
//                                   fontSize: "17px",
//                                   fontFamily: "Montserrat",
//                                 }}
//                               >
//                                 {item.testimonial}
//                               </pre>
//                             </div>

//                             {/* <p>{item.testimonial}</p> */}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </Carousel>
//                 </div>
//               ) : null}
//               <div className="cont-contact-informacion-realtor0001">
//                 <div style={{ marginLeft: "7%", width: "85%", height: "auto" }}>
//                   <div className="texto-contact-perfil">
//                     <b>CONTACT</b>
//                   </div>

//                   <form onSubmit={handleSubmit} autoComplete="off">
//                     <div className="cont-principal-contact-consultor">
//                       <div className="contact-consultor">
//                         <div className="inputs-contact-consultor">
//                           <input
//                             type={"text"}
//                             placeholder="NAME"
//                             {...getFieldProps("userName")}
//                           ></input>
//                           <i class="fas fa-solid fa-user"></i>
//                         </div>
//                         {errors.userName && touched.userName && (
//                           <HelperText
//                             helperText={errors.userName}
//                             colorText="red"
//                           />
//                         )}
//                         <div className="inputs-contact-consultor">
//                           <input
//                             type={"text"}
//                             placeholder="E-MAIL"
//                             {...getFieldProps("userEmail")}
//                           ></input>
//                           <i class="fas fa-solid fa-envelope"></i>
//                         </div>
//                         {errors.to && touched.to && (
//                           <HelperText helperText={errors.to} colorText="red" />
//                         )}
//                         <div className="inputs-contact-consultor002">
//                           <input
//                             type={"text"}
//                             placeholder="SUBJECT"
//                             {...getFieldProps("subject")}
//                           ></input>
//                         </div>
//                         {errors.subject && touched.subject && (
//                           <HelperText
//                             helperText={errors.subject}
//                             colorText="red"
//                           />
//                         )}
//                         <div className="inputs-contact-mensaje-consultor">
//                           <textarea
//                             type={"text"}
                          
//                             placeholder="MESSAGE"
//                             {...getFieldProps("mensaje")}
//                           ></textarea>
//                         </div>
//                         {errors.mensaje && touched.mensaje && (
//                           <HelperText
//                             helperText={errors.mensaje}
//                             colorText="red"
//                           />
//                         )}
//                         <div className="cont-boton-send-002perfil">
//                           <button
//                             className="boton-send-contact-consultor"
//                             disabled={loadingContact}
//                             style={{
//                               opacity: loadingContact ? 0.5 : 1,
//                             }}
//                           >
//                             <b>SEND</b>
//                             {loadingContact && (
//                               <Spinner
//                                 animation="border"
//                                 variant="light"
//                                 size="sm"
//                                 as="span"
//                               />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                       <div className="info-consultor-contact-perfil">
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             marginLeft: "5px",
//                             width: "100%",
//                           }}
//                         >
//                           <div className="cont-img-perfil-contact-0343">
//                             <img
//                               src={
//                                 realtor.profile.imagen ||
//                                 "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-aucune-image-disponible-ic%C3%B4ne-plat-illustration-vectorielle.jpg"
//                               }
//                               width="250px"
//                               alt="logo"
//                             />
//                           </div>

//                           {/* </div> */}
//                           <b>{realtor.profile.nombre}</b>
//                           <label>{realtor.profile.position}</label>
//                           {/* <label>{realtor.profile.telefono}</label> */}
//                           <label>{realtor.emails[0].address}</label>
//                           <label>
//                             PHONE: {phoneRegex(realtor.profile.telefono)}
//                           </label>
//                         </div>

//                         <div className="redes-sociales-contact-consultor">
//                           {realtor.profile.social.map((item) => (
//                             <a
//                               href={item.link}
//                               title={item.socialNetwork}
//                               target="_blank"
//                             >
//                               <i className={item.icon}></i>
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               <Footer />
//             </Fragment>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default Habilidades;

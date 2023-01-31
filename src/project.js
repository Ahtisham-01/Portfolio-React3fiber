import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import './styles.css'
import { useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
// import LottieAnimation from './Lotiecomp'
function Model({ props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/accelerated_particles.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" scale={50} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Torus001_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.material} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material} />
              </group>
              <group name="Torus002_2">
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export const project = () => {
  return (
    <>
      <div>
        <div className="bg ">
          {/* <div className=" main-heading-div">
            <h1 className="">
              <span style={{ fontSize: '0.4em' }}>my</span> <span className="p-heaing">Portfolio</span>
              <br />
              <br />
              <span>Ehtisham</span>
              <span style={{ fontSize: '0.4em' }}>kiani</span>
            </h1>
          </div> */}
          <div className="relative flex justify-center">
            <div className="w-full absolute xs:gap-6 sm:gap-8 md:gap-12 lg:gap-32 te xl:gap-72 flex pt-[24px] pr-[24px] pb-[0px] xs:pl-[14px] sm:pl-[40px] md:pl-[80px] lg:pl-[140px] xl:pl-[224px] xs:top-[80px] sm:top:[250px] main-images-div">
              <img
                className="xs:w-[60px] sm:w-[150px] md:w-[200px] ease-in duration-300 transition  images"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/IMG-20230127-WA0007-removebg-preview%20%281%29.png"
              />

              <div className="md:pr-8 lg:pr-10">
                <p className="xs:text-sm sm:text-xl md:text-2xl text-[#1e293b] ease-in duration-300 transition  font-bold about-me sm:pt-12 md:pt-14 lg:pt-16 xl:pt-24">
                  {' '}
                  About Me :-
                </p>
                <p className="xs:text-[8px] sm:text-sm md:text-lg ease-in duration-300 transition  font-bold about-me text-slate-100 sm:pt-2 pb-2">
                  {' '}
                  I am a Font End Web Develper , 3D Artists , Game Develper . I can provide clean code and pixel perfect design. I also make the website more &
                  more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with
                  web animations. A responsive design makes your website accessible to all users, regardless of their device.
                </p>
                {/* <button className="mt-4 rounded-[50px] button-talk">Let's Talk</button> */}
              </div>
            </div>
          </div>
          <div className="">
            <Canvas dpr={[1.5, 2]} linear shadows>
              <fog attach="fog" args={['#272730', 16, 30]} />
              <ambientLight intensity={0.75} />
              <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
                <pointLight intensity={1} position={[-10, -25, -10]} />
                <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
              </PerspectiveCamera>
              <Suspense fallback={null}>
                <Model url="/accelerated_particles.glb" />
              </Suspense>
              <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
              <Stars radius={500} depth={50} count={1000} factor={10} />
            </Canvas>
            <div className="layer" />
            <Loader />
            {/* <LottieAnimation /> */}
            {/* <LottieAnimation/> */}
          </div>
          <div className="xs:pt-[150px] sm:pt-[500px] lg:pt-80  align-center text-center ">
            {' '}
            <p class=" xs:text-xl sm:text-3xl font-bold my-project-text text-[peru] xs:pb-6 sm:pb-10">MY PROJECTS</p>
            {/* <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper bg-cover">
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide>SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper> */}
            <div className="card-text grid xs:gap-8 sm:gap-14 xs:grid-cols-1 lg:grid-cols-3 lg:grid lg:pr-6 lg:pl-6 sm:pl-32 sm:pr-32 xs:pl-10 xs:pr-10">
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230px]" src="../../firsts-image.jpg" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-white pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230px]" src="../../three-images.jpg" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    {' '}
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-slate-200 pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230pdx]" src="../../game-images.jpg" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    {' '}
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-slate-200 pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>{' '}
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230px]" src="../../threed-images.jpg" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    {' '}
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-slate-200 pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>{' '}
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230px]" src="../../second-images.png" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    {' '}
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-slate-200 pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>{' '}
              <div className="boxs ">
                <div className="relative">
                  <img className="w-full xs:h-[140px] sm:h-[260px] lg:h-[180px] xl:h-[230px]" src="../../new-images.webp" />
                  <div className="absolute  xs:h-[40px] sm:h-[80px] lg:h-[60px] xl:h-[80px] xs:top-[100px] sm:top-[180px] md:top-[180px] lg:top-[120px] xl:top-[150px] card-div">
                    {' '}
                    <p className="lg:text-sm xl:text-lg xs:text-xs sm:text-base font-bold card-class text-slate-200 pt-2">Click the Link to check the Project:-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#1e293b] card-class xs:mt-24 sm:mt-44 pt-2 pr-2 pl-2 pb-2">
              <div>
                <h2 className="contant-name sm:text-[25px] xs:text-[18px] pt-6">Ehtisham Nawaz Kiani</h2>
                <p className="pt-10 xs:text-[12px] sm:text-lg text-slate-100">If you want to contant with then get me on these place.</p>
                <p className="pt-4 xs:text-sm sm:text-lg text-slate-100">Thank you </p>
                <ul className="new-icons">
                  <li>
                    <i className="">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </i>
                  </li>
                  <li>
                    <i className="">
                      <FontAwesomeIcon icon={faDiscord} />
                    </i>
                  </li>

                  <li>
                    <i className="fab fa-linkedin">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </i>
                  </li>
                  <li>
                    <i className="fab fa-instagram">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default project

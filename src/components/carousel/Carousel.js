import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss"
import "swiper/components/effect-coverflow/effect-coverflow.scss"
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import './Carousel.css';
import { useStateValue } from '../../StateProvider';
import { useTranslation } from 'react-i18next';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation])

const Carousel = () => {

    const [ dark ] = useStateValue();
    const { t } = useTranslation();

    return (
        <div className={ ! dark.dark ? "container" : "lightContainer"}>
            <h2>{t("carousel_h2")}</h2>
            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{
                    clickable: true
                }}
            >
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbJegjPMAwUSn6A8Efr1EL8ZFBMPBTsaIvIYp5Nw-jM6wKj1zYL1E_oqZJVqe1VrMQgA&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQa_kDicFUtiYS94dDuqD3JBYc1UOY7NhN6b23WRg6hociWlACBl6Z9FYNPwvoZOZSCM&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBAsVT9UPL0T-YZt6CjNveTh1Fb6JPYYT7QIyZoo_pOekrd29OZyfNFp6HLQACLuGCGc&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITksnjm1JgTzGc7b8ZZ7ZSFhE2xebWrK6LajJx1x6LiUDQo3hPCE4QYXnC_M7gym7ztw&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zu9i5qK4agTxv1Fnz7E2o6FJRgEwj7Y8IQ&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIRApj5jlxMuvziJx07NqoJ5ttqmKm2FfbtycY2c-z1z44eDQf9PmH3c4uqXLvEUNBIE&usqp=CAU" alt="biron nima" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;

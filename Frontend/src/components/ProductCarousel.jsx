import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Carousel } from "./ui/carousel";

export function Products() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const productSlides = [
    {
      title: t('products.carousel.spices'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/fl_preserve_transparency/v1744104890/spices_x73w3x.jpg",
      category: "spices"
    },
    {
      title: t('products.carousel.dal'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/lke9ucjiklhaajgikvkr.jpg",
      category: "pulses"
    },
    {
      title: t('products.carousel.pulses'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/achxp9ucdda2ajbjeygp.jpg",
      category: "pulses"
    },
    {
      title: t('products.carousel.vegetables'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/if7fmackdd34uy6guyys.jpg",
      category: "vegetables"
    },
    {
      title: t('products.carousel.fruits'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/rnoohbyhkfxfy7ipinen.jpg",
      category: "fruits"
    },
    {
      title: t('products.carousel.wheat'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/zmjjkou75h4w7igsopi8.jpg",
      category: "grains"
    },
    {
      title: t('products.carousel.jowar'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/qbgnuhdxwisle6styyea.jpg",
      category: "grains"
    },
    {
      title: t('products.carousel.mango'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303069/Business_App/tr7s1tbz7daehxinll2x.jpg",
      category: "fruits"
    },
    {
      title: t('products.carousel.sugar'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106327/Business_App/s1jlgk648cotphznkfww.jpg",
      category: "sugar"
    },
    {
      title: t('products.carousel.jaggery'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/qtpnhox07urfme1torrk.jpg",
      category: "jaggery"
    },
    {
      title: t('products.carousel.rice'),
      button: t('products.carousel.view'),
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106328/Business_App/c1iuwp2tvucc3f4epvxj.jpg",
      category: "rice"
    },
  ];

  const handleProductClick = (category) => {
    navigate('/products', { state: { category } });
  };

  return (
    <div className="relative overflow-hidden w-full h-full py-12">
      <Carousel 
        slides={productSlides} 
        onSlideClick={handleProductClick}
      />
    </div>
  );
}
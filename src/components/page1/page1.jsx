import React, { useState, useEffect } from 'react';  
import "./page1.css"
// ImageSlider Component  
const ImageSlider = () => {  
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);  
    const images = [  
        "https://picsum.photos/800/400?random=1",  
        "https://picsum.photos/800/400?random=2",  
        "https://picsum.photos/800/400?random=3",  
        "https://picsum.photos/800/400?random=4",  
        "https://picsum.photos/800/400?random=5",  
        "https://picsum.photos/800/400?random=6",  
    ];  

    const showSlide = (index) => {  
        setCurrentSlideIndex((index + images.length) % images.length);  
    };  

    const handleKeyDown = (event) => {  
        if (event.key === 'ArrowRight') {  
            showSlide(currentSlideIndex + 1);  
        } else if (event.key === 'ArrowLeft') {  
            showSlide(currentSlideIndex - 1);  
        } else if (event.key === 'Home') {  
            setCurrentSlideIndex(0);  
        } else if (event.key === 'End') {  
            setCurrentSlideIndex(images.length - 1);  
        }  
    };  

    useEffect(() => {  
        const handleKeyPress = (event) => handleKeyDown(event);  
        document.addEventListener('keydown', handleKeyPress);  
        return () => {  
            document.removeEventListener('keydown', handleKeyPress);  
        };  
    }, [currentSlideIndex]);  

    return (  
        <div className="image-slider">  
            <section className="slider__content">  
                <button  
                    type="button"  
                    className="slider-control--button prev-button"  
                    onClick={() => showSlide(currentSlideIndex - 1)}  
                >  
                    <svg width="16" height="16" fill="currentColor" className="icon arrow-left-circle" viewBox="0 0 16 16">  
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />  
                    </svg>  
                </button>  
                <main className="image-display">  
                    <img src={images[currentSlideIndex]} alt={`Slide ${currentSlideIndex + 1}`} />  
                </main>  
                <button  
                    type="button"  
                    className="slider-control--button next-button"  
                    onClick={() => showSlide(currentSlideIndex + 1)}  
                >  
                    <svg width="16" height="16" fill="currentColor" className="icon arrow-right-circle" viewBox="0 0 16 16">  
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />  
                    </svg>  
                </button>  
            </section>  
            <nav className="slider-navigation">  
                {images.map((src, index) => (  
                    <button  
                        key={index}  
                        className="nav-button"  
                        aria-selected={index === currentSlideIndex}  
                        onClick={() => setCurrentSlideIndex(index)}  
                    >  
                        <img className="thumbnail" src={src} alt={`Thumbnail ${index + 1}`} />  
                    </button>  
                ))}  
            </nav>  
        </div>  
    );  
};  

// Parent component rendering ImageSlider  
const PageFirst = () => {  
    return (  
        <div className="page-first">  
            <h1>Welcome to the Image Slider!</h1>  
            <ImageSlider />  
        </div>  
    );  
};  

export default PageFirst;
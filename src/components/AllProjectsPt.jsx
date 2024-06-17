import React from 'react';
import '../styles/AllProjectsPt.css';
import photo from '../assets/images/block5-photo.png'

function AllProjectsPt() {
    return (
        <section className='all-projects-section'>
            <div className='all-projects-container'>
                <h2 className='title'>Наши проекты</h2>
                <p className='sub-title'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
                <div className='projects-gallery'>
                    <img src={photo} alt='Project 1' />
                    <img src={photo} alt='Project 2' />
                    <img src={photo} alt='Project 3' />
                    <img src={photo} alt='Project 4' />
                </div>
                <button className='all-projects-button'>Все проекты</button>
            </div>
        </section>
    );
};


export default AllProjectsPt
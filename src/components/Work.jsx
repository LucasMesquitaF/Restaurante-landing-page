import { React, Grid } from 'react'
import './Work.css'
import Card from './Card'

function Work() {
    const card_data = [
        { id: 1, img: 'src/assets/pick-meals-image.png', title: 'Picks Meals', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.' },
        { id: 2, img: 'src/assets/choose-image.png', title: 'Choose How Often', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et ' },
        { id: 3, img: 'src/assets/delivery-image.png', title: 'Fast Deliveries', text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum' },
    ]
    return (
        <div id='Work' className='work-container'>
            <div className='work-description'>
                <p className='tag'>Work</p>
                <h1>How it Works</h1>
                <div className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</div>
            </div>
            <div className='cards-container'>
                {card_data.map((item) => {
                    return <Card key={item.id} img={item.img} title={item.title} text={item.text}></Card>
                })}
            </div>
        </div>
    )
}

export default Work
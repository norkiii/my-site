import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Sytems</h1>
            <div className='cards__container'>
                <div className='/cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src='/images/1.svg'
                            text='Explore more..'
                            label='Home Automation'
                            path='/services'
                        />
                        <CardItem
                            src='/images/2.svg'
                            text='Explore more..'
                            label='Mobile App'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/3.svg'
                            text='Explore more..'
                            label='Cloud Computing'
                            path='/services'
                        />
                        <CardItem
                            src='/images/4.svg'
                            text='Explore more..'
                            label='Apps'
                            path='/services'
                        />
                        <CardItem
                            src='/images/5.svg'
                            text='Explore more..'
                            label='System Dev'
                            path='/services'
                        />

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
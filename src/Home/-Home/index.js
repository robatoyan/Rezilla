import { Left_H } from './left_H';
import { Right_H } from './right_H';
import './style.css';

export const _Home = () => {
    return (
        <div className='_Home' id='Home'>
            <Left_H />
            <Right_H />
            <div className='Reducer'></div>
        </div>
    )
}
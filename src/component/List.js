import React from 'react'
import { Link } from 'react-router-dom';
export default function List(props) {
    const { data } = props;
    return (
        <div className="list">
            {data.map(obj => {
                return (
                    <div className="card">
                        <div className="inline">
                            <div>
                                <img src={obj.image} className='image' />
                            </div>
                            <div>
                                <p className="title">{obj.title}</p>
                            </div>
                        </div>
                        <div className='button-alignment'>
                            <Link to={`/recipie/${obj.id}`}>
                                <button className="button">Show Detail</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

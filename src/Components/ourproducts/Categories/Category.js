import React,{useState} from 'react'
import Categories from './Categories';
import './categories.css'


const Category = ()=>{
    const [data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=>{
            return curData.category===catItem;
        });
        setData(result);
    }
    return (
        <>
            <div className="container-fluid mx-2 category">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Kitchen Appliances')}>Kitchen Appliances</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Kitchenware')}>Kitchenware</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('TVs & Accessories')}>TVs & Accessories</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Home Audio & Speakers')}>Home Audio & Speakers</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Microphones')}>Microphones</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Amplifiers & Mixers')}>Amplifiers & Mixers</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Medical Supplies')}>Medical Supplies</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Personal Care Tool')}>Personal Care Tool</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Electric Kettle')}>Electric Kettle</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Vacuum & Steam Iron')}>Vacuum & Steam Iron</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All Products</button>
                    </div>
                    <div className="col-md-9">
                        
                        <div className="row">
                            {data.map((values)=>{
                                const{id,title,price,image}=values;
                                return(
                                    <>
                                    <div className="col-md-4 mb-4" key={id}>
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        {/* <p>₱ {price}</p> */}
                                    </div>
                                </div>
                            </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;
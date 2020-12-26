import React from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
function Information() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState();
    const id = useParams().id;
    console.log(id);

    React.useEffect(() => {
        setIsLoading(true);
        Axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=8a356e1eb8b7433e8c353974801a3aa2`).then(
            (res) => {
                setData(res.data);
                setIsLoading(false);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    })
    const createMarkup = () => {
        return { __html: data.summary };
    }
    return (
        <>
        {!data? <h3>Loading...</h3>:
        <div className="info-container">
            <p style={{textAlign:'center', fontSize:'20px'}}>{data.sourceName}</p>
            <div style={{display:'flex', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:'5px', width:'780px', marginLeft:'10px'}}>
                <div>
                    <img src={data.image} width="220px" style={{width:'100px', height:'100px', padding:'10px 10px 10px 10px', borderRadius:'50%'}}/>
                </div>
                <div style={{marginTop:'10px'}}>
                    <p style={{fontSize:'18px'}}>{data.title}</p>
                    <p style={{fontSize:'16px'}}>Price Per Serving : {data.pricePerServing}rs.</p>
                </div>
            </div>
            <p style={{textAlign:'center', fontSize:'18px'}}>Recipie</p>
            <div dangerouslySetInnerHTML={createMarkup()} style={{padding:'10px 10px 10px 10px', color:'grey', borderRadius:'5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width:'760px', marginLeft:'10px'}} />
            <p style={{textAlign:'center', fontSize:'18px'}}>Ingredient</p>
            <div style={{width:'760px',marginLeft:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:'5px', padding:'10px 10px 10px 10px'}}>
                {data.extendedIngredients.map(obj=>{
                    return (
                        <div>
                            <p style={{color:'grey'}}>Name : <span style={{textTransform:'uppercase'}}>{obj.name}</span></p>
                            <p style={{color:'grey'}}>Quantity : {obj.measures.us.amount} {obj.measures.us.unitShort} </p>
                            <hr/>
                        </div>
                        
                    )
                })}
            </div>
        </div>}
        </>
    )
}

export default Information

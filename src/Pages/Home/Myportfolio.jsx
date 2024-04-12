import data from'../../data/index.json';
export default function MyPortfolio(){
    return(
        <section className='portfolio--section' id='Myportfolio'>
            <div className='portfolio-container--box'>
                <div className='portfolio--container'>
                    <p className='sub--titlte'>My Portfolio:</p>
                    <h2 className='section--heading'>Recent Projects:</h2>
                    
                </div>
                <div className='portfolio--section--container'>
                    {data?.portfolio?.map((items,index)=>{
                        return(
                            <div key={index} className='portfolio--section--card'>
                                <div className='portfolio--section--img'>
                                         <img src={items.src} alt='Placeholder'/>
                                    </div>
                                <div>
                                    <h3 className='portfolio--section--title'>{items.title}</h3>
                                    <p className='text-md'>{items.description}</p>
                                </div>
                                <p className='text-sm
                                portfolio--link'></p>
                            </div>
                        )
                    })} 
                </div>

            </div>
        </section>
    )
}
import NewsItem from './NewsItem'


function NewsGrid({items}){

    return (
        <div>
        <div className = "news-grid">
            {items.map((item, i)=>(
                <NewsItem key = {i} item ={item}/>

            ))}
        </div>
        </div>
    )
    
}

export default NewsGrid
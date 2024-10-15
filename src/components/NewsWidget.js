import React, { useEffect, useState } from 'react';
import Menu from './Menu'
import NewsGrid from './NewsGrid'
function NewsWidget() {
  
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [topic, setTopic] = useState("general") //topic that of the news that will be displayed
  
  useEffect(()=>{

    fetch (`https://newsapi.org/v2/everything?q=${topic}&apiKey=1c618b6b4bc4400daa2e07b00e2e834a`)
    .then(res => res.json())
    .then (data => setItems(data.articles))
  }, [topic])

    return (
        <div className="news-widget">
          <Menu active = {active} setActive ={setActive} setTopic={setTopic}/>
          <NewsGrid items ={items}/>
        </div>
    );
}

export default NewsWidget;

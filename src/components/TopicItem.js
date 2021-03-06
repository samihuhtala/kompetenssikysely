import React from 'react'

const TopicItem = ({ topic, changeOption }) => {

  const optionValues = Object.values(topic).map(option => option).filter(o => typeof o === 'object')

  return (
    <div className="topicItemContainer">
      <p className="topicItemHeader">{topic.text}</p>
      <fieldset>
        {optionValues.map((option, i) =>
          <div className="profOptions" key={i}><input type="radio" className="profOptionsRadio" name={topic.text}
            onChange={changeOption} value={option.value}/><label className="profOptionsText">{option.text}</label></div>)}
      </fieldset>
    </div>
  )
}

export default TopicItem

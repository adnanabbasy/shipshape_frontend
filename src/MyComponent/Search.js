import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import {useNavigate} from 'react-router-dom';


function Search() {
  const navigate = useNavigate();
  const [marineCategory, setMarineCategory] = useState([])

  const [category, setCategory] = useState([])
  const [address, setAddress] = useState("")

  useEffect (() => {
    axios.get('http://34.254.97.212:8080/api/marine-category/all').then((res) => {
      console.log("category",res)

      if(res.status === 200){
        var newAr = [];
        console.log('check');
        // setMarineReviews((marineReviews) => [...marineReviews, ...valuesArray]);
        res.data.map((el)=>{
            // console.log(el);
            newAr.push({ value: el.id , label: el.name });
        })
        setMarineCategory(newAr);
      }
    })
  }, [])

  const handleCategory = (event) => {
    setCategory(event['label'])
    console.log(event['label'])
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const payload = {
      "category": category,
      "address": address
    }

    navigate('/marine/'+payload['category']+"/"+payload['address']);
  }

  return (
    
        <div className="hsearch">
            <form role="search" onSubmit={handleSearchSubmit}>
                {/* <input id="service_search" className="search-one" type="text" placeholder="I'm looking for..." name="s" value="" autocomplete="off" />
                <input id="search-address-header" className="search-two pac-target-input" type="text" placeholder="Location" />
                <input type="submit" value="Search" form-id="topbarsearch" /> */}
                {/* <input type="text" placeholder="I'm looking for..."/> */}
                {/* <Select
                  theme={selectThemeColors}
                  defaultValue={marineCategory[0]}
                  // isMulti
                  id='servicesMarine'
                  className='react-select'
                  classNamePrefix='select'
                  // defaultValue={colourOptions[0]}
                  onChange={handleCategory}
                  options={marineCategory}
                  isClearable={false}
                /> */}
                <Select
                  // value={selectedOption}
                  defaultValue={marineCategory[0]}
                  onChange={handleCategory}
                  options={marineCategory}
                />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Location"/>
                <input type="submit" value="Search" form-id="topbarsearch" />
            </form>
              <div className="clear"></div>
        
    </div>
  )
}

export default Search

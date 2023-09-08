import React from 'react'

function Search() {
  return (
    
        <div className="hsearch">
            <form role="search" action="">
                {/* <input id="service_search" className="search-one" type="text" placeholder="I'm looking for..." name="s" value="" autocomplete="off" />
                <input id="search-address-header" className="search-two pac-target-input" type="text" placeholder="Location" />
                <input type="submit" value="Search" form-id="topbarsearch" /> */}
                <input type="text" placeholder="I'm looking for..."/>
                <input type="text" placeholder="Location"/>
                <input type="submit" value="Search" form-id="topbarsearch" />
            </form>
              <div className="clear"></div>
        
    </div>
  )
}

export default Search

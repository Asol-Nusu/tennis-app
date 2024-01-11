import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../../styles/MarketplaceSearch.css'

function MarketplaceSearch() {
    const [input, setInput] = React.useState("");

    function handleSubmit(event){
        event.preventDefault();
        //some clever db stuff

        setInput('');
    }

    function handleChange(event){
        const newV = event.target.value;
        setInput(newV);
    }

    return (
        <div className='marketplaceSearch'>
            <form>
                <input 
                value={input}
                onChange={handleChange} 
                className='marketplaceSearch__input'
                placeholder={"Find More Tennis Items Here"}
                />
                <SearchOutlinedIcon />
                <button onClick={handleSubmit} type='submit'>
                </button>
            </form>
        </div>
    )
}

export default MarketplaceSearch
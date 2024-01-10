import React from 'react'
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import '../../styles/CommunitySearch.css'

function CommunitySearch() {
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
    <div className='communitySearch'>
        <form>
            <input 
            value={input}
            onChange={handleChange} 
            className='communitySearch__input'
            placeholder={"Find More Players Here"}
            />
            <YoutubeSearchedForIcon />
            <button onClick={handleSubmit} type='submit'>
            </button>
        </form>
    </div>
    
  )
}

export default CommunitySearch
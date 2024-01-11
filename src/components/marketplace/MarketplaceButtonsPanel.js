import React from 'react'
import '../../styles/MarketplaceButtonsPanel.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Fab from '@mui/material/Fab';
import CreateIcon from '@mui/icons-material/Create';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

function MarketplaceButtonsPanel() {
  return (
    <div className='marketplaceButtonsPanel'>
        {/* Filter Button */}
        <div className='marketplaceButtonsPanel__filterButton'>
            Show Filters&nbsp;<TuneOutlinedIcon style={{color: 'black'}} />
        </div>
        
        {/* Cart */}
        <IconButton>
            <FavoriteBorderIcon style={{color: 'black', padding: '5px'}}/>
        </IconButton>
        {/* Create Post  */}
        <Fab  id='postButton' variant="extended" size="medium">
            <CreateIcon sx={{ mr: 1 }} /> Create Post
        </Fab>
        {/* My Post  */}
        <Fab id='viewPostsButton' variant="extended" size="medium">
            <ViewStreamIcon sx={{ mr: 1 }} /> View My Posts
        </Fab>
    </div>
  )
}

export default MarketplaceButtonsPanel
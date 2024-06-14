import React from 'react';
import "./SidebarRow.css";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function SidebarRow({Icon,title}) {
  return (
    <div className="sidebarRow">
        <Icon className="sidebarRow__icon"/>
      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow

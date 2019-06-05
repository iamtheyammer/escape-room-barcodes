import React from 'react';
import CraftingTable from './CraftingTable';

function Complete(props) {
  return(
    <div>
      <h2>Nice job!</h2>
      <p>You've found all of the ingredients to bake the cake!</p>
      <p>Now you need to craft it. Select the correct ingredient in each area to continue.</p>
      <CraftingTable />
    </div>
  )
}

export default Complete;
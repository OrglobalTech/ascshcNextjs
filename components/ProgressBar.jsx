import React from 'react';
// import progressStyles from "../styles/progressbar.modules.css"


const ProgressBar = () => {
  return <div>
      <div className="w-full">
  	{/* <!-- Waiting... --> */}
	<div className="w-full overflow-hidden ">
    	<div className="w-1/2 inline-block relative fluentProgressBar-waiting"></div>
	</div>

  
</div>
  </div>;
};

export default ProgressBar;

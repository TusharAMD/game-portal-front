import React from 'react';
import './Gamepage.css'
import JitsiComponent from './jitsi/jitsi.component';
import ThankYouComponent from './thank-you/thank-you.component';

function Gamepage(){
	return(
	<div className="gamemain">
		
		<div className="rightGamepage">
			<div>
			<div class="miniclip-game-embed" data-game-name="short-ride" data-theme="5" data-width="600" data-height="480" data-language="en"><a href="https://www.miniclip.com/games/short-ride/">Play Short Ride</a></div>
			<p>
				<a href="https://www.miniclip.com/games/short-ride/" target="_blank">Play Short Ride</a> -
				<a href="https://www.miniclip.com/games/genre-1151/" target="_blank">More Stunt games</a> -
				<a href="https://www.miniclip.com/terms" target="_blank">Terms and Conditions</a> -
				<a href="https://www.miniclip.com/privacy" target="_blank">Privacy Policy</a>
			</p>

			
			</div>
			</div>
		
		<div className="leftGamepage">
		
		<div>	
		<JitsiComponent />
		</div>
		
		</div>
	</div>
  );
}
export default Gamepage;
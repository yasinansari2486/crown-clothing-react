import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://192.168.0.14:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'NXzKzR38bHU20Pl8PRSz1xO6O0mQbAkadUclPRTr',
			client_secret:
            'WnhZO0S4qaSz15sYUFvw8ejOhUQA3iLFFkXAkN353x5uhVmDEaFySAFpzYNblvpSFPM6APfdL74DpIB05iAezXF1LjCeeKJKCfxMtvCwUe4fkEHb484XwEOpb24JUe2p',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;
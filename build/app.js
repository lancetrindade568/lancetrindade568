function()
{
	//Initialize Firebase
	const config = {
		apikey:"AIzaSyD_U7y6psjP-KDVUKY1rVvQKcnc2ustmA8";
		authDomain:"https://api-project-216031526665.web.app/";
		dataURL:"api-project-216031526665";
		storageBucket:"gs://api-project-216031526665.appspot.com";
	};
	firebase.initializeApp(config);
	
	//Get Elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	
	//Add login event
	btnLogin.addEventListener('click', e => {
		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = txtfirebase.auth();
		//Sign In
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e = > console.log(e.message));
	});
		
		//Add signup event
		btnSignUp.addEventListener('click', e=> {
			//Get email and pass
			//TODO
			const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = txtfirebase.auth();
		//Sign In
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e = > console.log(e.message));
	});
	
		btnlogout.addEventListener('click',e => {
			firebase.auth().signOut();
		});
		
		
		// Add a realtime listener
		firebase.auth().omAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				console.log(firebaseUser);
				btnLogout.classList.remove('hide');
			} else {
				console.log('not logged in');
				btnLogout.classList.add('hide');
			}
		});
	
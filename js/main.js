let input=document.getElementsByClassName("form-control");
let details=[];


function onsign(){
	let count;
	for(let i=0;i<input.length;i++){
		count=0;
		if(input[i].value.trim()===""){
			input[i].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
			count++;
		}
		else{
			input[i].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
		}
	};
	if (count==0){
		
		
		
		
		
	 let findUser=user.find(function(check){
		return check.userId==input[0].value
			
		})
		
		if(findUser){
			if(input[1].value==findUser.passWord){
				alert("proceed to login")
			}
			else{
				alert("invalid passWord")
			}
		}
		else{
			alert("invalid user-id");
		}
	};
};
let user=[{
userId:"rpathi783@gmail.com",
passWord:"Ugar@2021"
},
{
userId:"ragu052025@gmail.com",
passWord:"052025"
},
{
userId:"ragunagarajan2021@gmail.com",
passWord:"0331"
}
];
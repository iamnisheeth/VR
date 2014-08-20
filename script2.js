		var a,b,c,d,str1,str2,n,flag,cnt ;

		function AddGoal(){

			document.getElementById("AddGoalBox").style.visibility="visible";
			document.getElementById("PendingGoals").style.visibility="hidden";

			if((document.getElementById("AddGoalBox").childNodes.length) < 4)
			{	
			var ele = document.createElement("input");
			ele.setAttribute("type","text");
			ele.setAttribute("placeholder","things to do... ");
			ele.setAttribute("id","TextBox1");

			document.getElementById("AddGoalBox").appendChild(ele);

			var ele1 = document.createElement("input");
			ele1.setAttribute("type","date");
			ele1.setAttribute("id","StartDate");
			document.getElementById("AddGoalBox").appendChild(ele1);

			var ele2 = document.createElement("input");
			ele2.setAttribute("type","date");
			ele2.setAttribute("id","EndDate");
			document.getElementById("AddGoalBox").appendChild(ele2);

			var ele3 = document.createElement("input");
			ele3.setAttribute("type","button");
			ele3.setAttribute("id","SaveGoal");
			ele3.setAttribute("value","Save");
			ele3.setAttribute("onclick","SaveGoalToLs()");
			document.getElementById("AddGoalBox").appendChild(ele3);
			}

			
		}

		function allowDrop(ev) {
			ev.preventDefault();
		}

		function drag(ev) {
			ev.dataTransfer.setData("Text", ev.target.id);

		}	

		function drop(ev) {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("Text");
			try{
				
				var ChildrenArray = document.getElementById('ContentPane').childNodes;
		
				flag = 0;
				for (var i = 0; i < ChildrenArray.length; i++) {

					 str1 = ChildrenArray[i].id;
					 str2 = document.getElementById(data).id;
					 n = str2.localeCompare(str1);
					 if (n == 0)
					 	flag=1;
					 
				}
				if( flag == 0){
				
				ev.target.appendChild(document.getElementById(data));
				var pad = document.createElement("Div");
				pad.id = "pad";
				ev.target.appendChild(pad);
				var Icondragged = document.getElementById(data);
				newelement = Icondragged.cloneNode(document.getElementById(data))
				newelement.id = data;
				var sidePane = document.getElementById("SidePane");
				sidePane.appendChild(newelement);
				}
			}
			catch(err){
				alert(err);
			}
		}
		function Call_VR4 () {

			document.getElementById("PendingGoals").style.visibility="visible";
			document.getElementById("AddGoalBox").style.visibility="hidden";

		}
		function Call_VR3() {
			var DelDiv = document.getElementById("tabs");
			var DelDiv2 = document.getElementById("TabsContainer");
			var DelDiv3 = document.getElementById("NEXTbutton");
			var ParentDiv = document.getElementById("Box1");
			a = ParentDiv.removeChild(DelDiv);
			b = ParentDiv.removeChild(DelDiv2);
			c = ParentDiv.removeChild(DelDiv3);
	
			try{
			ParentDiv.appendChild(document.getElementById("VR3_Container"));
			}
			catch(err){
				ParentDiv.appendChild(d);
			}	
			
			var VR3 = document.getElementById("VR3_Container");
			VR3.style.visibility="visible";

			var c1 = document.getElementById("c1");
			var c2 = document.getElementById("c2");
			c1.style.fill = "#ffffff";
			c2.style.fill = "#fa7f4a";

			autoFetchGoals();
			cloneSidePane2();


		}
		function Call_VR2() {
			
			var c1 = document.getElementById("c1");
			var c2 = document.getElementById("c2");
			c2.style.fill = "#ffffff";
			c1.style.fill = "#fa7f4a";

			var ParentDiv = document.getElementById("Box1");
			var DelDiv4 = document.getElementById("VR3_Container");
			d = ParentDiv.removeChild(DelDiv4);
			ParentDiv.appendChild(a);
			ParentDiv.appendChild(b);
			ParentDiv.appendChild(c);

		}
		function SaveGoalToLs(){

			if (typeof(Storage) != "undefined") {
    			// check no of rows before adding a new item

    			var num = localStorage.getItem("NUM_OF_GOALS");
    			var  cnt = parseInt(num);
    			cnt++;
    			localStorage.setItem("Goal"+cnt, document.getElementById("TextBox1").value);
    			localStorage.setItem("GoalSD"+cnt, document.getElementById("StartDate").value);
    			localStorage.setItem("GoalED"+cnt, document.getElementById("EndDate").value);
    			localStorage.setItem("NUM_OF_GOALS", cnt);
    			// Retrieve
   				// document.getElementById("result").innerHTML = localStorage.getItem("lastname");
				} 
			else {
    			//document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
				alert("LocalStorage not supported!!")
			}
			

			}
		function autoFetchGoals () {
			// body...

			localStorage.setItem("Goal8","Meet Obama");
			var num = localStorage.getItem("NUM_OF_GOALS");
    			var  cnt = parseInt(num);
			for (var i = cnt-4; i <= cnt; i++) {

			
			var GC = document.createElement("Div");
			GC.setAttribute("id","GoalDetails"+i);
			GC.setAttribute("class","GoalDetails");
			document.getElementById("PendingGoals").appendChild(GC);
    		//itemLabel.setAttribute("for", item);
    		var itemLabel = document.createElement("Label");
    		itemLabel.setAttribute("class","text3");
    		itemLabel.innerHTML = localStorage.getItem("Goal"+i);
    		//itemLabel.innerHTML = localStorage.getItem("Goal"+i)+" "+localStorage.getItem("GoalSD"+i)+"  "+localStorage.getItem("GoalED"+i);
    		document.getElementById("GoalDetails"+i).appendChild(itemLabel);

    		var itemLabel1 = document.createElement("Label");
    		itemLabel1.setAttribute("class","text3 text4");
    		itemLabel1.innerHTML = localStorage.getItem("GoalSD"+i);
			document.getElementById("GoalDetails"+i).appendChild(itemLabel1);

			var itemLabel2 = document.createElement("Label");
    		itemLabel2.setAttribute("class","text3 text5");
    		itemLabel2.innerHTML = localStorage.getItem("GoalED"+i);
			document.getElementById("GoalDetails"+i).appendChild(itemLabel2);
			
			}
		}
		function cloneSidePane2 () {
			// body...



			
		
		}
	
			
		

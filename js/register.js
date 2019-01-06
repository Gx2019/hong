
function checkCode(){
			 var nums=new Array("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","A","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","0","1","2","3","4","5","6","7","8","9");//样本数据
		var str="";
		var nums1=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
		var n1="";//颜色数组
		var nums2=new Array("1","2","3","4","5","6","7");
		var n2;//字号数组
		for(var i=0;i<4;i++){
			for(var j=0;j<6;j++){
				var color=Math.floor(Math.random()*100)%16;
                  n1=n1+nums1[color];//遍历拼接颜色
			}
			var size=Math.floor(Math.random()*100)%8;
                   n2=nums2[size]; //生成一个随机字号
				   var p=Math.floor(Math.random()*1000)%62;//生成0-61的number作为随机验证码的下标
					 str+="<font color='#"+n1+"' size='"+n2+"'>"+nums[p]+"</font>";//拼接验证码
        }
        document.getElementById("checkCode").innerHTML = str;
    
		 
			 
		}

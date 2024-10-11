var paragarph=`Some of the biggest and most "expensive" transportation! projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.`
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')
console.log(paragarph);
paragarph=paragarph.split(" ");
console.log(paragarph);

var newarray=[]
var number='8';
var count=1;

for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){//its code for counting which word is occure highest time;
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}}
			newarray.push([paragarph[i],count]);
		    count=1;}}`	1`

for(let k=0;k<newarray.length;k++){//its code for decending the array based on count
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
			}}}	

var top=newarray.slice(0,3);
console.log(top);	
var text=""


for(let z=0;z<newarray.length;z++){//print the top three words along with count;
	
	text=text+"<h1>"+newarray[z][0]+"------------>"  +newarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;

		
	
		

		
		
	












